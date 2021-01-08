<template>
    <div class="bottom-bar">
      <md-bottom-bar md-type="shift">
        <md-bottom-bar-item to="/" md-label="Home" md-icon="analytics"></md-bottom-bar-item>
        <md-bottom-bar-item to="/clock" md-label="Clock" md-icon="alarm"></md-bottom-bar-item>
        <md-bottom-bar-item to="/tips" md-label="Tips" md-icon="info"></md-bottom-bar-item>
        <md-bottom-bar-item to="/questions" md-label="Questions" md-icon="help"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
</template>

<style lang="css" scoped>
  .bottom-bar {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>