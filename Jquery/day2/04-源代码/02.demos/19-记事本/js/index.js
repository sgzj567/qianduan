;(function () {
  // 3.删除
  function count () {
    // console.log($('#todoList li'))
    $('.todo-count strong').text($('#todoList li').length)
  }
  // 1.新增
  $('#addTodo').keyup(function (e) {
    if (e.keyCode === 13) {
      // console.log('回车')
      let value = $(this).val()
      if (value !== '') {
        console.log('输入了内容')
        $('#todoList').append(`
        <li style="display:none">
            <div class="view">
              <label>${value}</label>
              <button class="destroy"></button>
            </div>
          </li>`)
        $('#todoList li')
          .last()
          .slideDown(function () {
            count()
          })
        $(this).val('')
      }
    }
  })

  // 2.删除
  $('#todoList').on('click', '.destroy', function () {
    let $li = $(this)
      .parent()
      .parent()
    $li.fadeOut(function () {
      $(this).remove()
      // $('.todo-count strong').text($('#todoList li').length)
      count()
    })
  })
})()
