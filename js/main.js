n = new Date();
year = n.getFullYear();
month = n.getMonth() + 1;
date = n.getDate();
document.getElementById("date").innerHTML = date + "-" + month + "-" + year;


$(document).ready(function () {

    // To add an task
    $('#addItem').on('click', addItem);

    // Checkbox to mark done task
    $('#newItem').on('change', '.completeItem', completeItem);

    // To Delete an task
    $('#newItem').on('click', '.deleteItem', deleteItem);

    // To Edit an task
    $('#newItem').on('click', '.todoText', editItem);

    // Save the edited task
    $('#newItem').on('click', '.saveItem', stopEditing);

    // Add task on enter Key-Press
    $('#newTodo').on('keypress', function (event) {
        if (event.which === 13) {
            addItem();
            event.preventDefault();
        }
    });

    // Function to add task
    function addItem(event) {
        var newTodoText = $('#newTodo').val();
        $('#newItem').append('<li class="list-group-item"><input type="checkbox" id="custom"  class="completeItem"><label for="custom" class="custom"></label><span class="todoText">' + newTodoText + '</span><input type="text" class="editText"><span class="btn btn-success saveItem">Save</span><span class="fa fa-trash deleteItem"></span></li>');
        $('#newTodo').val("");
    }

    // Delete Task
    function deleteItem(event) {
        $(this).parent().remove();
    }

    //  Function 
    function completeItem(event) {
        $(this).parent().toggleClass('done');
    }

    // Edit an task 
    function editItem(event) {

        var currentText = $(this).parent().find('.todoText').text();
        $(this).parent().find('.editText').val(currentText);
        $(this).parent().find('.editText').show();
        $(this).parent().find('.todoText').hide();
        $(this).parent().find('.saveItem').show();
    }

    // Save edited task
    function stopEditing(event) {
        $(this).hide();
        var newValue = $(this).parent().find('.editText').val();
        $(this).parent().find('.editText').hide();
        $(this).parent().find('.todoText').text(newValue);
        $(this).parent().find('.todoText').show();
    }
});