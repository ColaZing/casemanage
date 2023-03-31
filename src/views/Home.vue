<template>
  <div class="content">
    <div class="app-container">
      <HeaderBar/>
      <div class="app-content">
        <SideBar/>
        <div class="projects-section">
          <div class="projects-section-header">
            <p>项目仪表盘</p>
            <p class="time">December, 12</p>
          </div>
          <div class="projects-section-line">
            <div class="projects-status">
              <div class="item-status">
                <span class="status-number">45</span>
                <span class="status-type">测试中</span>
              </div>
              <div class="item-status">
                <span class="status-number">24</span>
                <span class="status-type">已完成</span>
              </div>
              <div class="item-status">
                <span class="status-number">62</span>
                <span class="status-type">接入项目</span>
              </div>
            </div>
          </div>
          <el-scrollbar style="height: 100%" wrap-style="overflow-x:hidden;">
            <div class="project-boxes jsGridView">
              <div class="project-box-wrapper">
                <div class="project-box" style="background-color: #e9e7fd;">
                  <div class="project-box-header">
                    <span>创建时间：2023.3.21</span>
                    <div class="more-wrapper">
                      <button class="project-btn-more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-more-vertical">
                          <circle cx="12" cy="12" r="1"/>
                          <circle cx="12" cy="5" r="1"/>
                          <circle cx="12" cy="19" r="1"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="project-box-content-header">
                    <p class="box-content-header">项目名称</p>
                    <p class="box-content-subheader">迭代版本：1.0</p>
                  </div>
                  <div class="box-progress-wrapper">
                    <p class="box-progress-header">执行进度</p>
                    <div class="box-progress-bar">
                      <span class="box-progress" style="width: 50%; background-color: #4f3ff0"></span>
                    </div>
                    <p class="box-progress-percentage">50%</p>
                  </div>
                  <div class="project-box-footer">
                    <div class="participants">
                      <img
                          src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                          alt="participant">
                      <img
                          src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                          alt="participant">
                      <button class="add-participant" style="color: #4f3ff0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-plus">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                    <div class="days-left" style="color: #4f3ff0;">
                      剩余时间：2天
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-box-wrapper">
                <div class="project-box" style="background-color: #e9e7fd;">
                  <div class="project-box-header">
                    <span>创建时间：2023.3.21</span>
                    <div class="more-wrapper">
                      <button class="project-btn-more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-more-vertical">
                          <circle cx="12" cy="12" r="1"/>
                          <circle cx="12" cy="5" r="1"/>
                          <circle cx="12" cy="19" r="1"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="project-box-content-header">
                    <p class="box-content-header">项目名称</p>
                    <p class="box-content-subheader">迭代版本：1.0</p>
                  </div>
                  <div class="box-progress-wrapper">
                    <p class="box-progress-header">执行进度</p>
                    <div class="box-progress-bar">
                      <span class="box-progress" style="width: 50%; background-color: #4f3ff0"></span>
                    </div>
                    <p class="box-progress-percentage">50%</p>
                  </div>
                  <div class="project-box-footer">
                    <div class="participants">
                      <img
                          src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                          alt="participant">
                      <img
                          src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                          alt="participant">
                      <button class="add-participant" style="color: #4f3ff0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-plus">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                    <div class="days-left" style="color: #4f3ff0;">
                      剩余时间：2天
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-box-wrapper">
                <div class="project-box" style="background-color: #e9e7fd;">
                  <div class="project-box-header">
                    <span>创建时间：2023.3.21</span>
                    <div class="more-wrapper">
                      <button class="project-btn-more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-more-vertical">
                          <circle cx="12" cy="12" r="1"/>
                          <circle cx="12" cy="5" r="1"/>
                          <circle cx="12" cy="19" r="1"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="project-box-content-header">
                    <p class="box-content-header">项目名称</p>
                    <p class="box-content-subheader">迭代版本：1.0</p>
                  </div>
                  <div class="box-progress-wrapper">
                    <p class="box-progress-header">执行进度</p>
                    <div class="box-progress-bar">
                      <span class="box-progress" style="width: 50%; background-color: #4f3ff0"></span>
                    </div>
                    <p class="box-progress-percentage">50%</p>
                  </div>
                  <div class="project-box-footer">
                    <div class="participants">
                      <img
                          src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                          alt="participant">
                      <img
                          src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                          alt="participant">
                      <button class="add-participant" style="color: #4f3ff0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-plus">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                    <div class="days-left" style="color: #4f3ff0;">
                      剩余时间：2天
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-box-wrapper">
                <div class="project-box" style="background-color: #e9e7fd;">
                  <div class="project-box-header">
                    <span>创建时间：2023.3.21</span>
                    <div class="more-wrapper">
                      <button class="project-btn-more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-more-vertical">
                          <circle cx="12" cy="12" r="1"/>
                          <circle cx="12" cy="5" r="1"/>
                          <circle cx="12" cy="19" r="1"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="project-box-content-header">
                    <p class="box-content-header">项目名称</p>
                    <p class="box-content-subheader">迭代版本：1.0</p>
                  </div>
                  <div class="box-progress-wrapper">
                    <p class="box-progress-header">执行进度</p>
                    <div class="box-progress-bar">
                      <span class="box-progress" style="width: 50%; background-color: #4f3ff0"></span>
                    </div>
                    <p class="box-progress-percentage">50%</p>
                  </div>
                  <div class="project-box-footer">
                    <div class="participants">
                      <img
                          src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                          alt="participant">
                      <img
                          src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                          alt="participant">
                      <button class="add-participant" style="color: #4f3ff0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-plus">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                    <div class="days-left" style="color: #4f3ff0;">
                      剩余时间：2天
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-box-wrapper">
                <div class="project-box" style="background-color: #e9e7fd;">
                  <div class="project-box-header">
                    <span>创建时间：2023.3.21</span>
                    <div class="more-wrapper">
                      <button class="project-btn-more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-more-vertical">
                          <circle cx="12" cy="12" r="1"/>
                          <circle cx="12" cy="5" r="1"/>
                          <circle cx="12" cy="19" r="1"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="project-box-content-header">
                    <p class="box-content-header">项目名称</p>
                    <p class="box-content-subheader">迭代版本：1.0</p>
                  </div>
                  <div class="box-progress-wrapper">
                    <p class="box-progress-header">执行进度</p>
                    <div class="box-progress-bar">
                      <span class="box-progress" style="width: 50%; background-color: #4f3ff0"></span>
                    </div>
                    <p class="box-progress-percentage">50%</p>
                  </div>
                  <div class="project-box-footer">
                    <div class="participants">
                      <img
                          src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                          alt="participant">
                      <img
                          src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                          alt="participant">
                      <button class="add-participant" style="color: #4f3ff0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-plus">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                    <div class="days-left" style="color: #4f3ff0;">
                      剩余时间：2天
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-box-wrapper">
                <div class="project-box" style="background-color: #e9e7fd;">
                  <div class="project-box-header">
                    <span>创建时间：2023.3.21</span>
                    <div class="more-wrapper">
                      <button class="project-btn-more">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-more-vertical">
                          <circle cx="12" cy="12" r="1"/>
                          <circle cx="12" cy="5" r="1"/>
                          <circle cx="12" cy="19" r="1"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="project-box-content-header">
                    <p class="box-content-header">项目名称</p>
                    <p class="box-content-subheader">迭代版本：1.0</p>
                  </div>
                  <div class="box-progress-wrapper">
                    <p class="box-progress-header">执行进度</p>
                    <div class="box-progress-bar">
                      <span class="box-progress" style="width: 50%; background-color: #4f3ff0"></span>
                    </div>
                    <p class="box-progress-percentage">50%</p>
                  </div>
                  <div class="project-box-footer">
                    <div class="participants">
                      <img
                          src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                          alt="participant">
                      <img
                          src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                          alt="participant">
                      <button class="add-participant" style="color: #4f3ff0;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-plus">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </button>
                    </div>
                    <div class="days-left" style="color: #4f3ff0;">
                      剩余时间：2天
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-scrollbar>

        </div>

      </div>
    </div>
  </div>

