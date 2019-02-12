$(document).ready(function(){
  $("#blanks form").submit(function(event){

    var nameInput = $("input#name").val();
    var foodSelect = $("select#food").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var bornInput = $("input#born").val();
    var colorInput = $("input#color").val();

    console.log(nameInput);

    if(nameInput == "" || foodSelect == "" || musicInput == "" || bornInput == "" || colorInput == ""){
      alert("Try again!");
    }
    else {
      $(".name").text(nameInput);
      $(".food").text(foodSelect);
      $(".music").text(musicInput);
      $(".born").text(bornInput);
      $(".color").text(colorInput);

      $("#inputForm").hide();
      $("#answers").show();
      event.preventDefault();
    }
  });
});
