<template>
  <div id="app">
    <headerPartial></headerPartial>

    <div id="mainShowRouter">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
 
<style>
#mainShowRouter {
  margin-top: 150px;
}
</style>
