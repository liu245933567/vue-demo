<template>
  <div class="flight-search">
    <div @click="airportShow = true">北京大兴</div>

    <div class="flight-search__date" @click="show = true">
      去程日期 {{ startDate }}
    </div>

    <AirportPopup v-model:show="airportShow" />

    <Calendar v-model:show="show" @confirm="onConfirm" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Calendar } from "vant";
import dayjs from "dayjs";
import AirportPopup from "./AirportPopup.vue";

export default defineComponent({
  name: "flight-search",
  components: {
    Calendar,
    AirportPopup,
  },
  setup() {
    const startDate = ref(dayjs().format("YYYY-MM-DD"));

    const show = ref(false);

    const airportShow = ref(false);

    const formatDate = (date) => dayjs(date).format("YYYY-MM-DD");

    const onConfirm = (value) => {
      show.value = false;
      startDate.value = formatDate(value);
    };

    return {
      startDate,
      show,
      onConfirm,
      airportShow,
    };
  },
});
</script>

<style lang="scss">
.flight-search {
  &__date {
    margin-top: 20px;
  }
}
</style>
