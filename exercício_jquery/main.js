$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        var taskName = $('#task-name').val();

        if (taskName.trim() !== '') {
            var newTask = $('<li></li>');

            var taskText = $('<span></span>').text(taskName).click(function() {
                newTask.toggleClass('completed');
            });

            var cancelButton = $('<button type="button" class="cancel-button">Excluir Item</button>').click(function() {
                newTask.remove();
                updateListVisibility();
                toggleCancelButtonVisibility();
            });

            newTask.append(taskText, cancelButton);

            $('ul').append(newTask);

            $('#task-form')[0].reset();

            updateListVisibility();
            toggleCancelButtonVisibility();
        }
    });

    $('#botao-cancelar').click(function() {
        $('ul').empty();
        updateListVisibility();
        toggleCancelButtonVisibility();
    });

    function updateListVisibility() {
        var ul = $('ul');
        if (ul.find('li').length > 0) {
            ul.show();
        } else {
            ul.hide();
        }
    }

    function toggleCancelButtonVisibility() {
        var ul = $('ul');
        $('#botao-cancelar').toggle(ul.find('li').length > 0);
    }
});