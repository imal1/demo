<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle"><Home1></Home1></div>
    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle"><Home2></Home2></div>
    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle"><Home3></Home3></div>
    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle"><Home4></Home4></div>
  </wxc-tab-bar>
</template>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
  }
</style>
<script>
  import { WxcTabBar, Utils, WxcTag, WxcMinibar, WxcIcon } from 'weex-ui';
  // https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js 
  import Config from './config';
  import Home1 from './views/home1.vue';
  import Home2 from './views/home2.vue';
  import Home3 from './views/home3.vue';
  import Home4 from './views/home4.vue';
  export default {
    components: { WxcTabBar, WxcMinibar, Home1, Home2, Home3, Home4,},
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      }
    },
  };
</script>