canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

mars_image = ["mars_1.jpg" , "mars_2.jpg" , "mars_3.jpg" , "mars_4.jpg"];
 random_number = Math.floor(Math.random()*4)
var background_img = mars_image[random_number];
var rover_img = "rover.png"

rover_x = 10;
rover_y = 10;
roverWidth = 100;
roverHeight = 100;

function add() {
    bg_tag = new Image();
    bg_tag.onload = uploadBg;
    bg_tag.src = background_img;

    rover_Tag = new Image();
    rover_Tag.onload = uploadRover;
    rover_Tag.src = rover_img;
}

function uploadRover() {
    ctx.drawImage(rover_Tag, rover_x, rover_y, roverWidth, roverHeight);
}

function uploadBg() {
    ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", my_Keydown)
function my_Keydown(e) {
    console.log(e);
     keyPressed = e.keyCode;
    if (keyPressed == "37") {
        left()
    }

    if (keyPressed == "38"){
        up()
    }

    if (keyPressed == "39"){
        right()
        console.log("right");
    }

    if (keyPressed == "40"){
        down()
    }
}

function left(){
    if(rover_x > 0){
        rover_x = rover_x - 10;
        uploadBg();
        uploadRover();
    }
}

function up(){
    if(rover_y > 0 ){
        rover_y = rover_y -10;
        uploadBg();
        uploadRover();
    }
}

function right(){
    if(rover_x <700){
        rover_x = rover_x +10;
        uploadBg();
        uploadRover();
        console.log("test");
    }
}

function down(){
    if(rover_y <500){
        rover_y = rover_y +10
        uploadBg();
        uploadRover();
    }
}

