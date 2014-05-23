

var Runnable = java.lang.Runnable;
var PopupWindow = android.widget.PopupWindow;
var Button = android.widget.Button; 
var Widget = android.widget;
var LinearLayout = Widget.LinearLayout;
var RelativeLayout = Widget.RelativeLayout;
var ViewGroup = android.view.ViewGroup;
var Gravity = android.view.Gravity;
var View = android.view.View;
var AlertDialog = android.app.AlertDialog;
var DialogInterface = android.content.DialogInterface;
var IO = java.io;
var File = IO.File;
var FileOutputStream = IO.FileOutputStream;
var Environment = android.os.Environment;
var BufferedReader = IO.BufferedReader;
var FileReader = IO.FileReader;
var StringBuilder = java.lang.StringBuilder;
var Dialog = android.app.Dialog; 
var ScrollView = android.widget.ScrollView;
var EditText = Widget.EditText;
var ImageView = android.widget.ImageView;
var Color = android.graphics.Color;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var ToggleButton = android.widget.ToggleButton;
var CharSequence = java.lang.CharSequence;
var Array = java.lang.reflect.Array;


var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();


var GUI = new Widget.PopupWindow();


var layout;
var ent1;
var ent2;
var ent3;
var ent4;
var ent5;
var ent6;
var ent7;
var ent8;
var ent9;
var ent10;
var ent11; 
var ent12;
var ent13;
var ent14;
var ent15;
var ent16; 
var ent17;
var ent18;
var ent19;
var ent20;


var entype1;
var entype2;
var entype3;
var entype4;
var entype5;
var entype6;
var entype7;
var entype8;
var entype9;
var entype10;
var entype11;
var entype12;
var entype13;
var entype14;
var entype15;
var entype16;
var entype17;
var entype18;
var entype19;
var entype20;


var Chicken = "Chicken";
var Cow = "Cow";
var Pig = "Pig";
var Sheep = "Sheep";
var Zombie = "Zombie";
var Skeleton = "Skeleton";
var Spider = "Spider";
var PigZombie = "PigZombie";
var Creeper = "Creeper";
var Entity = "Entity";


function newLevel(){


ctx.runOnUiThread(new Runnable({


run:function(){


try{


var mainbtn = new Button(ctx);


layout = new LinearLayout(ctx);


mainbtn.setText("Jockeys");


layout.addView(mainbtn);


GUI.setContentView(layout);
GUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | Gravity.RIGHT, 130, 0);


mainbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


openmenu();


}


}));


}catch(e){


print("Error: " + e);


}


}


}));


}


