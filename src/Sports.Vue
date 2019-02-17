<template>
  <div id="app">
    <div id="mainContent">
      <h1 class="announce">Future Basketball Games</h1>

      <!-- <ul>
        <li
          v-for="(games,index) in futureGames"
        >Home Team: {{games.home_team.full_name}} VS. Visitor Team: {{games.visitor_team.full_name}}</li>
      </ul>-->
      <table class="table">
        <thead>
          <tr>
            <th>
              <abbr title="Position">Pos</abbr>
            </th>
            <th>Home Team</th>
            <th>
              <abbr>Visitor Team</abbr>
            </th>
            <th>
              <abbr>Date</abbr>
            </th>
            <th>
              <abbr>Time</abbr>
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr title="Position">Pos</abbr>
            </th>
            <th>Home Team</th>
            <th>
              <abbr>Visitor Team</abbr>
            </th>
            <th>
              <abbr>Date</abbr>
            </th>
            <th>
              <abbr>Time</abbr>
            </th>
          </tr>
        </tfoot>
        <tbody class="IndShow" v-for="(games,index) in futureGames" :key="games.id">
          <tr>
            <th>{{index+1}}</th>
            <td>{{games.home_team.full_name}}</td>
            <td>{{games.visitor_team.full_name}}</td>
            <td>{{games.date.slice(0,-14)}}</td>
            <td>{{games.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      futureGames: []
    };
  },
  methods: {
    getData: function() {
      let gamesInfo = fetch(
        "https://www.balldontlie.io/api/v1/games?per_page=10"
      )
        .then(response => response.json())
        .then(gameData => {
          gameData.data.forEach(element => {
            this.futureGames.push(element);
          });
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
</style>
