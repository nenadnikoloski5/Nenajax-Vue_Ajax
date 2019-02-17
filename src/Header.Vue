<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href>
          <img src="./assets/logo.png" width="25" height="40">
        </a>
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            <a class="navbar-item">Home</a>
          </router-link>

          <router-link class="navbar-item" to="sports">
            <a class="navbar-item">Basketball</a>
          </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Pictures Of..</a>

            <div class="navbar-dropdown">
              <router-link tag="a" class="navbar-item" to="/shibes">Shibes</router-link>
              <router-link tag="a" class="navbar-item" to="/foxes">Foxes</router-link>
              <router-link tag="a" class="navbar-item" to="/dogs">Dogs</router-link>
            </div>
          </div>

          <router-link class="navbar-item" to="bored">
            <a class="navbar-item">Bored?</a>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
 
<style>
@import "./assets/css/bulma.min.css";

.navbar {
  background: #f6f9fa;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