function openmenu(){


ctx.runOnUiThread(new Runnable({


run:function(){


try{


ent1 = "Entity";
ent2 = "Entity"
ent3 = "Entity";
ent4 = "Entity";
ent5 = "Entity";
ent6 = "Entity";
ent7 = "Entity";
ent8 = "Entity";
ent9 = "Entity";
ent10 = "Entity";
ent11 = "Entity";
ent12 = "Entity";
ent13 = "Entity";
ent14 = "Entity";
ent15 = "Entity";
ent16 = "Entity";
ent17 = "Entity";
ent18 = "Entity";
ent19 = "Entity";
ent20 = "Entity";


var entbtn1 = new Button(ctx);
var entbtn2 = new Button(ctx);
var entbtn3 = new Button(ctx);
var entbtn4 = new Button(ctx);
var entbtn5 = new Button(ctx);
var entbtn6 = new Button(ctx);
var entbtn7 = new Button(ctx);
var entbtn8 = new Button(ctx);
var entbtn9 = new Button(ctx);
var entbtn10 = new Button(ctx);
var entbtn11 = new Button(ctx);
var entbtn12 = new Button(ctx);
var entbtn13 = new Button(ctx);
var entbtn14 = new Button(ctx);
var entbtn15 = new Button(ctx);
var entbtn16 = new Button(ctx);
var entbtn17 = new Button(ctx);
var entbtn18 = new Button(ctx);
var entbtn19 = new Button(ctx);
var entbtn20 = new Button(ctx);

var spawnbtn = new Button(ctx);

/*
entbtn1.setVisibility(View.INVISIBLE);
entbtn2.setVisibility(View.INVISIBLE);
entbtn3.setVisibility(View.INVISIBLE);
entbtn4.setVisibility(View.INVISIBLE);
*/

var heightbtn = new EditText(ctx);

var heightsub = new Button(ctx);

var menula = new LinearLayout(ctx);
var menudi = new Dialog(ctx);
var scroll = new ScrollView(ctx);


heightbtn.setHint("Number of Entities");
entbtn1.setText("Entity");
entbtn2.setText("Entity");
entbtn3.setText("Entity");
entbtn4.setText("Entity");
spawnbtn.setText("Spawn");
entbtn5.setText("Entity");
entbtn6.setText("Entity");
entbtn7.setText("Entity");
entbtn8.setText("Entity");
entbtn9.setText("Entity");
entbtn10.setText("Entity");
entbtn11.setText("Entity");
entbtn12.setText("Entity");
entbtn13.setText("Entity");
entbtn14.setText("Entity");
entbtn15.setText("Entity");
entbtn16.setText("Entity");
entbtn17.setText("Entity");
entbtn18.setText("Entity");
entbtn19.setText("Entity");
entbtn20.setText("Entity");


//menula.addView(heightbtn); 
//menula.addView(heightsub);


menula.setOrientation(LinearLayout.VERTICAL);


heightbtn.setHeight("50");
heightbtn.setWidth("120");

heightsub.setHeight("50");
heightsub.setWidth("100");
heightsub.alignBottom(LinearLayout.LayoutParams.heightbtn);

entbtn1.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn1.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn2.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn2.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn3.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn3.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn4.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn4.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn5.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn5.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn6.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn6.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn7.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn7.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn8.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn8.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn9.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn9.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn10.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn10.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn11.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn11.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn12.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn12.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn13.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn13.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn14.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn14.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn15.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn15.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn16.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn16.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn17.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn17.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn18.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn18.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn19.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn19.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn20.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
entbtn20.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);


menula.addView(spawnbtn);

menula.addView(entbtn1);
menula.addView(entbtn2);
menula.addView(entbtn3);
menula.addView(entbtn4);
menula.addView(entbtn5);
menula.addView(entbtn6);
menula.addView(entbtn7);
menula.addView(entbtn8);
menula.addView(entbtn9);
menula.addView(entbtn10);
menula.addView(entbtn11);
menula.addView(entbtn12);
menula.addView(entbtn13);
menula.addView(entbtn14);
menula.addView(entbtn15);
menula.addView(entbtn16);
menula.addView(entbtn17);
menula.addView(entbtn18);
menula.addView(entbtn19);
menula.addView(entbtn20);


heightbtn.setInputType(number);

scroll.addView(menula);

menudi.setContentView(scroll);
menudi.show();


entbtn1.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent1 = "Chicken";
entbtn1.setText("Chicken");
}
if(which == 1){
ent1 = "Cow";
entbtn1.setText("Cow");
}
if(which == 2){
ent1 = "Pig";
entbtn1.setText("Pig");
}
if(which == 3){
ent1 = "Sheep";
entbtn1.setText("Sheep");
}
if(which == 4){
ent1 = "Zombie";
entbtn1.setText("Zombie");
}
if(which == 5){
ent1 = "Skeleton";
entbtn1.setText("Skeleton");
}
if(which == 6){
ent1 = "Spider";
entbtn1.setText("Spider");
}
if(which == 7){
ent1 = "PigZombie";
entbtn1.setText("PigZombie");
}
if(which == 8){
ent1 = "Creeper";
entbtn1.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn2.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent2 = "Chicken";
entbtn2.setText("Chicken");
}
if(which == 1){
ent2 = "Cow";
entbtn2.setText("Cow");
}
if(which == 2){
ent2 = "Pig";
entbtn2.setText("Pig");
}
if(which == 3){
ent2 = "Sheep";
entbtn2.setText("Sheep");
}
if(which == 4){
ent2 = "Zombie";
entbtn2.setText("Zombie");
}
if(which == 5){
ent2 = "Skeleton";
entbtn2.setText("Skeleton");
}
if(which == 6){
ent2 = "Spider";
entbtn2.setText("Spider");
}
if(which == 7){
ent2 = "PigZombie";
entbtn2.setText("PigZombie");
}
if(which == 8){
ent2 = "Creeper";
entbtn2.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn3.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent3 = "Chicken";
entbtn3.setText("Chicken");
}
if(which == 1){
ent3 = "Cow";
entbtn3.setText("Cow");
}
if(which == 2){
ent3 = "Pig";
entbtn3.setText("Pig");
}
if(which == 3){
ent3 = "Sheep";
entbtn3.setText("Sheep");
}
if(which == 4){
ent3 = "Zombie";
entbtn3.setText("Zombie");
}
if(which == 5){
ent3 = "Skeleton";
entbtn3.setText("Skeleton");
}
if(which == 6){
ent3 = "Spider";
entbtn3.setText("Spider");
}
if(which == 7){
ent3 = "PigZombie";
entbtn3.setText("PigZombie");
}
if(which == 8){
ent3 = "Creeper";
entbtn3.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn4.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent4 = "Chicken";
entbtn4.setText("Chicken");
}
if(which == 1){
ent4 = "Cow";
entbtn4.setText("Cow");
}
if(which == 2){
ent4 = "Pig";
entbtn4.setText("Pig");
}
if(which == 3){
ent4 = "Sheep";
entbtn4.setText("Sheep");
}
if(which == 4){
ent4 = "Zombie";
entbtn4.setText("Zombie");
}
if(which == 5){
ent4 = "Skeleton";
entbtn4.setText("Skeleton");
}
if(which == 6){
ent4 = "Spider";
entbtn4.setText("Spider");
}
if(which == 7){
ent4 = "PigZombie";
entbtn4.setText("PigZombie");
}
if(which == 8){
ent4 = "Creeper";
entbtn4.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn5.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent5 = "Chicken";
entbtn5.setText("Chicken");
}
if(which == 1){
ent5 = "Cow";
entbtn5.setText("Cow");
}
if(which == 2){
ent5 = "Pig";
entbtn5.setText("Pig");
}
if(which == 3){
ent5 = "Sheep";
entbtn5.setText("Sheep");
}
if(which == 4){
ent5 = "Zombie";
entbtn5.setText("Zombie");
}
if(which == 5){
ent5 = "Skeleton";
entbtn5.setText("Skeleton");
}
if(which == 6){
ent5 = "Spider";
entbtn5.setText("Spider");
}
if(which == 7){
ent5 = "PigZombie";
entbtn5.setText("PigZombie");
}
if(which == 8){
ent5 = "Creeper";
entbtn5.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn6.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent6 = "Chicken";
entbtn6.setText("Chicken");
}
if(which == 1){
ent6 = "Cow";
entbtn6.setText("Cow");
}
if(which == 2){
ent6 = "Pig";
entbtn6.setText("Pig");
}
if(which == 3){
ent6 = "Sheep";
entbtn6.setText("Sheep");
}
if(which == 4){
ent6 = "Zombie";
entbtn6.setText("Zombie");
}
if(which == 5){
ent6 = "Skeleton";
entbtn6.setText("Skeleton");
}
if(which == 6){
ent6 = "Spider";
entbtn6.setText("Spider");
}
if(which == 7){
ent6 = "PigZombie";
entbtn6.setText("PigZombie");
}
if(which == 8){
ent6 = "Creeper";
entbtn6.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn7.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent7 = "Chicken";
entbtn7.setText("Chicken");
}
if(which == 1){
ent7 = "Cow";
entbtn7.setText("Cow");
}
if(which == 2){
ent7 = "Pig";
entbtn7.setText("Pig");
}
if(which == 3){
ent7 = "Sheep";
entbtn7.setText("Sheep");
}
if(which == 4){
ent7 = "Zombie";
entbtn7.setText("Zombie");
}
if(which == 5){
ent7 = "Skeleton";
entbtn7.setText("Skeleton");
}
if(which == 6){
ent7 = "Spider";
entbtn7.setText("Spider");
}
if(which == 7){
ent7 = "PigZombie";
entbtn7.setText("PigZombie");
}
if(which == 8){
ent7 = "Creeper";
entbtn7.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn8.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent8 = "Chicken";
entbtn8.setText("Chicken");
}
if(which == 1){
ent8 = "Cow";
entbtn8.setText("Cow");
}
if(which == 2){
ent8 = "Pig";
entbtn8.setText("Pig");
}
if(which == 3){
ent8 = "Sheep";
entbtn8.setText("Sheep");
}
if(which == 4){
ent8 = "Zombie";
entbtn8.setText("Zombie");
}
if(which == 5){
ent8 = "Skeleton";
entbtn8.setText("Skeleton");
}
if(which == 6){
ent8 = "Spider";
entbtn8.setText("Spider");
}
if(which == 7){
ent8 = "PigZombie";
entbtn8.setText("PigZombie");
}
if(which == 8){
ent8 = "Creeper";
entbtn8.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn9.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent9 = "Chicken";
entbtn9.setText("Chicken");
}
if(which == 1){
ent9 = "Cow";
entbtn9.setText("Cow");
}
if(which == 2){
ent9 = "Pig";
entbtn9.setText("Pig");
}
if(which == 3){
ent9 = "Sheep";
entbtn9.setText("Sheep");
}
if(which == 4){
ent9 = "Zombie";
entbtn9.setText("Zombie");
}
if(which == 5){
ent9 = "Skeleton";
entbtn9.setText("Skeleton");
}
if(which == 6){
ent9 = "Spider";
entbtn9.setText("Spider");
}
if(which == 7){
ent9 = "PigZombie";
entbtn9.setText("PigZombie");
}
if(which == 8){
ent9 = "Creeper";
entbtn9.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn10.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent10 = "Chicken";
entbtn10.setText("Chicken");
}
if(which == 1){
ent10 = "Cow";
entbtn10.setText("Cow");
}
if(which == 2){
ent10 = "Pig";
entbtn10.setText("Pig");
}
if(which == 3){
ent10 = "Sheep";
entbtn10.setText("Sheep");
}
if(which == 4){
ent10 = "Zombie";
entbtn10.setText("Zombie");
}
if(which == 5){
ent10 = "Skeleton";
entbtn10.setText("Skeleton");
}
if(which == 6){
ent10 = "Spider";
entbtn10.setText("Spider");
}
if(which == 7){
ent10 = "PigZombie";
entbtn10.setText("PigZombie");
}
if(which == 8){
ent10 = "Creeper";
entbtn10.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn11.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent11 = "Chicken";
entbtn11.setText("Chicken");
}
if(which == 1){
ent11 = "Cow";
entbtn11.setText("Cow");
}
if(which == 2){
ent11 = "Pig";
entbtn11.setText("Pig");
}
if(which == 3){
ent11 = "Sheep";
entbtn11.setText("Sheep");
}
if(which == 4){
ent11 = "Zombie";
entbtn11.setText("Zombie");
}
if(which == 5){
ent11 = "Skeleton";
entbtn11.setText("Skeleton");
}
if(which == 6){
ent11 = "Spider";
entbtn11.setText("Spider");
}
if(which == 7){
ent11 = "PigZombie";
entbtn11.setText("PigZombie");
}
if(which == 8){
ent11 = "Creeper";
entbtn11.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn12.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG120BLAZEIT");

if(which == 0){
ent12 = "Chicken";
entbtn12.setText("Chicken");
}
if(which == 1){
ent12 = "Cow";
entbtn12.setText("Cow");
}
if(which == 2){
ent12 = "Pig";
entbtn12.setText("Pig");
}
if(which == 3){
ent12 = "Sheep";
entbtn12.setText("Sheep");
}
if(which == 4){
ent12 = "Zombie";
entbtn12.setText("Zombie");
}
if(which == 5){
ent12 = "Skeleton";
entbtn12.setText("Skeleton");
}
if(which == 6){
ent12 = "Spider";
entbtn12.setText("Spider");
}
if(which == 7){
ent12 = "PigZombie";
entbtn12.setText("PigZombie");
}
if(which == 8){
ent12 = "Creeper";
entbtn12.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn13.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG130BLAZEIT");

if(which == 0){
ent13 = "Chicken";
entbtn13.setText("Chicken");
}
if(which == 1){
ent13 = "Cow";
entbtn13.setText("Cow");
}
if(which == 2){
ent13 = "Pig";
entbtn13.setText("Pig");
}
if(which == 3){
ent13 = "Sheep";
entbtn13.setText("Sheep");
}
if(which == 4){
ent13 = "Zombie";
entbtn13.setText("Zombie");
}
if(which == 5){
ent13 = "Skeleton";
entbtn13.setText("Skeleton");
}
if(which == 6){
ent13 = "Spider";
entbtn13.setText("Spider");
}
if(which == 7){
ent13 = "PigZombie";
entbtn13.setText("PigZombie");
}
if(which == 8){
ent13 = "Creeper";
entbtn13.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn14.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG140BLAZEIT");

if(which == 0){
ent14 = "Chicken";
entbtn14.setText("Chicken");
}
if(which == 1){
ent14 = "Cow";
entbtn14.setText("Cow");
}
if(which == 2){
ent14 = "Pig";
entbtn14.setText("Pig");
}
if(which == 3){
ent14 = "Sheep";
entbtn14.setText("Sheep");
}
if(which == 4){
ent14 = "Zombie";
entbtn14.setText("Zombie");
}
if(which == 5){
ent14 = "Skeleton";
entbtn14.setText("Skeleton");
}
if(which == 6){
ent14 = "Spider";
entbtn14.setText("Spider");
}
if(which == 7){
ent14 = "PigZombie";
entbtn14.setText("PigZombie");
}
if(which == 8){
ent14 = "Creeper";
entbtn14.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn15.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG150BLAZEIT");

if(which == 0){
ent15 = "Chicken";
entbtn15.setText("Chicken");
}
if(which == 1){
ent15 = "Cow";
entbtn15.setText("Cow");
}
if(which == 2){
ent15 = "Pig";
entbtn15.setText("Pig");
}
if(which == 3){
ent15 = "Sheep";
entbtn15.setText("Sheep");
}
if(which == 4){
ent15 = "Zombie";
entbtn15.setText("Zombie");
}
if(which == 5){
ent15 = "Skeleton";
entbtn15.setText("Skeleton");
}
if(which == 6){
ent15 = "Spider";
entbtn15.setText("Spider");
}
if(which == 7){
ent15 = "PigZombie";
entbtn15.setText("PigZombie");
}
if(which == 8){
ent15 = "Creeper";
entbtn15.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn16.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG160BLAZEIT");

if(which == 0){
ent16 = "Chicken";
entbtn16.setText("Chicken");
}
if(which == 1){
ent16 = "Cow";
entbtn16.setText("Cow");
}
if(which == 2){
ent16 = "Pig";
entbtn16.setText("Pig");
}
if(which == 3){
ent16 = "Sheep";
entbtn16.setText("Sheep");
}
if(which == 4){
ent16 = "Zombie";
entbtn16.setText("Zombie");
}
if(which == 5){
ent16 = "Skeleton";
entbtn16.setText("Skeleton");
}
if(which == 6){
ent16 = "Spider";
entbtn16.setText("Spider");
}
if(which == 7){
ent16 = "PigZombie";
entbtn16.setText("PigZombie");
}
if(which == 8){
ent16 = "Creeper";
entbtn16.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn17.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG170BLAZEIT");

if(which == 0){
ent17 = "Chicken";
entbtn17.setText("Chicken");
}
if(which == 1){
ent17 = "Cow";
entbtn17.setText("Cow");
}
if(which == 2){
ent17 = "Pig";
entbtn17.setText("Pig");
}
if(which == 3){
ent17 = "Sheep";
entbtn17.setText("Sheep");
}
if(which == 4){
ent17 = "Zombie";
entbtn17.setText("Zombie");
}
if(which == 5){
ent17 = "Skeleton";
entbtn17.setText("Skeleton");
}
if(which == 6){
ent17 = "Spider";
entbtn17.setText("Spider");
}
if(which == 7){
ent17 = "PigZombie";
entbtn17.setText("PigZombie");
}
if(which == 8){
ent17 = "Creeper";
entbtn17.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn18.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG180BLAZEIT");

if(which == 0){
ent18 = "Chicken";
entbtn18.setText("Chicken");
}
if(which == 1){
ent18 = "Cow";
entbtn18.setText("Cow");
}
if(which == 2){
ent18 = "Pig";
entbtn18.setText("Pig");
}
if(which == 3){
ent18 = "Sheep";
entbtn18.setText("Sheep");
}
if(which == 4){
ent18 = "Zombie";
entbtn18.setText("Zombie");
}
if(which == 5){
ent18 = "Skeleton";
entbtn18.setText("Skeleton");
}
if(which == 6){
ent18 = "Spider";
entbtn18.setText("Spider");
}
if(which == 7){
ent18 = "PigZombie";
entbtn18.setText("PigZombie");
}
if(which == 8){
ent18 = "Creeper";
entbtn18.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn19.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG190BLAZEIT");

if(which == 0){
ent19 = "Chicken";
entbtn19.setText("Chicken");
}
if(which == 1){
ent19 = "Cow";
entbtn19.setText("Cow");
}
if(which == 2){
ent19 = "Pig";
entbtn19.setText("Pig");
}
if(which == 3){
ent19 = "Sheep";
entbtn19.setText("Sheep");
}
if(which == 4){
ent19 = "Zombie";
entbtn19.setText("Zombie");
}
if(which == 5){
ent19 = "Skeleton";
entbtn19.setText("Skeleton");
}
if(which == 6){
ent19 = "Spider";
entbtn19.setText("Spider");
}
if(which == 7){
ent19 = "PigZombie";
entbtn19.setText("PigZombie");
}
if(which == 8){
ent19 = "Creeper";
entbtn19.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


entbtn20.setOnClickListener(new View.OnClickListener({


onClick:function(){


try{


var array = new Array.newInstance(CharSequence, 9);

array[0] = "Chicken";
array[1] = "Cow";
array[2] = "Pig";
array[3] = "Sheep"; 
array[4] = "Zombie";
array[5] = "Skeleton";
array[6] = "Spider";
array[7] = "PigZombie";
array[8] = "Creeper";


var builder = new AlertDialog.Builder(ctx);

builder.setTitle("Entities Arrangement");

builder.setItems(array, new DialogInterface.OnClickListener({


onClick:function(dialog, which){

//print("SWAG200BLAZEIT");

if(which == 0){
ent20 = "Chicken";
entbtn20.setText("Chicken");
}
if(which == 1){
ent20 = "Cow";
entbtn20.setText("Cow");
}
if(which == 2){
ent20 = "Pig";
entbtn20.setText("Pig");
}
if(which == 3){
ent20 = "Sheep";
entbtn20.setText("Sheep");
}
if(which == 4){
ent20 = "Zombie";
entbtn20.setText("Zombie");
}
if(which == 5){
ent20 = "Skeleton";
entbtn20.setText("Skeleton");
}
if(which == 6){
ent20 = "Spider";
entbtn20.setText("Spider");
}
if(which == 7){
ent20 = "PigZombie";
entbtn20.setText("PigZombie");
}
if(which == 8){
ent20 = "Creeper";
entbtn20.setText("Creeper");
}


}


}));

builder.show();


}catch(e){


print("Error: " + e);


}


}


}));


spawnbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


menudi.dismiss();


mob1 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype1);

mob2 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype2);

mob3 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype3);

mob4 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype4);

mob5 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype5);

mob6 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype6);

mob7 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype7);

mob8 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype8);

mob9 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype9);

mob10 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype10);

mob11 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype11);

mob12 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype12);

mob13 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype13);

