<template>
  <div id="app">
    <div id="mainContent">
      <h1 class="announce">A random picture of a Shibe!</h1>
      <a onclick="location.reload()" class="myButton">Click here to see another one!</a>

      <h1 class="patience">It's a slow API, be patient!</h1>

      <img :src="src" alt srcset>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      src: ""
    };
  },
  methods: {
    getData: function() {
      var proxyUrl = "https://cors-anywhere.herokuapp.com/";
      let gamesInfo = fetch(
        proxyUrl + "http://shibe.online/api/shibes?count=[1]"
      )
        .then(response => response.json())
        .then(data => {
          this.src = data;
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
 
<style>
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
