const obtenerInfo = document.querySelector("#enviarDatosContacto");
obtenerInfo.addEventListener("click" ,getInfo)
const correos= [
  {email:"facumarianelli@gmail.com"}
]
// var correos=[];

let datosCorreos=JSON.parse(localStorage.getItem("correos"));

datosCorreos!=null ? console.log("los datos ya estan cargados.") : localStorage.setItem("correos" , JSON.stringify(correos));

function getInfo() {
    Swal.fire({
        title: 'Dejanos tu email!',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            //agregamos el usuario de gitHub a nuestro arreglo de usuarios
            if(login.includes(".")==true && login.includes(".com")==true)
            {
              Swal.fire(
                'contacto guardado exitosamente!',
                'El contacto fue agregado!',
                'success'
                )
                let correos=JSON.parse(localStorage.getItem("correos"));
                correos.push(login);
                localStorage.setItem("correos", JSON.stringify(correos));
            }
            else{
              Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Algo salio mal!',
                footer: '<a href="">Incluyo @ y .com ?</a>'
              })
            }

        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
      })
}

console.log(correos);