</template>

<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import SideBar from "../components/SideBar.vue";

</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --app-container: #f3f6fd;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  --link-color-active: #fff;
  --link-color-active-bg: #1f1c2e;
  --projects-section: #fff;
  --message-box-hover: #fafcff;
  --message-box-border: #e9ebf0;
  --more-list-bg: #fff;
  --more-list-bg-hover: #f6fbff;
  --more-list-shadow: rgba(209, 209, 209, 0.4);
  --button-bg: #1f1c24;
  --search-area-bg: #fff;
  --star: #1ff1c2e;
  --message-btn: #fff;
}

html, body {
  width: 100%;
  height: 100vh;
  margin: 0;
}

body {
  font-family: "DM Sans", sans-serif;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: var(--app-container);
}

button, a {
  cursor: pointer;
}

.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--app-container);
  transition: 0.2s;
  max-width: 1800px;
}

.app-container button, .app-container input, .app-container optgroup, .app-container select, .app-container textarea {
  font-family: "DM Sans", sans-serif;
}

.app-content {
  display: flex;
  height: 100%;
  overflow: hidden;
  padding: 16px 24px 24px 0;
}

.app-header-right button {
  margin-left: 10px;
}

.profile-btn img {
  width: 32px;
  height: 32px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 4px;
}

