;(function () {
  // 1. 初始状态
  // $('.words span').text(0)
  // $('.publish_btn').addClass('disabled')

  // 2. 高亮效果
  $('.input-box textarea').on('focus', function () {
    $(this)
      .parent()
      .addClass('actived')
  })
  $('.input-box textarea').on('blur', function () {
    $(this)
      .parent()
      .removeClass('actived')
  })

  // 3. 字数统计
  $('.input-box textarea').on('input', function () {
    // // console.log('input触发啦！')
    // let value = $(this).val()
    // // console.log('value:', value)
    // let length = value.length
    // console.log('length:', length)
    // $('.words span').text(length)

    let length = $(this).val().length
    // 优化
    $('.words span').text(length)
    if (length === 0) {
      $('.publish_btn').addClass('disabled')
    } else {
      $('.publish_btn').removeClass('disabled')
    }
  })
  // 4. 触发input事件
  $('.input-box textarea').trigger('input')
})()
