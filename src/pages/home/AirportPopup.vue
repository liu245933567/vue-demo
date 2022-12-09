<template>
  <Popup :show="show" position="bottom" closeable @close="close">
    <div class="airport-list">机场列表</div>
  </Popup>
</template>

<script>
import { defineComponent } from "vue";
import { Popup } from "vant";

export default defineComponent({
  name: "AirportPopup",
  components: { Popup },
  props: {
    show: Boolean,
  },

  emits: ["update:show"],

  setup(props, { emit }) {
    const close = () => {
      emit("update:show", false);
    };
    return { close };
  },
});
</script>

<style lang="scss">
.airport-list {
  height: 400px;
}
</style>
