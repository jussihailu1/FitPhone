<template>
  <button
    class="py-2 px-16 rounded-2xl tracking-wider text-xl"
    type="submit"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: String
  },
};
</script>

<style lang="scss" scoped>
</style>