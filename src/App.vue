<template>
  <div class="home-page">
    <router-view />
  </div>
</template>


<style>
* {
  box-sizing: border-box;
}

.content {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
}

:root {
  --app-container: #f3f6fd;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #fafafa;
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

.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--app-container);
  transition: 0.2s;
  /*max-width: 1800px;*/
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

  .app-content {
    padding: 16px 12px 24px 12px;
  }

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