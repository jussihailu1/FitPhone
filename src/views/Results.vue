<template>
  <div class="text-white w-full h-full bg-bg-black p-4 justify-center">
    <div class="text-center text-2xl mb-6">Results</div>
    <h3>Time slept last week</h3>
    <div class="graph bg-box-black m-1 p-2 rounded-3xl mb-6">
      <div class="row">
        <div class="key">Mo</div>
        <div :class="$store.state.day ? 'value-container bg-gold' : 'value-container bg-blue'">
          <div :class="$store.state.day ? 'value day' : 'value night'" style="width: 50%">
            <span>5 h</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="key">Tu</div>
        <div :class="$store.state.day ? 'value-container bg-gold' : 'value-container bg-blue'">
          <div :class="$store.state.day ? 'value day' : 'value night'" style="width: 60%">
            <span>6 h</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="key">We</div>
        <div :class="$store.state.day ? 'value-container bg-gold' : 'value-container bg-blue'">
          <div :class="$store.state.day ? 'value day' : 'value night'" style="width: 70%">
            <span>7 h</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="key">Th</div>
        <div :class="$store.state.day ? 'value-container bg-gold' : 'value-container bg-blue'">
          <div :class="$store.state.day ? 'value day' : 'value night'" style="width: 60%">
            <span>6 h</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="key">Fr</div>
        <div :class="$store.state.day ? 'value-container bg-gold' : 'value-container bg-blue'">
          <div :class="$store.state.day ? 'value day' : 'value night'" style="width: 70%">
            <span>7 h</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="key">Sa</div>
        <div :class="$store.state.day ? 'value-container bg-gold' : 'value-container bg-blue'">
          <div :class="$store.state.day ? 'value day' : 'value night'" style="width: 50%">
            <span>5 h</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="key">Su</div>
        <div :class="$store.state.day ? 'value-container bg-gold' : 'value-container bg-blue'">
          <div :class="$store.state.day ? 'value day' : 'value night'" style="width: 40%">
            <span>4 h</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
h3{
  text-align: center;
  margin:5vh auto 3vh  auto ;
}

.row {
  display: flex;
  margin-bottom: 2vh;
}

[class~="row"]:last-of-type {
  margin-bottom: 0;
}

.key {
  width: 9vw;
  margin-left: 0.5em;
}

.value-container {
  display: flex;
  width: 100%;
  margin-left: 3vw;
  margin-right: 0.5vw;
  border-radius: 15px;
}

.value{
  border-radius: 15px;
}

span{
  float: right;
  margin-right: 0.75em;
}

.day{
background-color: #ff8900;
}

.night{
  background-color: #184392;
}
</style>