<template>
  <div class="content">
    <div class="app-container">
      <HeaderBar/>
      <div class="app-content">
        <SideBar/>
        <div class="chat-container">
          <div class="message-list">
            <!-- 循环渲染每个消息 -->
            <div v-for="message in messages" :key="message.id" class="message">
              <div class="message-header">
                <div class="sender">{{ message.sender }}</div>
<!--                <div class="timestamp">{{ message.timestamp }}</div>-->
              </div>
              <div class="message-body-container" :class="{'outgoing': message.sender === '我'}">
                <div class="message-body">{{ message.text }}</div>
              </div>
            </div>
          </div>
          <div class="message-input">
            <input type="text" v-model="newMessageText" placeholder="输入消息...">
            <button @click="sendMessage">发送</button>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import HeaderBar from "../components/HeaderBar.vue";
import SideBar from "../components/SideBar.vue";
import {reqSetCompletions} from "../api/index.js";


const messages = ref([
  {
    id: 1,
    sender: 'GPT-3',
    text: '你好！',
    timestamp: new Date().toLocaleString()
  },
])

const newMessageText = ref('')

const response = ref('')
const prompt = ref('')

// 发送消息
async function sendMessage() {
  if (newMessageText.value.trim() !== '') {
    const newMessage = {
      id: messages.value.length + 1,
      sender: '我',
      text: newMessageText.value.trim(),
      timestamp: new Date().toLocaleString()
    }
    messages.value.push(newMessage)
    prompt.value = newMessageText.value.trim()
    newMessageText.value = ''

    const res = await reqSetCompletions('测试', '12345678', prompt.value, "你是一个擅长编程领域的人工助手")
    if (res.message === 'OK') {
      console.log('2222222', res.message);
      response.value = ''
      const newResponseMessage = {
        id: messages.value.length + 1,
        sender: 'GPT-3',
        text: 'Loading...',
        timestamp: new Date().toLocaleString()
      }
      messages.value.push(newResponseMessage)
      const eventSource = new EventSource('https://booms.life:8000/api/completions/?session=' + '12345678');
      eventSource.addEventListener('message', event => {
        console.log('event', event);
        response.value = response.value + event.data
        // 更新最新一条消息的内容
        messages.value[messages.value.length - 1].text = response.value
      });
      eventSource.addEventListener('open', event => {
        console.log('open', event);
      });
      eventSource.addEventListener('error', event => {
        console.log('error', event);
        eventSource.close();
      });
      eventSource.addEventListener('close', event => {
        console.log('close', event);
        eventSource.close();
      });
    }


  }
}


</script>

<style>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.message {
  margin-bottom: 16px;
}

.message-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
}

.sender {
  font-weight: bold;
}

.message-body-container {
  position: relative;
  display: inline-block;
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.4;
  box-shadow: 1px 2px 6px rgba(0,0,0,.1);
}

.message-body-container.outgoing {
  text-align: right;
  background-color: #4caf50;
  color: #fff;
/*  靠右*/
  margin-right: auto;
}

.message-body {
  margin-bottom: 8px;
  max-width: 400px;
}


.message-body-container.outgoing .message-bubble {
  left: -8px;
  right: auto;
}

.message-input {
  display: flex;
  align-items: center;
  padding: 16px;
}

.message-input input {
  flex: 1;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 16px;
}

.message-input button {
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #4caf50;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}

.message-input button:hover {
  background-color: #388e3c;
}
</style>


