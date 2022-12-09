<template>
  <section class="Button">
    <div>自定义按钮</div>
    <button
      class="jt-button"
      :style="{
        width: width + 'px',
      }"
      @click="toDetail"
    >
      {{ text }}
    </button>
  </section>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "jt-button",
  props: {
    text: String,
    width: {
      type: Number,
      default: 200,
    },
  },
  setup() {
    const router = useRouter();

    const toDetail = () =>
      router.push({
        path: "/detail",
      });

    return {
      toDetail,
    };
  },
};
</script>

<style>
.jt-button {
  width: 200px;
  height: 50px;
}
</style>
