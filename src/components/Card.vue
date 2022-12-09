<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "jt-card",
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
.card {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid red;
}
</style>
