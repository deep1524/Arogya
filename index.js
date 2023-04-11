async function handlesubmit() {
  let formdata = {
    name: document.getElementById("name1").value,
    number: document.getElementById("number1").value,
    address: document.getElementById("address1").value,
  };
  console.log(formdata);
  formdata = JSON.stringify(formdata);

  let response = await fetch("https://angry-tutu-hen.cyclic.app/form", {
    method: "POST",
    body: formdata,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();

  alert("I will get you soon ");

  window.location.reload()
  console.log(data);
}

async function handleform() {
  let data = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    address: document.getElementById("address").value,
  };
  console.log(data);
  data = JSON.stringify(data);
  

  let response = await fetch("https://angry-tutu-hen.cyclic.app/form", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data1 = await response.json();

  alert("i will get you soon ");
window.location.reload()
  console.log(data1);
}



document.getElementById("validation").style.color="yellow";
function val(el){
  console.log(el.value.length)
  if(el.value.length>10){
    document.getElementById("validation").innerText="Please enter only 10 digits"

  }
}
document.getElementById("validation1").style.color="green";
function val1(el){
  console.log(el.value.length)
  if(el.value.length>10){
    document.getElementById("validation1").innerText="Please enter only 10 digits"

  }
}


let wheel=document.querySelector(".wheel");
// console.log(wheel.innerText)
let spinBtn=document.querySelector(".spinBtn");

let value=Math.ceil(Math.random()*3600);

console.log(value)
spinBtn.onclick=function(){
 
  wheel.style.transform="rotate(" + value + "deg)";
  value+=Math.ceil(Math.random()*3600);
  console.log("value",value)
  console.log(wheel.innerText)
  setTimeout(function(){
   
    
   
  
 document.getElementById("span").innerText="You got 50% discount"
 
    
   },5000)


}





