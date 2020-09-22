$(document).ready(function () {
    var car1ClickCount = 0;
    var car2ClickCount = 0;
    var car3ClickCount = 0;
    var car4ClickCount = 0;
    var car5ClickCount = 0;
    $("#imgCar1").click(function () {
        car1ClickCount++;
        $('#tdDisplay').empty();
        $('#tdDisplay').html('<img id="imgCar1" src="car1.jpg" width="200px" height="100px" /><br><label id="lbl1"> Car Clicked = : Car1</label><br><label id="lbl1">Count of Click = :' + car1ClickCount + '</label>');
    });
    $("#imgCar2").click(function () {
        car2ClickCount++;
        $('#tdDisplay').empty();
        $('#tdDisplay').html('<img id="imgCar2" src="car2.jpg" width="200px" height="100px" /><br><label id="lbl1"> Car Clicked = : Car2</label><br><label id="lbl1">Count of Click = :' + car2ClickCount + '</label>');
    });
    $("#imgCar3").click(function () {
        car3ClickCount++;
        $('#tdDisplay').empty();
        $('#tdDisplay').html('<img id="imgCar3" src="car3.jpg" width="200px" height="100px" /><br><label id="lbl1"> Car Clicked = : Car3</label><br><label id="lbl1">Count of Click = :' + car3ClickCount + '</label>');
    });
    $("#imgCar4").click(function () {
        car4ClickCount++;
        $('#tdDisplay').empty();
        $('#tdDisplay').html('<img id="imgCar4" src="car4.jpg" width="200px" height="100px" /><br><label id="lbl1"> Car Clicked = : Car4</label><br><label id="lbl1">Count of Click = :' + car4ClickCount + '</label>');
    });
    $("#imgCar5").click(function () {
        car5ClickCount++;
        $('#tdDisplay').empty();
        $('#tdDisplay').html('<img id="imgCar5" src="car5.jpg" width="200px" height="100px" /><br><label id="lbl1"> Car Clicked = : Car5</label><br><label id="lbl1">Count of Click = :' + car5ClickCount + '</label>');
    });

});