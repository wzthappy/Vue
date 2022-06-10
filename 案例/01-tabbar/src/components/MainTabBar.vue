<template>
  <Tab-bar>
    <tab-barltem path="/home" activeColor="#fc8da3">
      <img src="../assets/img/tabbar/home.png" alt="" slot="item-icon" />
      <img src="../assets/img/tabbar/home_active.png" alt="" slot="item-icon-active"/>
      <div slot="item-text">首页</div>
    </tab-barltem>
    <tab-barltem path="/category" activeColor="#fc8da3">
      <img src="../assets/img/tabbar/category.png" alt="" slot="item-icon" />
      <img src="../assets/img/tabbar/category_active.png" alt="" slot="item-icon-active"/>
      <div slot="item-text">分类</div>
    </tab-barltem>
    <tab-barltem path="/cart" activeColor="#fc8da3">
      <img src="../assets/img/tabbar/cart.png" alt="" slot="item-icon" />
      <img src="../assets/img/tabbar/cart_active.png" alt="" slot="item-icon-active"/>
      <div slot="item-text">购物车</div>
    </tab-barltem>
    <tab-barltem path="/profile" activeColor="#fc8da3">
      <img src="../assets/img/tabbar/profile.png" alt="" slot="item-icon" />
      <img src="../assets/img/tabbar/profile_active.png" alt="" slot="item-icon-active"/>
      <div slot="item-text">我的</div>
    </tab-barltem>
  </Tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar.vue";
import TabBarltem from "./tabbar/TabBarltem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarltem,
  },
};
</script>

<style>
</style>