Page({
  data: {
    vtabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = [
      '全部商品',
      '饰品配饰', '美妆个护', '家居内衣',
      '家居百货', '时尚鞋靴', '出行用品',
      '潮流玩具', '创意文具', '电子生活'
    ]
    const vtabs = titles.map(item => ({
      title: item
    }))
    this.setData({
      vtabs
    })
  },

  onTabCLick(e) {
    const index = e.detail.index
    console.log('tabClick', index)
  },

  onChange(e) {
    const index = e.detail.index
    console.log('change', index)
  }

})