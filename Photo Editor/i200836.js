const inputfile=document.querySelector(".file-input")
const  theinpbutton=document.querySelector(".choose-img")

function takinginp(){
    inputfile.click();
}
// thevalue = document.querySelector(".slider input");
let brightness=100;
 let saturation=0;
 let gss=0;
 let inversion=0;
 let gs=0, rott=0, sepp=0, blurr=0;
const all_buttons= document.querySelectorAll(".filter button");
all_buttons.forEach(one_button => {
    one_button.addEventListener("click", () =>{
        document.querySelector(".filter .in_use").classList.remove("in_use");
       one_button.classList.add("in_use");
       if(one_button.id=="brightness"){
        setbr()
       }
      else  if(one_button.id=="saturation"){
        setstr()
       }
      else if(one_button.id=="grayscale"){
        changingvalue.innerHTML=`${gss}%`
     thevalue.value=gss;
       }
     else  if(one_button.id=="inversion"){
        setin()
       }
   
     })
    
 });


 function setbr(){
    //alert("setbr")
    changingvalue.innerHTML=`${brightness}%`
       thevalue.value=brightness;
 }

 function setstr(){
   // alert("setstr")
    changingvalue.innerHTML=`${saturation}%`
        thevalue.value=saturation;
 }

 function setgs(){
   // alert("setgs")
    changingvalue.innerHTML=`${gss}%`
     thevalue.value=gss;        
     console.log(`${gss}`)                                                                                             
        
 }

 function setin(){
    changingvalue.innerHTML=`${inversion}%`
        thevalue.value=inversion;
 }
 thevalue = document.querySelector(".slider input");
 changingvalue= document.querySelector(".filter-info .value");
 const movingfilter = () => {
  
   changingvalue.innerText= `${thevalue.value}%`;
   var thecurrent=document.querySelector(".filter .in_use");
   if(thecurrent.id=== "brightness")
   brightness=thevalue.value;
   else if(thecurrent.id=== "saturation")
   saturation=thevalue.value;
   else if(thecurrent.id=== "grayscale")
   gss=thevalue.value;
   else if(thecurrent.id=== "inversion")
   inversion=thevalue.value;

}

function filterapplication(){
    //alert("in filter");
    console.log`(${gss}%)`
    console.log`(${brightness}%)`
   document.querySelector(".preview-img img").style.filter= ` brightness(${brightness}%) grayscale(${gss}%) invert(${inversion}%)`
    thisfilterapplication();
    // document.querySelector(".preview-img img").style.filter= `saturate(${saturation}%)`;
    // document.querySelector(".preview-img img").style.filter=  `grayscale(${grayscale}%)`;
    // document.querySelector(".preview-img img").style.filter= `invert(${inversion}%)`;
}

function innerhtmlgs(){
    document.getElementById("name").innerHTML = "Gray Scale";
}
function innerhtmlin(){
    document.getElementById("name").innerHTML = "Inversion";

}
function innerhtmlsa(){
    document.getElementById("name").innerHTML = "Saturation";
}
function innerhtmlbr(){
    document.getElementById("name").innerHTML = "Brightness";
}
function choseimg(event){
  document.getElementById("theimg").src=URL.createObjectURL(event.target.files[0]);

}
function resetting(){
brightness=100;
 saturation=0;
 gss=0;
 inversion=0;


if(document.querySelector(".filter .in_use").id=="brightness"){
setbr()
}

if(document.querySelector(".filter .in_use").id=="saturation"){
setstr()
}
if(document.querySelector(".filter .in_use").id=="grayscale"){
setgs();  
}

if(document.querySelector(".filter .in_use").id=="inversion"){
setin()
}


 all_buttons.forEach(one_button => {
    one_button.addEventListener("click", () =>{
        document.querySelector(".filter .in_use").classList.remove("in_use");
       one_button.classList.add("in_use");
       if(one_button.id=="brightness"){
        setbr()
       }
      else  if(one_button.id=="saturation"){
        setstr()
       }
      else if(one_button.id=="grayscale"){
        setgs();                                                                                                    
        
       }
     else  if(one_button.id=="inversion"){
       setin()
       }
   
     })
    
 });
    filterapplication();
    resetpart2();
       // thisfilterapplication();
        //document.querySelector(".preview-img img").style.filter= `brightness(${brightness}%) grayscale(${grayscale}%) invert(${inversion}%) saturate(${saturation}%) blur(${blurr}%) sepia(${sepp}%) `;

}
 thevalue.addEventListener("input", movingfilter);

anglepic=360

 function rotright(){
anglepic=anglepic+90;
document.querySelector(".preview-img img").style.transform= "rotate("+anglepic+"deg)"
}
function rotleft(){
anglepic=anglepic-90;
document.querySelector(".preview-img img").style.transform= "rotate("+anglepic+"deg)"
}
let hor_shift=1;
let ver_shift=1;
function horshift(){
if(hor_shift==1){
    
document.querySelector(".preview-img img").style.transform='scaleX(-1)'

hor_shift=-1
}
else {

document.querySelector(".preview-img img").style.transform='scaleX(1)'
hor_shift=1
}
}

function vershift(){
if(ver_shift==1){
    
    document.querySelector(".preview-img img").style.transform='scaleY(-1)'
    
    ver_shift=-1
    }
    else {
    
    document.querySelector(".preview-img img").style.transform='scaleY(1)'
    ver_shift=1
    }
}
 /////////////////////////////SECTION B JAVA SCRIPT///////////////////////// thevalue = document.querySelector(".slider input");
 //all the values of input sliders



let   grayscalein= document.querySelector(".gs input");
 blurin= document.querySelector(".bl input");
sepiain= document.querySelector(".sep input");
 rotatein= document.querySelector(".rot input");



 gsvalue= document.querySelector(".smol_red .gsper");
 rotvalue= document.querySelector(".smol_red .rotper");
 sepvalue= document.querySelector(".smol_red .sepper");
 blvalue= document.querySelector(".smol_red .blper");
//brightness=thevalue.value;


 const movingfiltergs =() =>{
gsvalue.innerHTML=`${grayscalein.value}%`
gss=grayscalein.value;
}

const movingfilterbl =() =>{
blvalue.innerHTML=`${blurin.value}px` 
blurr=blurin.value;
}

const movingfiltersep =() =>{
sepvalue.innerHTML=`${sepiain.value}`
sepp=sepiain.value
}

const movingfilterrot =() =>{
rotvalue.innerHTML=`${rotatein.value}deg`
rott=rotatein.value;
}
function thisfilterapplication(){
   // alert("in filter");

    console.log(blurr)
    document.querySelector(".preview-img img").style.filter= `brightness(${brightness}%) invert(${inversion}%) blur(${blurr}px) sepia(${sepp}) grayscale(${gss}%)`;
 
}
function rotapp(){
console.log(rott)
document.querySelector(".preview-img img").style.transform= `rotate(${rott}deg)`
}


function resetpart2(){
//alert("inside")
gs=0
rott=0 
sepp=0
blurr=0;

grayscalein.value=gs;
gsvalue.innerHTML=`${grayscalein.value}%`

blurin.value=blurr;
blvalue.innerHTML=`${blurin.value}px`
sepiain.value=sepp 
sepvalue.innerHTML=`${sepiain.value}`
rotatein.value=rott;
rotvalue.innerHTML=`${rotatein.value}deg`

thisfilterapplication()
rotapp();
}



 grayscalein.addEventListener("input", movingfiltergs);
 blurin.addEventListener("input", movingfilterbl);
 sepiain.addEventListener("input", movingfiltersep);
 rotatein.addEventListener("input", movingfilterrot);