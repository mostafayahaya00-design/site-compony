let dup=document.querySelector(".dup")
let na1=document.querySelector('#na1');
let na2=document.querySelector('#na2');
let na3=document.querySelector('#na3');
let na4=document.querySelector('#na4');
//na1.value=232;
//na2.value=521;
//na3.value=1463;
//na4.value=15;
// scroll hidden and vability
onscroll=function hi(){
if(this.scrollY>800){
    dup.style.display="block";
}
else if(scrollY<800){
    dup.style.display="none";
}}
//counter
function counter(){
  if(scrollY===800){
//loop1
let a=0;
let set1 = setInterval(function(){
  na1.innerHTML=++a;
  if(a==232){
    clearInterval(set1)
  }
}, 20);
//loop2
let b=0;
let set2 = setInterval(function(){
  na2.innerHTML=++b;
  if(b==521){
    clearInterval(set2)
  }
},10);
//loop3
let s=0;
let set3 = setInterval(function(){
  na3.innerHTML=++s;
  if(s==1463){
    clearInterval(set3)
  }
}, );
//loop4
let d=0;
let set4 = setInterval(function(){
  na4.innerHTML=++d;
  if(d==15){
    clearInterval(set4)
  }
}, 100);}
if(scrollY==900){
  scrollY=200
}
}
document.addEventListener("scroll",counter);

//scroll up 
function up(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });  
};