.profile-btn span {
  color: var(--main-color);
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}


.projects-section {
  flex: 2;
  background-color: var(--projects-section);
  border-radius: 32px;
  padding: 32px 32px 0 32px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.projects-section-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
}

.projects-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  color: var(--main-color);
}

.projects-section-header p {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  opacity: 0.9;
  margin: 0;
  color: var(--main-color);
}

.projects-section-header .time {
  font-size: 20px;
}

.projects-status {
  display: flex;
}

.item-status {
  display: flex;
  flex-direction: column;
  margin-right: 16px;
}

.item-status:not(:last-child) .status-type:after {
  content: "";
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translatey(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid var(--secondary-color);
}

.status-number {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: var(--main-color);
}

.status-type {
  position: relative;
  padding-right: 24px;
  color: var(--secondary-color);
}

.view-actions {
  display: flex;
  align-items: center;
}

.view-btn {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  color: var(--main-color);
  margin-left: 8px;
  transition: 0.2s;
}

.view-btn.active {
  background-color: var(--link-color-active-bg);
  color: var(--link-color-active);
}

.view-btn:not(.active):hover {
  background-color: var(--link-color-hover);
  color: var(--link-color-active);
}

* {
  box-sizing: border-box;
}

:root {
  --app-container: #f3f6fd;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  --link-color-active: #fff;
  --link-color-active-bg: #1f1c2e;
  --projects-section: #fff;
  --message-box-hover: #fafcff;
  --message-box-border: #e9ebf0;
  --more-list-bg: #fff;
  --more-list-bg-hover: #f6fbff;
  --more-list-shadow: rgba(209, 209, 209, 0.4);
  --button-bg: #1f1c24;
  --search-area-bg: #fff;
  --star: #1ff1c2e;
  --message-btn: #fff;
}

html, body {
  width: 100%;
  height: 100vh;
  margin: 0;
}

body {
  font-family: "DM Sans", sans-serif;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: var(--app-container);
}

button, a {
  cursor: pointer;
}

.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--app-container);
  transition: 0.2s;
  max-width: 1800px;
}

.app-container button, .app-container input, .app-container optgroup, .app-container select, .app-container textarea {
  font-family: "DM Sans", sans-serif;
}

.app-content {
  display: flex;
  height: 100%;
  overflow: hidden;
  padding: 16px 24px 24px 0;
}

.app-header-right button {
  margin-left: 10px;
}


.profile-btn img {
  width: 32px;
  height: 32px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 4px;
}

