$(document).ready(function () {
    console.log("ready!");


    $(".devourBtn").click(function(e) {
        e.preventDefault();
        console.log('You Clicked me!');
        var devourObject = {
            "burgerID": $(this).attr("burgerID"),
            "devoured": 1
        };
        $.ajax({
            type: 'PUT',
            url: '/api/modify',
            data: devourObject
        });
    });
    // $("#devourBtn").on("click", function(e) {
    //     console.log('Clicked!');

    //     $.ajax({
    //         type: "PUT",
    //         url: '/api/modify',
    //         data: devourObject,
    //     });
    //     e.preventDefault();
    // });
});

