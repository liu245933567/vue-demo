<template>
  <div class="layout">
    <div class="layout__header">
      <slot name="header"> 这是头部 </slot>
    </div>
    <div class="layout__content">
      <div class="layout__content__wrapper">
        <slot />
      </div>
    </div>
    <div class="layout__footer">
      <slot name="footer"> 这是底部 </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
  data() {
    return {};
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
.layout {
  height: 100vh;

  display: flex;
  flex-direction: column;
}
.layout__header {
  background: red;
}
.layout__content {
  flex: 1;
  overflow-y: auto;
}
.layout__content__wrapper {
  height: 100%;
}
.layout__footer {
  background: red;
}
</style>
