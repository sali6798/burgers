$(function() {
    $(".create-form").submit(function(event) {
        event.preventDefault();

        const input = $("#burgerarea").val().trim();
        // checks user doesn't add empty string
        if (input !== "") {
            const newBurger = {
                name: input
            };
    
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(() => {
                console.log("new burger created");
                location.reload();
            });
        }
        else {
            // shows user that it was invalid
            $("#burgerarea").attr("placeholder", "Must enter a burger");
            $("#burgerarea").css("border", "2px red solid");
        }
    });

    $(".change-devoured").click(function() {
        // get id of burger
        const id = $(this).data("id");
        const isDevouredState = {
            isDevoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevouredState
        }).then(() => {
            console.log("changed isDevoured to true");
            location.reload();
        })
    });

    $(".delete").click(function() {
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log("burger deleted");
            location.reload();
        })
    });
});