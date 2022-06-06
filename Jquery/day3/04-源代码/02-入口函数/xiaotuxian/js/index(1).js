// 懒加载
!(function () {
  
  // 获取所有懒加载图片
  let lazy_imgs = dom.find('img[data-src]');
  // 计算浏览器窗口高度
  let docHeight = document.documentElement.clientHeight;
  let rect;

  function lazyload() {
    dom.each(lazy_imgs, function (node) {
      // 阻止不必要的操作
      if(node.dataset.loaded) return;

      // 获取元素在窗口中的位置
      rect = node.getBoundingClientRect();

      if(docHeight - rect.top > 0 && rect.top > 0) {
        // 设置真正图片路径
        node.src = node.dataset.src;
        // 设置动画效果
        node.style.opacity = 0;
        // 标记加载状态
        node.dataset.loaded = true;
      }
    })
  }

  // 监听图片加载
  dom.on(lazy_imgs, 'load', function (ev, node) {
    if(node.src.indexOf('placeholder') != -1) return;
    node.style.opacity = 1;
    node.removeAttribute('data-src');
  })

  // 监听页面滚动
  dom.on(document, 'scroll', lazyload);
  // 监听页面加载
  dom.on(document, 'DOMContentLoaded', lazyload);
})()

// 轮播图
$(function () {
  $('.xtx_banner ul').slick({
    // autoplay: true,
    dots: true,
    appendDots: '.indicator',
    prevArrow: '.xtx_banner .prev',
    nextArrow: '.xtx_banner .next'
  });
})