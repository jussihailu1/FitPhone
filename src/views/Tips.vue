<template>
  <div class="main">
    <div v-for="selectedAnswer in selectedAnswers" :key="selectedAnswer.id">
      <p>{{ selectedAnswer.tip }}</p>
    </div>
    <div class="tip" v-for="tip in tips" :key="tip.id">
      <div class="title-btn">
        <h1 :class="$store.state.day ? 'text-gold text-xl mb-4' : 'text-blue text-xl mb-4'">{{tip.title}}</h1>
        <button class="btn-info" v-show="!tip.showReason" @click="tip.showReason = true"><md-icon :style="$store.state.day ? 'color: #FAB463;' : 'color: #88B5D5;'">info</md-icon></button>
        <button class="btn-info" v-show="tip.showReason" @click="tip.showReason = false"><md-icon :style="$store.state.day ? 'color: #FAB463;' : 'color: #88B5D5;'">cancel</md-icon></button>
      </div>
      <transition name="fade" mode="out-in">
        <div>
          <p class="description" v-show="!tip.showReason" style="margin: 0px;">{{tip.description}}</p>
          <p class="description" v-show="tip.showReason" style="margin: 0px;">{{tip.reason}}</p>
        </div>
      </transition>
  </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectedAnswers: this.$store.state.selectedAnswers,
      tips: this.$store.state.tips,

    };
  },
  methods: {
    test(Tip) {
        console.log(Tip.showReason);
    }
  }
};
</script>

<style>
.description {
  color: #fff;
}
.tip {
  background-color: grey;
  border-radius: 10px;
  padding: 0px 15px 15px 15px;
  margin-top: 5vh;
  margin-left: 2vw;
  margin-right: 2vw;
}
.title-btn {
  display: flex;
  align-items: baseline;
}
.btn-info {
  font-size: 2rem;
  margin-left: auto;
  height: min-content;
}
</style>