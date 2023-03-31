<template>
  <div class="content">
    <div class="app-container">
      <HeaderBar/>
      <div class="app-content">
        <SideBar/>

      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted} from "vue";
import HeaderBar from "../components/HeaderBar.vue";
import SideBar from "../components/SideBar.vue";

</script>

