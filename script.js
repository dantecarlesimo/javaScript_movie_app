"use strict";

$(function() {
  $('#searchButton').on("click", function(e){
    e.preventDefault();
    clearResults();
    var userInput = $('#searchTerm').val();
    // console.log(userInput);
    $('#searchTerm').val("");

    var request = {
      url: "http://www.omdbapi.com/",
      type: "get",
      dataType: "json",
      data: {s: userInput}
    }

    var response = $.ajax(request);

    response.done(function(data){
      console.log(data);
      $.each(data["Search"], function (index,movie){
        // console.log(movie["Title"]);
      $('#results').append("<li class='list-group-item' data-imdbid = " + movie["imdbID"] +"> " + movie["Title"] + "</li>");
      //li.data('imdbid', movie["imdbID"]);---same as adding to li above
      // var movieID = movie["imdbID"];
      // console.log(movieID);
      })
    })
  })

  $('#results').delegate("li","click", function(e){
    e.preventDefault();
    clearPoster();
    // var userSelection = $(e.target).text();
    var id = $(e.target).data("imdbid");
    // console.log(userSelection);
    // console.log(id);
    
    var request = {
      url: "http://www.omdbapi.com/",
      type: "get",
      dataType: "json",
      data: {i: id}
    }

    var response = $.ajax(request);

      response.done(function(data){
      // $('#movieData').addClass("border");
      $('#movieTitle').append(data["Title"]);
      $('#moviePlot').append(data["Plot"]);
      $('#moviePoster').append("<img src = '" + data["Poster"] + "'>");
    })
    
  })

  function clearPoster(){
    $('#movieTitle').empty();
    $('#moviePlot').empty();
    $('#moviePoster').empty();
  }
  function clearResults(){
    $('#results').empty();
    clearPoster();
  }

});