;(function () {
  // 1. 账号 & 安全切换
  $('.label').click(function () {
    $(this).addClass('active')
    $(this)
      .siblings()
      .removeClass('active')

    let id = $(this).attr('data-label')
    console.log('id:', id)
    $(id).css('display', 'block')
    $(id)
      .siblings()
      .css('display', 'none')
  })

  // 2.安全 & 手机切换
  $('.icon').click(function () {
    let isAcitve = $(this).hasClass('active')
    console.log('isActive:', isAcitve)
    if (isAcitve === false) {
      $(this).addClass('active')
      $(this)
        .siblings()
        .removeClass('active')

      let id = $(this).attr('data-label')
      console.log('id:', id)
      $(id).css('display', 'block')
      $(id)
        .siblings()
        .css('display', 'none')
    } else {
      $('.label')
        .last()
        .trigger('click')
    }
  })
})()