mob14 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype14);

mob15 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype15);

mob16 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype16);

mob17 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype17);

mob18 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype18);

mob19 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype19);

mob20 = Level.spawnMob(getPlayerX(), getPlayerY()-1, getPlayerZ()+3, entype20);


rideAnimal(mob1, mob2);
rideAnimal(mob2, mob3);
rideAnimal(mob3, mob4);
rideAnimal(mob4, mob5);
rideAnimal(mob5, mob6);
rideAnimal(mob6, mob7);
rideAnimal(mob7, mob8);
rideAnimal(mob8, mob9);
rideAnimal(mob9, mob10);
rideAnimal(mob10, mob11);
rideAnimal(mob11, mob12);
rideAnimal(mob12, mob13);
rideAnimal(mob13, mob14);
rideAnimal(mob14, mob15);
rideAnimal(mob15, mob16);
rideAnimal(mob16, mob17);
rideAnimal(mob17, mob18);
rideAnimal(mob18, mob19);
rideAnimal(mob19, mob20);


}


}));


}catch(e){


print("Error: " + e);


}


}


}));


}


function leaveGame(){


ctx.runOnUiThread(new Runnable({


run:function(){


try{


if(GUI!=null){


GUI.dismiss();


}


}catch(e){


print("Error: " + e);


}


}


}));


}


