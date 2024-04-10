$(document).ready(function () {
  $('header button').click(() => {
    $('form').slideDown();
  })

  $('#botao-cancelar').click(() => {
    $('form').slideUp();
  })

  var toggle = true;

  $('ol').on('click', 'li', function () {
    if (toggle == true) {
      $(this).css('text-decoration', 'line-through')
      toggle = false;
    } else {
      $(this).css('text-decoration', 'none')
      toggle = true;
    }
  })

  $('form').on('submit', (e) => {
    e.preventDefault();
    const listaTarefas = $('#to-do-list').val();
    const novaTarefa = $('<li></li>');
    $(novaTarefa).text(listaTarefas);
    $(novaTarefa).appendTo('ol');
    $('#to-do-list').val('');
  })
})