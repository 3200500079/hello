// pages/dianhua/dianhua.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     phone_numbers:[
      {
        id:"num-1",
        organization:"公安报警",
        num:"110"
      },{
        id:"num-2",
        organization:"火警",
        num:"119"
      },{
        id:"num-3",
        organization:"救护",
        num:"120"
      },{
        id:"num-4",
        organization:"燃气热线",
        num:"962777"
      },{
        id:"num-5",
        organization:"物业管理处电话",
        num:"87855211"
      },{
        id:"num-6",
        organization:"滨文社区",
        num:"88071861"
      },{
        id:"num-7",
        organization:"高教园区派出所",
        num:"87697070"
      }
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  call:function(e){
  
   var phoneNum=e.target.dataset.phoneNum
   wx.makePhoneCall({
     phoneNumber: 'phoneNum',
   })

  }
})