$(document).ready(function() {
    $("button").click(function() {
        $('#poster').removeAttr('src').removeAttr('alt').removeAttr('width');
        var movieName = $("#moviename").val();
        if (movieName.length === 0) {
            $('#first').empty().append("Enter the movie name.");
        } else {
            movieName = movieName.toLowerCase();
            $.ajax({
                url: "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json",
                success: function(moviedata) {
                    var mname = moviedata["Title"];
                    if (mname === undefined) {
                        $('#first').empty().append("No movie found, enter the correct movie name.");
                    } else {
                        $('#first').empty();
                        $('#first').append('<table>');
                        $('#first').append("<tr><td>Title  </td><td><td>:&nbsp&nbsp</td><td>" + moviedata['Title'] + "</td></tr>");
                        $('#first').append("<tr><td>Year  </td><td><td>:</td><td>" + moviedata['Year'] + "</td></tr>");
                        $('#first').append("<tr><td>Rated </td><td><td>:</td><td>" + moviedata['Rated'] + "</td></tr>");
                        $('#first').append("<tr><td>Released </td><td><td>:</td><td>" + moviedata['Released'] + "</td></tr>");
                        $('#first').append("<tr><td>Runtime </td><td><td>:</td><td>" + moviedata['Runtime'] + "</td></tr>");
                        $('#first').append("<tr><td>Genre </td><td><td>:</td><td>" + moviedata['Genre'] + "</td></tr>");
                        $('#first').append("<tr><td>Director </td><td><td>:</td><td>" + moviedata['Director'] + "</td></tr>");
                        $('#first').append("<tr><td>Writer </td><td><td>:</td><td>" + moviedata['Writer'] + "</td></tr>");
                        $('#first').append("<tr><td>Actors </td><td><td>:</td><td>" + moviedata['Actors'] + "</td></tr>");
                        $('#first').append("<tr><td>Plot </td><td><td>:</td><td>" + moviedata['Plot'] + "</td></tr>");
                        $('#first').append("<tr><td>Language </td><td><td>:</td><td>" + moviedata['Language'] + "</td></tr>");
                        $('#first').append("<tr><td>Country </td><td><td>:</td><td>" + moviedata['Country'] + "</td></tr>");
                        $('#first').append("<tr><td><tr><td>Awards </td><td><td>:</td><td>" + moviedata['Awards'] + "</td></tr>");
                        $('#first').append("<tr><td>Metascore </td><td><td>:</td><td>" + moviedata['Metascore'] + "</td></tr>");
                        $('#first').append("<tr><td>IMDB Rating </td><td><td>:</td><td>" + moviedata['imdbRating'] + "</td></tr>");
                        $('#first').append("<tr><td>IMDB Votes </td><td><td>:</td><td>" + moviedata['imdbVotes'] + "</td></tr>");
                        $('#first').append("<tr><td>IMDB ID </td><td><td>:</td><td>" + moviedata['imdbID'] + "</td></tr>");
                        $('#first').append("<tr><td>Type </td><td><td>:</td><td>" + moviedata['Type'] + "</td></tr>");
                        $('#first').append("<tr><td>Response </td><td><td>:</td><td>" + moviedata['Response'] + "</td></tr>");
                        $('#first').append('</table>');
                        $("#poster").attr("src", moviedata['Poster']).attr("alt", moviedata['Title']);
                    }
                },
                error: function() {
                    $('#first').empty().append("Error in retrieving the movie");
                    $("#second").append("Error in retrieving the movie");
                }
            });
        };
    });
});
