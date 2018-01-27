export default {

  // 正常模式的tab title配置
  tabTitles: [
    {
      title: '订仓',
      icon: 'http://p.ruishunwl.com/app/icons/home-default-64.png',
      activeIcon: 'http://p.ruishunwl.com/app/icons/home-active-64.png'
    },
    {
      title: '我的仓',
      icon: 'http://p.ruishunwl.com/app/icons/coffee-default-64.png',
      activeIcon: 'http://p.ruishunwl.com/app/icons/coffee-active-64.png'
    },
    {
      title: '仓源发布',
      icon: 'http://p.ruishunwl.com/app/icons/plus-default-64.png',
      activeIcon: 'http://p.ruishunwl.com/app/icons/plus-active-64.png',
      badge: 5
    },
    {
      title: '个人中心',
      icon: 'http://p.ruishunwl.com/app/icons/user-default-64.png',
      activeIcon: 'http://p.ruishunwl.com/app/icons/user-active-64.png',
      dot: true
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 50,
    iconHeight: 50,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  },

  // 使用 iconFont 模式的tab title配置
  tabIconFontTitles: [
    {
      title: '首页',
      codePoint: '\ue623'
    },
    {
      title: '特别推荐',
      codePoint: '\ue608'
    },
    {
      title: '消息中心',
      codePoint: '\ue752',
      badge: 5
    },
    {
      title: '我的主页',
      codePoint: '\ue601',
      dot: true
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontColor: '#333333',
    activeIconFontColor: 'red',
    iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
  }
}