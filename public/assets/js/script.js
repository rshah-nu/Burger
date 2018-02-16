$(document).ready(function () {
    console.log("ready!");

    $("#btn").on("click", function(e) {
        event.preventDefault();
        console.log('Clicked!');
    })
});