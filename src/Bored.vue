<template>
  <div id="app">
    <div id="mainContent">
      <h1 class="announce">Let's find you something to do!</h1>
      <a onclick="location.reload()" class="myButton">Click here to find another one!</a>

      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Activity</p>
            <p class="title">{{activity}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Type</p>
            <p class="title">{{type}}</p>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activity: "",
      type: ""
    };
  },
  methods: {
    getData: function() {
      let gamesInfo = fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
          this.activity = data.activity;
          this.type = data.type;
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

.level {
  margin-top: 60px;
  border: 1px solid grey;
  border-radius: 50px;
  padding: 17px;
  width: 96%;
  margin-left: 14px;
}
</style>
