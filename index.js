//let submit = document.querySelector("form");

//submit.addEventListener('submit', (e)=>{
    //console.log(alert("submitted!"))

    //document.querySelector("form.clinicf").addEventListener("submit", function(event) {
      //  event.preventDefault();
      //  alert("I've been submitted.");
     // }, false)
     // let tel=document.getElementById("tel").addEventListener( )

     //let form=document.getElementById('myform');

    /* form.addEventListener("submit",(e)=>{
        e.preventDefault();
        alert("I've been submitted.");
     })
        */
     document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById('myform').addEventListener("submit",(e)=>{
         e.preventDefault();
        alert("I've been submitted.");
      })

     })


