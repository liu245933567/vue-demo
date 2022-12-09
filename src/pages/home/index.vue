<template>
  <div class="home-page">
    <Swipe class="my-swipe" :autoplay="3000" lazy-render>
      <SwipeItem v-for="image in images" :key="image">
        <img class="my-swipe__img" :src="image" />
      </SwipeItem>
    </Swipe>

    <Card>
      <Tabs v-model:active="active">
        <Tab title="国内机场">
          <FlightSearch />
        </Tab>
        <Tab title="国际机场"> 国际机场 内容 2</Tab>
      </Tabs>

      <Button class="home-page--submit" type="primary" block>查询</Button>
    </Card>

    <Card>
      <Grid square>
        <GridItem v-for="value in 8" :key="value" icon="photo-o" text="文字" />
      </Grid>
    </Card>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Tabs, Tab, Button, Grid, GridItem } from "vant";
import Card from "../../components/Card.vue";
import FlightSearch from "./FlightSearch.vue";
// import { useRouter } from "vue-router";
// import Button from "./Button.vue";

export default {
  name: "home-page",
  components: {
    Card,
    Swipe,
    SwipeItem,
    Tabs,
    Tab,
    Button,
    Grid,
    GridItem,
    FlightSearch,
  },
  setup() {
    const images = [
      "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
      "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    ];

    return {
      images,
    };
  },
};
</script>

<style>
.home-page--submit {
  margin-top: 10px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe__img {
  height: 100px;
}

.test-flex {
  display: flex;
  justify-content: space-between;
  padding: 0 33%;
  background: #999999;
  height: 300px;
}
.test-flex__item {
  width: 33%;
  height: 100px;
  background: red;
}
</style>
