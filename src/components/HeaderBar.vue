<template>
  <div class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">测试管理平台</p>
      <div class="search-wrapper">
        <input class="search-input" type="text" placeholder="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
             stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search"
             viewBox="0 0 24 24">
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>
    <div class="app-header-right">
      <button class="profile-btn">
        <img src="https://avatars.githubusercontent.com/u/120615053?v=4"/>
        <span>Cola T.</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar"
}
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

button, a {
  cursor: pointer;
}

.app-container button, .app-container input, .app-container optgroup, .app-container select, .app-container textarea {
  font-family: "DM Sans", sans-serif;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  position: relative;
}

.app-header-left, .app-header-right {
  display: flex;
  align-items: center;
}

.app-header-left {
  flex-grow: 1;
}

.app-header-right button {
  margin-left: 10px;
}

.app-icon {
  width: 26px;
  height: 2px;
  border-radius: 4px;
  background-color: var(--main-color);
  position: relative;
}

.app-icon:before, .app-icon:after {
  content: "";
  position: absolute;
  width: 12px;
  height: 2px;
  border-radius: 4px;
  background-color: var(--main-color);
  left: 50%;
  transform: translatex(-50%);
}

.app-icon:before {
  top: -6px;
}

.app-icon:after {
  bottom: -6px;
}

.app-name {
  color: var(--main-color);
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin: 0 32px;
}

.search-wrapper {
  border-radius: 20px;
  background-color: var(--search-area-bg);
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
  overflow: hidden;
}

.dark .search-wrapper {
  box-shadow: none;
}

.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 20px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);
}

.search-input::placeholder {
  color: var(--main-color);
  opacity: 0.6;
}

.profile-btn {
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0 0 0 12px;
  border-left: 2px solid #ddd;
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
  .app-name, .profile-btn span {
    display: none;
  }

  .add-btn svg, .notification-btn svg, .mode-switch svg {
    width: 16px;
    height: 16px;
  }

  .app-header-right button {
    margin-left: 4px;
  }
}

@media screen and (max-width: 520px) {

  .app-header {
    padding: 16px 10px;
  }

  .search-input {
    max-width: 120px;
  }

  .profile-btn img {
    width: 24px;
    height: 24px;
  }

  .app-header {
    padding: 10px;
  }

  .search-input {
    font-size: 14px;
  }

  .project-boxes.jsListView .project-box-header > span {
    font-size: 10px;
  }

  .project-boxes.jsListView .project-box > * {
    margin-right: 10px;
  }

}
</style>