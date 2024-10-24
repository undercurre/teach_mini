export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/login/index",
    "pages/personal/index",
    "pages/cart/index",
    "pages/custom/index",
    "pages/detail/index",
  ],

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },

  tabBar: {
    color: "#7A7E83",
    selectedColor: "#1383ec",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "商城",
        iconPath: "assets/icons/home.png",
        selectedIconPath: "assets/icons/home_selected.png",
      },
      {
        pagePath: "pages/custom/index",
        text: "定制",
        iconPath: "assets/icons/custom.png",
        selectedIconPath: "assets/icons/custom_selected.png",
      },
      // {
      //   pagePath: "pages/cart/index",
      //   text: "购物车",
      //   iconPath: "assets/icons/cart.png",
      //   selectedIconPath: "assets/icons/cart_selected.png",
      // },
      {
        pagePath: "pages/personal/index",
        text: "个人",
        iconPath: "assets/icons/personal.png",
        selectedIconPath: "assets/icons/personal_selected.png",
      },
    ],
  },
});
