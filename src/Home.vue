<template>
  <div id="app">
    <div id="mainContent">
      <h1 style="line-height: 80px; letter-spacing: -4px; text-align: center;">
        <span
          style="font-size: 82px;font-family: Montserrat;font-weight: 500;font-style: normal;"
        >Nenajax</span>
      </h1>
      <p style="line-height: 26px; text-align: center;">
        <span
          style="font-family: &quot;PT Serif&quot;; font-weight: 400; font-style: normal; font-size: 20px; color: rgb(145, 147, 150);"
        >Ever wondered what Basketball games are going to be played in the near future? Maybe you want to see some pictures of animals, or maybe you are just bored. You came to the right place! Select an option from the navigation bar to start.</span>
      </p>
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
#mainContent {
  width: 50%;
  margin: auto;
}
.table {
  margin: auto;
  margin-top: 15px;
}

.IndShow:hover {
  background-color: #00d1b2;
  color: #fff;
}

.announce {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 28px;
}

.patience {
  margin-bottom: 5px;
  font-weight: bold;
  color: blue;
}
.myButton {
  background-color: #44c767;
  -moz-border-radius: 28px;
  -webkit-border-radius: 28px;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
</style>
