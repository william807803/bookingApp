<template>
  <div id="app">
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.main {
  margin: 0;
  padding: 0;
}

.b-main-content {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
}

.b-form-1 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 0.2rem;
}
.ivu-menu-vertical.ivu-menu-light:after{
  width: 0px !important;
}
</style>
