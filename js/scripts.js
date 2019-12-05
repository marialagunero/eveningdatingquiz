$(document).ready(function() {
  $("form#dating").submit(function(event) {
    event.preventDefault();
    var colorChoice = parseInt($("#colorChoice").val());
    var foodChoice = parseInt($("#foodChoice").val());
    var drinkChoice = parseInt($("#drinkChoice").val());
    var result = (colorChoice + foodChoice + drinkChoice)

    if (result <= 3) {
      $("#obama").show();
      $("#chris, #wonderwoman").hide();

    } else if (result  <= 6) {
      $("#wonderwoman").show();
      $("#obama, #chris").hide();

    } else if (result <= 9) {
      $("#chris").show();
      $("#wonderwoman, #obama").hide();


    return (result)

  };

  });

});