.profile-btn span {
  color: var(--main-color);
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
}


.projects-section {
  flex: 2;
  background-color: var(--projects-section);
  border-radius: 32px;
  padding: 32px 32px 0 32px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.projects-section-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
}

.projects-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  color: var(--main-color);
}

.projects-section-header p {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  opacity: 0.9;
  margin: 0;
  color: var(--main-color);
}

.projects-section-header .time {
  font-size: 20px;
}

.projects-status {
  display: flex;
}

.item-status {
  display: flex;
  flex-direction: column;
  margin-right: 16px;
}

.item-status:not(:last-child) .status-type:after {
  content: "";
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translatey(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid var(--secondary-color);
}

.status-number {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: var(--main-color);
}

.status-type {
  position: relative;
  padding-right: 24px;
  color: var(--secondary-color);
}

.view-actions {
  display: flex;
  align-items: center;
}

.view-btn {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  color: var(--main-color);
  margin-left: 8px;
  transition: 0.2s;
}

.view-btn.active {
  background-color: var(--link-color-active-bg);
  color: var(--link-color-active);
}

.view-btn:not(.active):hover {
  background-color: var(--link-color-hover);
  color: var(--link-color-active);
}

.messages-section .projects-section-header {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 32px 24px 0 24px;
  background-color: var(--projects-section);
}

.message-box img {
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 40px;
  height: 40px;
}

.star-checkbox input {
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
}

.star-checkbox label {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.dark .star-checkbox input:checked + label {
  color: var(--star);
}

.star-checkbox input:checked + label svg {
  fill: var(--star);
  transition: 0.2s;
}

.project-boxes {
  margin: 0 -8px;
  overflow-y: auto;
}

.project-boxes.jsGridView {
  display: flex;
  flex-wrap: wrap;
}

.project-boxes.jsGridView .project-box-wrapper {
  width: 33.3%;
}

.project-boxes.jsListView .project-box {
  display: flex;
  border-radius: 10px;
  position: relative;
}

.project-boxes.jsListView .project-box > * {
  margin-right: 24px;
}

.project-boxes.jsListView .more-wrapper {
  position: absolute;
  right: 16px;
  top: 16px;
}

.project-boxes.jsListView .project-box-content-header {
  order: 1;
  max-width: 120px;
}

.project-boxes.jsListView .project-box-header {
  order: 2;
}

.project-boxes.jsListView .project-box-footer {
  order: 3;
  padding-top: 0;
  flex-direction: column;
  justify-content: flex-start;
}

.project-boxes.jsListView .project-box-footer:after {
  display: none;
}

.project-boxes.jsListView .participants {
  margin-bottom: 8px;
}

.project-boxes.jsListView .project-box-content-header p {
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.project-boxes.jsListView .project-box-header > span {
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 12px;
}

.project-box {
  --main-color-card: #dbf6fd;
  border-radius: 30px;
  padding: 16px;
  background-color: var(--main-color-card);
}

.project-box-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  color: var(--main-color);
  height: 18px;
}

.project-box-header span {
  color: #4A4A4A;
  opacity: 0.7;
  font-size: 14px;
  line-height: 16px;
}

.project-box-content-header {
  text-align: center;
  margin-bottom: 16px;
}

.project-box-content-header p {
  margin: 0;
}

.project-box-wrapper {
  padding: 8px;
  transition: 0.2s;
}

.project-btn-more {
  padding: 0;
  width: 24px;
  position: relative;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  /*&:after, &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--main-color);
    opacity: .8;
    left: 50%;
    transform: translatex(-50%);
  }

  &:before { top: 0;}
  &:after { bottom: 0; }*/
}

.more-wrapper {
  position: relative;
}

.box-content-header {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
}

.box-content-subheader {
  font-size: 14px;
  line-height: 24px;
  opacity: 0.7;
}

.box-progress {
  display: block;
  height: 4px;
  border-radius: 6px;
}

.box-progress-bar {
  width: 100%;
  height: 4px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  margin: 8px 0;
}

.box-progress-header {
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 0;
}

.box-progress-percentage {
  text-align: right;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
}

.project-box-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  position: relative;
}

.project-box-footer:after {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  width: calc(100% + 32px);
  top: 0;
  left: -16px;
  height: 1px;
}

.participants {
  display: flex;
  align-items: center;
}

.participants img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
}

