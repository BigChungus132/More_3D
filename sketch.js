let can;let r=20;let ch=0;let t;
let txy;let num1=30,len1=80,num2=30,len2=15;
function setup() {
can=createCanvas(700,500,WEBGL);
can.position(30,25);
can.class('bdd');
txy=new logoXY(0,0,0);
t=new logoXY(0,0,0);
frameRate(r);
strokeWeight(2);

}
let ang=0;

function draw() {
//clear();
background(200,160,120);
//lines(t,20,20);
//pop();
ang++;
switch(ch%2){
case 0:push();translate(-200,-200,0);lines(num2,len2,t);pop();break;
case 1:
push();rotateX(ang*PI/15);translate(-50,-200,0);logoPtsXY(num1,len1,t1);pop();break;
}}
