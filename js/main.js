/*
 * @Author: iceStone
 * @Date:   2016-01-12 15:28:25
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-12 16:38:27
 */

'use strict';

// 入口函数的作用不一定是document.ready，更重要的是有单独作用域，避免污染全局
$(function() {

  $(window).on('resize', resize).trigger('resize');

  function resize() {
    // 当屏幕是小屏幕（屏幕尺寸小于一定值）时将轮播图换成小图显示，
    // 显示小图时还是使用img标签的方式

    // 1.获取屏幕宽度
    var screenWidth = $(window).width();

    // 2.判断是否为小屏幕
    var isSmallScreen = screenWidth < 992;

    // 3.获取界面上的每一个轮播项，因为我们需要动态操作每一个轮播项
    var $slideItems = $('#ad_carousel .item'); // 返回一个dom数组
    // [1,2,3,4]

    // 单独考虑每一个DIV项
    // 4.遍历每一项将轮播项的背景图修改为对应的大图或者小图
    $slideItems.each(function(i, item) {
      // 由于item是一个DOM元素
      var $item = $(item);
      // item
      // <div
      // class="item"
      // data-lg-image="img/slide_02_2000x410.jpg"
      // data-sm-image="img/slide_02_640x340.jpg">
      // </div>
      // 根据当前屏幕状态决定展示哪种图
      // 此时大图和小图的链接都记录在item标签上
      // 三元表达式
      var attr = isSmallScreen ? 'smImage' : 'lgImage';
      // console.log($item.data(attr));
      // $item.data(attr) // img/sdfdsfsd.jpg
      var val = $item.data(attr);
      // 因为背景必须是url('ssss')格式
      var url = 'url("' + val + '")'; // url("dsfsll.jpg")
      // 设置轮播项的背景
      $item.css('backgroundImage', url);

      // 单独考虑小图情况
      if (isSmallScreen) {
        // 5.如果是小图换用，动态创建一个img标签append轮播项中
        var $img = $('<img src="' + val + '"/>');
        $item.empty().append($img);
      } else {
        // 防止由小变大的时候 小图依然保留的情况
        $item.empty();
      }
    });
    //
  }
  // div.style.backgroundImage =
});
