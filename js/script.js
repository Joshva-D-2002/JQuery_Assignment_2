$(document).ready(function () {
    $("#btn").click(function () {
        $("#btn").text("Loading...")
        $.ajax({
            url: "/assets/data.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $.each(data, function (index, student) {
                    $('tbody').append("<tr> <td>" + student.name + "</td> <td>" + student.age + "</td> <td>" + student.score + "</td> <td>" + student.email + "</td>   </tr>");
                });

                $("#btn").text("Data Loaded")
                $("#btn").attr("disabled", true)
                $("#btn").css("cursor", "not-allowed");
            },
            error: function (error) {
                console.error("Error loading data", error);
            }

        })

    })
})