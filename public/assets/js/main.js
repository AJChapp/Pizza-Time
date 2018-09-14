$('#submit').on('click', function (event) {
    event.preventDefault();
    var pizza = {
        pizza_name: $('#pizza').val().trim()
    }
    $.post('/api/new', pizza, function () {
        location.reload();
    })
})

$('.pizzabtn').on('click', function (event) {
    event.preventDefault();
    var $pizza = {
        id: $(this).data('id'),
        boo: $(this).data('boo')
    }
    $.ajax({
        method: "PUT",
        url: "/api/update",
        data: $pizza
    }).then(function () {
        location.href = "/"
    })
})
$('.deleter').on('click', function (event) {
    event.preventDefault();
    var $pizza = {
        id: $(this).data('id'),
        boo: $(this).data('boo')
    }
    $.ajax({
        method: "DELETE",
        url: "/api/delete",
        data: $pizza
    }).then(function () {
        location.href = "/"
    })
})


