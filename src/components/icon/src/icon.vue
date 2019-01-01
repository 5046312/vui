<template>
  <button id="vui-icon" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "v-icon",
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "../../../styles/components/icon.scss";
</style>