.participants img:not(:first-child) {
  margin-left: -8px;
}

.add-participant {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  margin-left: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.days-left {
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  border-radius: 20px;
  flex-shrink: 0;
  padding: 6px 16px;
  font-weight: 700;
}

@media screen and (max-width: 980px) {
  .project-boxes.jsGridView .project-box-wrapper {
    width: 50%;
  }

  .status-number, .status-type {
    font-size: 14px;
  }

  .status-type:after {
    width: 4px;
    height: 4px;
  }

  .item-status {
    margin-right: 0;
  }
}

@media screen and (max-width: 880px) {

}

@media screen and (max-width: 720px) {

  .add-btn svg, .notification-btn svg, .mode-switch svg {
    width: 16px;
    height: 16px;
  }

  .app-header-right button {
    margin-left: 4px;
  }
}

@media screen and (max-width: 520px) {
  .projects-section {
    overflow: auto;
  }

  .project-boxes {
    overflow-y: visible;
  }

  .app-content {
    padding: 16px 12px 24px 12px;
  }

  .status-number, .status-type {
    font-size: 10px;
  }

  .view-btn {
    width: 24px;
    height: 24px;
  }

  .project-boxes.jsGridView .project-box-wrapper {
    width: 100%;
  }

  .projects-section {
    padding: 24px 16px 0 16px;
  }

  .profile-btn img {
    width: 24px;
    height: 24px;
  }

  .projects-section-header p,
  .projects-section-header .time {
    font-size: 18px;
  }

  .status-type {
    padding-right: 4px;
  }

  .status-type:after {
    display: none;
  }

  .box-content-header {
    font-size: 12px;
    line-height: 16px;
  }

  .box-content-subheader {
    font-size: 12px;
    line-height: 16px;
  }

  .project-boxes.jsListView .project-box-header > span {
    font-size: 10px;
  }

  .box-progress-header {
    font-size: 12px;
  }

  .box-progress-percentage {
    font-size: 10px;
  }

  .days-left {
    font-size: 8px;
    padding: 6px 6px;
    text-align: center;
  }

  .project-boxes.jsListView .project-box > * {
    margin-right: 10px;
  }

  .project-boxes.jsListView .more-wrapper {
    right: 2px;
    top: 10px;
  }
}

.messages-section .projects-section-header {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 32px 24px 0 24px;
  background-color: var(--projects-section);
}

.message-box img {
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 40px;
  height: 40px;
}

.star-checkbox input {
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
}

.star-checkbox label {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.dark .star-checkbox input:checked + label {
  color: var(--star);
}

.star-checkbox input:checked + label svg {
  fill: var(--star);
  transition: 0.2s;
}

.project-boxes {
  margin: 0 -8px;
  overflow-y: auto;
  overflow-x: hidden;
}

.project-boxes.jsGridView {
  display: flex;
  flex-wrap: wrap;
}

.project-boxes.jsGridView .project-box-wrapper {
  width: 33.3%;
}

.project-boxes.jsListView .project-box {
  display: flex;
  border-radius: 10px;
  position: relative;
}

.project-boxes.jsListView .project-box > * {
  margin-right: 24px;
}

.project-boxes.jsListView .more-wrapper {
  position: absolute;
  right: 16px;
  top: 16px;
}

.project-boxes.jsListView .project-box-content-header {
  order: 1;
  max-width: 120px;
}

.project-boxes.jsListView .project-box-header {
  order: 2;
}

.project-boxes.jsListView .project-box-footer {
  order: 3;
  padding-top: 0;
  flex-direction: column;
  justify-content: flex-start;
}

.project-boxes.jsListView .project-box-footer:after {
  display: none;
}

.project-boxes.jsListView .participants {
  margin-bottom: 8px;
}

.project-boxes.jsListView .project-box-content-header p {
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.project-boxes.jsListView .project-box-header > span {
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 12px;
}

.project-box {
  --main-color-card: #dbf6fd;
  border-radius: 30px;
  padding: 16px;
  background-color: var(--main-color-card);
}

.project-box-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  color: var(--main-color);
}

.project-box-header span {
  color: #4A4A4A;
  opacity: 0.7;
  font-size: 14px;
  line-height: 16px;
}

.project-box-content-header {
  text-align: center;
  margin-bottom: 16px;
}

.project-box-content-header p {
  margin: 0;
}

.project-box-wrapper {
  padding: 8px;
  transition: 0.2s;
}

.project-btn-more {
  padding: 0;
  width: 24px;
  position: relative;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  /*&:after, &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--main-color);
    opacity: .8;
    left: 50%;
    transform: translatex(-50%);
  }

  &:before { top: 0;}
  &:after { bottom: 0; }*/
}

.more-wrapper {
  position: relative;
}

.box-content-header {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
}

.box-content-subheader {
  font-size: 14px;
  line-height: 24px;
  opacity: 0.7;
}

.box-progress {
  display: block;
  height: 4px;
  border-radius: 6px;
}

.box-progress-bar {
  width: 100%;
  height: 4px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  margin: 8px 0;
}

.box-progress-header {
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 0;
}

.box-progress-percentage {
  text-align: right;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
}

.project-box-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  position: relative;
}

.project-box-footer:after {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  width: calc(100% + 32px);
  top: 0;
  left: -16px;
  height: 1px;
}

.participants {
  display: flex;
  align-items: center;
}

.participants img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
}

