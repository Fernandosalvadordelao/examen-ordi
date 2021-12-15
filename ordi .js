let btnusers=document.getElementById('btnusers');
btnusers.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let usuarios=document.getElementById('usuarios');
        console.log(json)
        let lista="";
        for(let i=0;i<10;i++)
        lista+="<p>"+ json[i].name +"<p>"
        usuarios.innerHTML=lista
    });
  })

let btnuser=document.getElementById('btnuser');
btnuser.addEventListener('click',()=>{
let id=document.getElementById('txtuser').value;
fetch('https://jsonplaceholder.typicode.com/users/' + id)
  .then((response => response.json()))
  .then(json => console.log(json));
});

function fotos(){
let userId=document.getElementById('fotos');

    getElementById('fotos')
}