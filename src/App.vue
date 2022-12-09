<template>
  <PageLayout>
    <template #header>
      <NavBar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </template>
    <router-view></router-view>
    <template #footer>
      <Tabbar v-model="active" :fixed="false">
        <TabbarItem icon="home-o">标签</TabbarItem>
        <TabbarItem icon="search">标签</TabbarItem>
        <TabbarItem icon="friends-o">标签</TabbarItem>
        <TabbarItem icon="setting-o">标签</TabbarItem>
      </Tabbar>
    </template>
  </PageLayout>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { NavBar, Tabbar, TabbarItem } from "vant";
import PageLayout from "./components/PageLayout.vue";

export default {
  name: "App",
  components: { PageLayout, NavBar, Tabbar, TabbarItem },
  setup() {
    const router = useRouter();

    const back = () => {
      router.back();
    };

    const active = ref("sss");
    return {
      back,
      active,
    };
  },
};
</script>

<style>
* {
  margin: 0;
}
.normal-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.normal-page__header {
  height: 100px;
  background: blue;
}

.normal-page__content {
  flex: 1;
}
</style>
