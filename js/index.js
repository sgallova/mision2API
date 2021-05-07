$('form').submit(function (e) {

  e.preventDefault();

  let nameInput = $('#user-github').val();
  let emailInput = $('#passcode').val();
  let $tagValue = '';

  $.post("http://localhost:3000/api/usuarios", { name: nameInput, email: emailInput }, function (data) {

    $('#formulario').addClass('hidden');
    $('.row.hidden').removeClass('hidden');

    data.forEach(element => {
      $tagValue += `<tr><td> ${element.name}</td><td> ${element.email}</td></tr>`;
    });

    $('tbody').append($tagValue);

  }, 'json');

});

