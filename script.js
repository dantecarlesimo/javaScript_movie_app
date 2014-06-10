"use strict";

$(function() {

  $('#searchButton').on("click", function(e){
    e.preventDefault();
    var userInput = $('#searchTerm').val();
    // console.log(userInput);

    var request = {
      url: "http://www.omdbapi.com/",
      type: "get",
      dataType: "json",
      data: {s: userInput}
    }

    var response = $.ajax(request);

    response.done(function(data){
      $.each(data["Search"], function (index,movie){
        // console.log(movie["Title"]);
      $('#results').append("<li>" + movie["Title"] + "</li>");
      })

    })







  })




});