function useItem(x, y, z, itemId, blockId, side){


if(itemId==280){


var skeleton = Level.spawnMob(x, y+1, z, 12);
var spider = Level.spawnMob(x, y+1, z, 33);
var pigzom = Level.spawnMob(x, y+1, z, 11);
var pig = Level.spawnMob(x, y+1, z, 13);
var steve = Level.spawnMob(x, y+1, z, 12); 
var creeper = Level.spawnMob(x, y+1, z, 10);

rideAnimal(pigzom, creeper);
rideAnimal(pig, pigzom);
rideAnimal(skeleton, pig);
rideAnimal(spider, skeleton);
rideAnimal(steve, spider);

}


}


function modTick(){


if(ent1 == Chicken){

entype1 = 10;

}

else if(ent1 == Cow){

entype1 = 11;

}

else if(ent1 == Pig){

entype1 = 12;

}

if(ent1 == Sheep){

entype1 = 13;

}

else if(ent1==Zombie){

entype1 = 32;

}

else if(ent1==Creeper){

entype1 = 33;

}

else if(ent1==Skeleton){

entype1 = 34;

}

else if(ent1==Spider){

entype1 = 35;

}

else if(ent1==PigZombie){

entype1 = 36;

}

else if(ent1==Entity){

entype1 = 0;

}


if(ent2 == Chicken){

entype2 = 10;

}

else if(ent2 == Cow){

entype2 = 11;

}

else if(ent2 == Pig){

entype2 = 12;

}

if(ent2 == Sheep){

entype2 = 13;

}

else if(ent2==Zombie){

entype2 = 32;

}

else if(ent2==Creeper){

entype2 = 33;

}

else if(ent2==Skeleton){

entype2 = 34;

}

else if(ent2==Spider){

entype2 = 35;

}

else if(ent2==PigZombie){

entype2 = 36;

}

else if(ent2==Entity){

entype2 = 0;

}


if(ent3 == Chicken){

entype3 = 10;

}

else if(ent3 == Cow){

entype3 = 11;

}

else if(ent3 == Pig){

entype3 = 12;

}

if(ent3 == Sheep){

entype3 = 13;

}

else if(ent3==Zombie){

entype3 = 32;

}

else if(ent3==Creeper){

entype3 = 33;

}

else if(ent3==Skeleton){

entype3 = 34;

}

else if(ent3==Spider){

entype3 = 35;

}

else if(ent3==PigZombie){

entype3 = 36;

}

else if(ent3==Entity){

entype3 = 0;

}


if(ent4 == Chicken){

entype4 = 10;

}

else if(ent4 == Cow){

entype4 = 11;

}

else if(ent4 == Pig){

entype4 = 12;

}

if(ent4 == Sheep){

entype4 = 13;

}

else if(ent4==Zombie){

entype4 = 32;

}

else if(ent4==Creeper){

entype4 = 33;

}

else if(ent4==Skeleton){

entype4 = 34;

}

else if(ent4==Spider){

entype4 = 35;

}

else if(ent4==PigZombie){

entype4 = 36;

}

else if(ent4==Entity){

entype4 = 0;

}

if(ent5 == Chicken){

entype5 = 10;

}

else if(ent5 == Cow){

entype5 = 11;

}

else if(ent5 == Pig){

entype5 = 12;

}

if(ent5 == Sheep){

entype5 = 13;

}

else if(ent5==Zombie){

entype5 = 32;

}

else if(ent5==Creeper){

entype5 = 33;

}

else if(ent5==Skeleton){

entype5 = 34;

}

else if(ent5==Spider){

entype5 = 35;

}

else if(ent5==PigZombie){

entype5 = 36;

}

else if(ent5==Entity){

entype5 = 0;

}


if(ent6 == Chicken){

entype6 = 10;

}

else if(ent6 == Cow){

entype6 = 11;

}

else if(ent6 == Pig){

entype6 = 12;

}

if(ent6 == Sheep){

entype6 = 13;

}

else if(ent6==Zombie){

entype6 = 32;

}

else if(ent6==Creeper){

entype6 = 33;

}

else if(ent6==Skeleton){

entype6 = 34;

}

else if(ent6==Spider){

entype6 = 35;

}

else if(ent6==PigZombie){

entype6 = 36;

}

else if(ent6==Entity){

entype6 = 0;

}


if(ent7 == Chicken){

entype7 = 10;

}

else if(ent7 == Cow){

entype7 = 11;

}

else if(ent7 == Pig){

entype7 = 12;

}

if(ent7 == Sheep){

entype7 = 13;

}

else if(ent7==Zombie){

entype7 = 32;

}

else if(ent7==Creeper){

entype7 = 33;

}

else if(ent7==Skeleton){

entype7 = 34;

}

else if(ent7==Spider){

entype7 = 35;

}

else if(ent7==PigZombie){

entype7 = 36;

}

else if(ent7==Entity){

entype7 = 0;

}


if(ent8 == Chicken){

entype8 = 10;

}

else if(ent8 == Cow){

entype8 = 11;

}

else if(ent8 == Pig){

entype8 = 12;

}

if(ent8 == Sheep){

entype8 = 13;

}

else if(ent8==Zombie){

entype8 = 32;

}

else if(ent8==Creeper){

entype8 = 33;

}

else if(ent8==Skeleton){

entype8 = 34;

}

else if(ent8==Spider){

entype8 = 35;

}

else if(ent8==PigZombie){

entype8 = 36;

}

else if(ent8==Entity){

entype8 = 0;

}


if(ent9 == Chicken){

entype9 = 10;

}

else if(ent9 == Cow){

entype9 = 11;

}

else if(ent9 == Pig){

entype9 = 12;

}

if(ent9 == Sheep){

entype9 = 13;

}

else if(ent9==Zombie){

entype9 = 32;

}

else if(ent9==Creeper){

entype9 = 33;

}

else if(ent9==Skeleton){

entype9 = 34;

}

else if(ent9==Spider){

entype9 = 35;

}

else if(ent9==PigZombie){

entype9 = 36;

}

else if(ent9==Entity){

entype9 = 0;

}


if(ent10 == Chicken){

entype10 = 10;

}

else if(ent10 == Cow){

entype10 = 11;

}

else if(ent10 == Pig){

entype10 = 12;

}

if(ent10 == Sheep){

entype10 = 13;

}

else if(ent10==Zombie){

entype10 = 32;

}

else if(ent10==Creeper){

entype10 = 33;

}

else if(ent10==Skeleton){

entype10 = 34;

}

else if(ent10==Spider){

entype10 = 35;

}

else if(ent10==PigZombie){

entype10 = 36;

}

else if(ent10==Entity){

entype10 = 0;

}


if(ent11 == Chicken){

entype11 = 10;

}

else if(ent11 == Cow){

entype11 = 11;

}

else if(ent11 == Pig){

entype11 = 12;

}

if(ent11 == Sheep){

entype11 = 13;

}

else if(ent11==Zombie){

entype11 = 32;

}

else if(ent11==Creeper){

entype11 = 33;

}

else if(ent11==Skeleton){

entype11 = 34;

}

else if(ent11==Spider){

entype11 = 35;

}

else if(ent11==PigZombie){

entype11 = 36;

}

else if(ent11==Entity){

entype11 = 0;

}


if(ent12 == Chicken){

entype12 = 10;

}

else if(ent12 == Cow){

entype12 = 11;

}

else if(ent12 == Pig){

entype12 = 12;

}

if(ent12 == Sheep){

entype12 = 13;

}

else if(ent12==Zombie){

entype12 = 32;

}

else if(ent12==Creeper){

entype12 = 33;

}

else if(ent12==Skeleton){

entype12 = 34;

}

else if(ent12==Spider){

entype12 = 35;

}

else if(ent12==PigZombie){

entype12 = 36;

}

else if(ent12==Entity){

entype12 = 0;

}


if(ent13 == Chicken){

entype13 = 10;

}

else if(ent13 == Cow){

entype13 = 11;

}

else if(ent13 == Pig){

entype13 = 12;

}

if(ent13 == Sheep){

entype13 = 13;

}

else if(ent13==Zombie){

entype13 = 32;

}

else if(ent13==Creeper){

entype13 = 33;

}

else if(ent13==Skeleton){

entype13 = 34;

}

else if(ent13==Spider){

entype13 = 35;

}

else if(ent13==PigZombie){

entype13 = 36;

}

else if(ent13==Entity){

entype13 = 0;

}


if(ent14 == Chicken){

entype14 = 10;

}

else if(ent14 == Cow){

entype14 = 11;

}

else if(ent14 == Pig){

entype14 = 12;

}

if(ent14 == Sheep){

entype14 = 13;

}

else if(ent14==Zombie){

entype14 = 32;

}

else if(ent14==Creeper){

entype14 = 33;

}

else if(ent14==Skeleton){

entype14 = 34;

}

else if(ent14==Spider){

entype14 = 35;

}

else if(ent14==PigZombie){

entype14 = 36;

}

else if(ent14==Entity){

entype14 = 0;

}


if(ent15 == Chicken){

entype15 = 10;

}

else if(ent15 == Cow){

entype15 = 11;

}

else if(ent15 == Pig){

entype15 = 12;

}

if(ent15 == Sheep){

entype15 = 13;

}

else if(ent15==Zombie){

entype15 = 32;

}

else if(ent15==Creeper){

entype15 = 33;

}

else if(ent15==Skeleton){

entype15 = 34;

}

else if(ent15==Spider){

entype15 = 35;

}

else if(ent15==PigZombie){

entype15 = 36;

}

else if(ent15==Entity){

entype15 = 0;

}


if(ent16 == Chicken){

entype16 = 10;

}

else if(ent16 == Cow){

entype16 = 11;

}

else if(ent16 == Pig){

entype16 = 12;

}

if(ent16 == Sheep){

entype16 = 13;

}

else if(ent16==Zombie){

entype16 = 32;

}

else if(ent16==Creeper){

entype16 = 33;

}

else if(ent16==Skeleton){

entype16 = 34;

}

else if(ent16==Spider){

entype16 = 35;

}

else if(ent16==PigZombie){

entype16 = 36;

}

else if(ent16==Entity){

entype16 = 0;

}


if(ent17 == Chicken){

entype17 = 10;

}

else if(ent17 == Cow){

entype17 = 11;

}

else if(ent17 == Pig){

entype17 = 12;

}

if(ent17 == Sheep){

entype17 = 13;

}

else if(ent17==Zombie){

entype17 = 32;

}

else if(ent17==Creeper){

entype17 = 33;

}

else if(ent17==Skeleton){

entype17 = 34;

}

else if(ent17==Spider){

entype17 = 35;

}

else if(ent17==PigZombie){

entype17 = 36;

}

else if(ent17==Entity){

entype17 = 0;

}


if(ent18 == Chicken){

entype18 = 10;

}

else if(ent18 == Cow){

entype18 = 11;

}

else if(ent18 == Pig){

entype18 = 12;

}

if(ent18 == Sheep){

entype18 = 13;

}

else if(ent18==Zombie){

entype18 = 32;

}

else if(ent18==Creeper){

entype18 = 33;

}

else if(ent18==Skeleton){

entype18 = 34;

}

else if(ent18==Spider){

entype18 = 35;

}

else if(ent18==PigZombie){

entype18 = 36;

}

else if(ent18==Entity){

entype18 = 0;

}


if(ent19 == Chicken){

entype19 = 10;

}

else if(ent19 == Cow){

entype19 = 11;

}

else if(ent19 == Pig){

entype19 = 12;

}

if(ent19 == Sheep){

entype19 = 13;

}

else if(ent19==Zombie){

entype19 = 32;

}

else if(ent19==Creeper){

entype19 = 33;

}

else if(ent19==Skeleton){

entype19 = 34;

}

else if(ent19==Spider){

entype19 = 35;

}

else if(ent19==PigZombie){

entype19 = 36;

}

else if(ent19==Entity){

entype19 = 0;

}


if(ent20 == Chicken){

entype20 = 10;

}

else if(ent20 == Cow){

entype20 = 11;

}

else if(ent20 == Pig){

entype20 = 12;

}

if(ent20 == Sheep){

entype20 = 13;

}

else if(ent20==Zombie){

entype20 = 32;

}

else if(ent20==Creeper){

entype20 = 33;

}

else if(ent20==Skeleton){

entype20 = 34;

}

else if(ent20==Spider){

entype20 = 35;

}

else if(ent20==PigZombie){

entype20 = 36;

}

else if(ent20==Entity){

entype20 = 0;

}


}
