<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
  import MHeader from 'components/header/m-header'
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player'

  export default {
    name: 'app',
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>

<style lang="scss">
  @import './common/styles/variable.scss';

  #app {
    color: $color-theme;
  }
</style>
