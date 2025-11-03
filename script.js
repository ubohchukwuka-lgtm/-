$(document).ready(function() {
    // Select all inputs with the class 'file-input'
    $('.file-input').change(function(e) {
        // Get the file name from the event object
        var fileName = e.target.files[0].name;
        
        // Find the corresponding file-name span using the input's ID
        // The ID is structured as "file-input-X", we want to target "file-name-X"
        var inputId = $(this).attr('id');
        var nameSpanId = inputId.replace('input', 'name');

        // Update the text of the associated file-name span
        $('#' + nameSpanId).text(fileName);
    });
});
