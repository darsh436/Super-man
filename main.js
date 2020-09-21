
var canvas = new fabric.Canvas("myCanvas");

super_width=50;
super_height=50;

player_x=10;
player_y=10;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img) {
player_object=Img;
player_object.scaleToWidth(50);
player_object.scaleToHeight(50);
player_object.set({top:player_y,
    left:player_x
    });
    canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
super_object=Img;
super_object.scaleToWidth(super_width);
super_object.scaleToHeight(super_height);
super_object.set({top:player_y,
    left:player_x
    });
    canvas.add(super_object);
});
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed =  e.keyCode;
  if(e.shiftKey==true && keypressed=='80'){
    super_height+=10;
    super_width+=10;
    document.getElementById("current-width").innerHTML=super_width;
    document.getElementById("current-height").innerHTML=super_height;
  }

  if(e.shiftKey==true && keypressed=='77'){
    super_height-=10;
    super_width-=10;
    document.getElementById("current-width").innerHTML=super_width;
    document.getElementById("current-height").innerHTML=super_height;
  }

  if(keypressed=='38'){
      up();
      console.log("up");
  }
  if(keypressed=='40'){
    down();
    console.log("down");
  }
  if(keypressed=='37'){
    left();
    console.log("left");
  }
  if(keypressed=='39'){
    right();
    console.log("right");
  }
 
if(keypressed=='76'){
    new_image('hulk.png');
    console.log("l");
}
if(keypressed=='66'){
    new_image('spider.png');
    console.log("b");
}
if(keypressed=='82'){
    new_image('captain_america.png');
    console.log("r");
}
if(keypressed=='70'){
    new_image('iron-man.jpg');
    console.log("f");
}
if(keypressed=='72'){
    new_image('thor.png');
    console.log("h");
}
}

function up(){
  if(player_y>0){
      player_y = player_y - super_height;
      console.log(player_y);
      console.log(super_height);
      canvas.remove(player_object);
      player_update();
  }
  
}

function down(){
  if(player_y<=500){
      player_y = player_y + super_height;
      console.log(player_y);
      console.log(super_height);
      canvas.remove(player_object);
      player_update();
  }
  
}

function left(){
  if(player_x>0){
      player_x = player_x - super_width;
      console.log(player_x);
      console.log(super_width);
      canvas.remove(player_object);
      player_update();
  }
  
}

function right(){
  if(player_x<=850){
      player_x = player_x + super_width;
      console.log(player_x);
      console.log(super_width);
      canvas.remove(player_object);
      player_update();
  }
  
}
