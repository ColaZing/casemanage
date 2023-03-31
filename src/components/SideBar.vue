<template>
  <div class="app-sidebar">
    <!--    <a href="" class="app-sidebar-link active">-->
    <router-link to="/home" class="app-sidebar-link" active-class="active">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="feather feather-home">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    </router-link>
    <router-link to="/test" class="app-sidebar-link" active-class="active">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
           stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
           class="feather feather-pie-chart" viewBox="0 0 24 24">
        <defs/>
        <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"/>
      </svg>
    </router-link>
    <router-link to="/result" class="app-sidebar-link" active-class="active">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="feather feather-calendar">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    </router-link>
    <router-link to="/setting" class="app-sidebar-link" active-class="active">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
           stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
           class="feather feather-settings" viewBox="0 0 24 24">
        <defs/>
        <circle cx="12" cy="12" r="3"/>
        <path
            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>

</style>

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

button, a {
  cursor: pointer;
}

.app-container button, .app-container input, .app-container optgroup, .app-container select, .app-container textarea {
  font-family: "DM Sans", sans-serif;
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

.app-sidebar {
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-sidebar-link {
  color: var(--link-color);
  margin: 16px 0;
  transition: 0.2s;
  border-radius: 50%;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-sidebar-link:hover {
  background-color: var(--link-color-hover);
  color: var(--link-color-active);
}

.app-sidebar-link.active {
  background-color: var(--link-color-active-bg);
  color: var(--link-color-active);
}

.projects-section-header p {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  opacity: 0.9;
  margin: 0;
  color: var(--main-color);
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

.project-boxes.jsListView .project-box > * {
  margin-right: 24px;
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


.project-box-header span {
  color: #4A4A4A;
  opacity: 0.7;
  font-size: 14px;
  line-height: 16px;
}

.project-box-content-header p {
  margin: 0;
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

@media screen and (max-width: 980px) {

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

  .profile-btn img {
    width: 24px;
    height: 24px;
  }

  .project-boxes.jsListView .project-box-header > span {
    font-size: 10px;
  }

  .project-boxes.jsListView .project-box > * {
    margin-right: 10px;
  }

}
</style>