.participants img:not(:first-child) {
  margin-left: -8px;
}

.add-participant {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  margin-left: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.days-left {
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  border-radius: 20px;
  flex-shrink: 0;
  padding: 6px 16px;
  font-weight: 700;
}


@media screen and (max-width: 980px) {
  .project-boxes.jsGridView .project-box-wrapper {
    width: 50%;
  }

  .status-number, .status-type {
    font-size: 14px;
  }

  .status-type:after {
    width: 4px;
    height: 4px;
  }

  .item-status {
    margin-right: 0;
  }
}

@media screen and (max-width: 880px) {

}

@media screen and (max-width: 720px) {

  .add-btn svg, .notification-btn svg, .mode-switch svg {
    width: 16px;
    height: 16px;
  }

  .app-header-right button {
    margin-left: 4px;
  }
}

@media screen and (max-width: 520px) {
  .projects-section {
    overflow: auto;
  }

  .project-boxes {
    overflow-y: visible;
  }

  .app-content {
    padding: 16px 12px 24px 12px;
  }

  .status-number, .status-type {
    font-size: 10px;
  }

  .view-btn {
    width: 24px;
    height: 24px;
  }

  .project-boxes.jsGridView .project-box-wrapper {
    width: 100%;
  }

  .projects-section {
    padding: 24px 16px 0 16px;
  }

  .profile-btn img {
    width: 24px;
    height: 24px;
  }

  .projects-section-header p,
  .projects-section-header .time {
    font-size: 18px;
  }

  .status-type {
    padding-right: 4px;
  }

  .status-type:after {
    display: none;
  }

  .box-content-header {
    font-size: 12px;
    line-height: 16px;
  }

  .box-content-subheader {
    font-size: 12px;
    line-height: 16px;
  }

  .project-boxes.jsListView .project-box-header > span {
    font-size: 10px;
  }

  .box-progress-header {
    font-size: 12px;
  }

  .box-progress-percentage {
    font-size: 10px;
  }

  .days-left {
    font-size: 8px;
    padding: 6px 6px;
    text-align: center;
  }

  .project-boxes.jsListView .project-box > * {
    margin-right: 10px;
  }

  .project-boxes.jsListView .more-wrapper {
    right: 2px;
    top: 10px;
  }
}
</style>