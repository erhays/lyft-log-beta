<template>
  <div id="app">
    <b-container fluid>
      <b-navbar type="light" class="app-header">
        <b-navbar-brand href="/" class="app-logo">LyftLog</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item right to="history">View Log History</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </b-container>
    <b-container class="h-100" fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Lyft Log App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-header {
  background: #ffe4e1;
}

.app-logo {
  font-family: sans-serif;
  font-weight: 900;
  letter-spacing: -.02rem;
  color: #2e2e2e;
}
</style>
