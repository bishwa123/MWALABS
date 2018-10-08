
$(document).ready(function () {
    $("#btnSendAjax").click(function () {
        $.ajax({
            url: "/users"
        }).done(data => {
           // alert(data);
            alert(document.cookie);
        }).fail(() => {
            alert("ajax failed");
        });
    });
});