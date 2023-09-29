$(document).ready(function() {
  getAllDogsFromApi();
  // button eruka id click intha  fun run agum
  $("#getImg").on("click", function() {
    const selectBreed = $("#dog-list");
    $("#load-div").append('<p id="loading"><span>Loading ...</span></p>');
    getRandomImageOfDog(selectBreed.val());
  });


  
});
function getAllDogsFromApi() {
  const url = "https://dog.ceo/api/breeds/list/all";
  $.ajax({
    url: url,
    method: "GET",
    success: function(resp) {
      console.log("Api request success");
      const buttonshowlist = Object.keys(resp.message);
      appendToSelect(buttonshowlist);
    },
    error: function() {
      console.log("Api request error");
    },
    complete: function() {
      console.log("API request completed");

    },
  });
}
function appendToSelect(list) {
  const selectBreed = $("#dog-list");
  for (let item of list) {
    const option = $("<option></option>").html(item);
    selectBreed.append(option);
  }
}
//image get
function getRandomImageOfDog(dogBreed) {
  const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
  $.ajax({
    url: url,
    method: "GET",
    success: function(resp) {
      console.log("Api request success");
      console.log(resp.message);
      $("#animals img").attr("src", resp.message);
     
    },
    error: function() {
      console.log("Api request error");
    },
    complete: function() {
      $("#loading").remove();
    },
  });
}

