$(document).ready(function () {
    console.log("ready!");

    $(".btn").on("click", function(e) {
        e.preventDefault();
        var devourObject = {
            "burgerID": $(this).attr("burgerID"),
            "devoured": 1
        };
        $.ajax({
            type: "PUT",
            url: '/api/modify',
            data: devourObject,
        });
    });

});