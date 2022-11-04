// import valores2 from "../data/niveles.json";

//clase constructora de Alumno
class Alumno {
    //la clase alumno va a tener un nombre y apellido, edad, email y los idiomas que sabe
    constructor (id,nombre, edad, email,idiomas,nivel,sexo,img){
        this.id=id;
        this.nombre=nombre;
        this.edad=edad;
        this.email=email;
        this.idiomas=idiomas;
        this.nivel=nivel;
        this.sexo=sexo;
        this.img=img;
    }
    presentacion() {
        console.log("hola soy "+ this.name +" tengo "+this.age+ " y me gustaria aprender: "+ this.languages)
      }
}

//inicializo variables:

const alumnosDatos = [
{
    id: 1,
    nombre: "Facundo",
    edad: 23,
    sexo: "M",
    nivel: "B1",
    email: "facumarianelli@gmail.com",
    idiomas: ["Frances", "Ingles"],
    img: "https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447133/Avatar_Hombre_xlw4dj.jpg",
},
{
    id: 2,
    nombre: "Josefina",
    edad: 23,
    sexo: "F",
    nivel: "B1",
    email: "josefina1@gmail.com",
    idiomas: ["Ingles"],
    img: "https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447137/Avatar_Mujer_y5euoy.png",
},
{
    id: 3,
    nombre: "Pedro",
    edad:21,
    sexo: "NA",
    nivel: "A2",
    email: "pedro@gmail.com",
    idiomas: ["Frances"],
    img: "https://res.cloudinary.com/dgvlsnajj/image/upload/v1666493178/standardAvatar_hujpdk.jpg",
},
{
    id: 4,
    nombre: "Sol",
    edad:21,
    sexo: "F",
    nivel: "A1",
    email: "pedro@gmail.com",
    idiomas: ["Frances"],
    img: "https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447137/Avatar_Mujer_y5euoy.png",
}
    
];


let niveles= ["A1","A2","B1","B2","C1","C2"]
let filtros = [];

const filtrosRenderizados =[];


let datosAlumnos=JSON.parse(localStorage.getItem("alumnos"));

datosAlumnos!=null ? console.log("los datos ya estan cargados.") : localStorage.setItem("alumnos" , JSON.stringify(alumnosDatos));



//obtengo los elementos del html el cual dispara eventos y luego agrego click para disparar el evento con su funcion.

const items = document.querySelector("#items");

const itemFiltrados=document.querySelector("#alumnosFiltrados")

const cambiar = document.querySelector("#cambiarColores");
cambiar.addEventListener("click", cambiarColoresBotones);

const vacio=document.querySelector("#ver");
vacio.addEventListener("click", verFiltrados);

const alumnosFiltrados=document.querySelector("#filtrarPorNivel");
alumnosFiltrados.addEventListener("click",verFiltrosPorNivel)

const restartFiltros= document.querySelector("#resetearFiltros");
restartFiltros.addEventListener("click", resetFiltros)

const creacionAlumno=document.querySelector("#crearAlumno");
creacionAlumno.addEventListener("click", crearAlumno)

var inputs, index;

inputs = document.getElementsByTagName('input');


//construyo funciones:

function renderizarAlumnos() {
    items.innerHTML="";
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    alumnos.forEach((alumno) => {
    //si el alumno es Masculino, le defino la imagen de un avatar Masculino por defecto
    if (alumno.sexo==="M" || alumno.sexo==="m"){
    alumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447133/Avatar_Hombre_xlw4dj.jpg";
    }
    //si el Alumno es Femenino, le defino la imagen de un avatar Femenino por defecto
    else if (alumno.sexo==="F" || alumno.sexo==="f")
    {
    alumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447137/Avatar_Mujer_y5euoy.png";
    }
    //si no es definido o NA, le defino una imagen de un avatar por defecto.
    else{
    alumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1666493178/standardAvatar_hujpdk.jpg";
    }
    //muestro datos por pantalla:
    let alumnoHTML = `
        <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
        <div class="card text-light bg-dark" style="width: 18rem;">
            <img class="card-img-top" src="${alumno.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${alumno.nombre}</h5>
                <p>tiene interes en aprender: ${alumno.idiomas}</p>
                <p>Email: ${alumno.email}</p>
                <p>Nivel: ${alumno.nivel}</p>
                <p>Edad: ${alumno.edad}</p>
                <button class="btn btn-primary" id="cambioColor" onClick="mostrarDatosConsola(${alumno.id})">Ver todos los datos</button>
            </div>
        </div>
        </div>
        `;
    items.innerHTML += alumnoHTML;
});
}
renderizarAlumnos();

//renderizo los items filtrados.
function renderizarFiltrados() {
    itemFiltrados.innerHTML="";
    filtros.forEach((alumnoFiltrado) => {
    let htmlFiltrados = `
        <h4>${alumnoFiltrado.nivel}</h4>
        <div class="col-12 mb-5 d-flex flex-row justify-content-center">
        <div class="card text-dark flex-row" style="width: 30rem;">
        <div>
        <img  style="width: 100px;" src="${alumnoFiltrado.img}" alt="Card image cap">
        </div>
            <div class="card-body" >
                <h5 class="card-title">${alumnoFiltrado.nombre}</h5>
                <p>Edad : ${alumnoFiltrado.edad}</p>
                <p>Email: ${alumnoFiltrado.email}</p>
                <p>Nivel : ${alumnoFiltrado.nivel}</p>
            </div>
        </div>
        </div>
        `;
    itemFiltrados.innerHTML += htmlFiltrados;
    });

}

function cambiarColoresBotones (){
    //obtengo todos los botones y cada uno le cambio el ID por botonesBlue, y luego le aplico el css.
    let botones=document.getElementsByTagName("button");
    for (const boton of botones)
    {
    boton.id="botonesBlue";
    console.log("valor",boton.id);
    }
}
function verFiltrados() {
    //prompt para que ingrese que valor quiere buscar
    var sexo= prompt("ingrese el sexo F (para chicas) o M (para chicos) o NA (si es sin definir), si ingresa una letra distinta no vera cambios");
    //mientras sea numero vuelvo a pedir
    while (isNaN(sexo)===false ){
        alert("ingrese una letra")
        var sexo= prompt("ingrese el sexo F (para chicas) o M (para chicos) o NA (si es sin definir)");
    }
    //una vez q no es numero convierto en UpperCase y recorro todos los alumnos para encontrar condicidencia en el sexo.
    sexo = sexo.toUpperCase();
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    alumnos.forEach((alumno) => {

        //Optimizo 
        alumno.sexo===sexo ? filtros.push(alumno) : console.log("no es del sexo indicado");
    }
    )
    renderizarFiltrados();
};

function resetFiltros() {
    window.location.reload();
}

function verFiltrosPorNivel() {
    var valorInput = document.querySelector('#valorFiltro');
    valorInput=valorInput.value;

    valorInput=valorInput.toUpperCase();
    if (niveles.includes(valorInput)===false)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se encontro el nivel!',
            footer: '<a href="">Ingrese un nivel valido por favor</a>'
          })
    }
    else{
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    alumnos.forEach((alumno) => {
        //OPTIMIZO
        alumno.nivel===valorInput ? filtros.push(alumno) : console.log("no es del nivel indicado");
    }
    )
    renderizarFiltrados();
    }
};

//muestro los datos por consola, encuentro el ID que esta asociado al click que hago cuando toco el boton y llamo a la funcion con el onClick.
function mostrarDatosConsola(id){
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    let alumno = alumnos.find((alumno) => alumno.id === id);
    alert(`abra la consola para ver todos los datos de ${alumno.nombre}`)
    console.log(alumno);

}
//funcion para chequear que la edad este bien ingresada
function chequearEdad(edad){
    let edadValidada=false;
    //lo convierto a numero la edad, conservado sus decimales en caso que contenga
    edad= Number(edad)
    //si es un numero, y es un entero, estamos bien
    if ((isNaN(edad)===false) && (Number.isInteger(edad)===true))
    {
        //valido que la edad sea mayor a 2. 
        if (edad>5===true){
            //pongo la variable en true.
            edadValidada=true;
        }
    }
    return edadValidada
}


async function obtenerNiveles () {
    const jsonstatus = await fetch("../data/niveles.json");
    valoresNivelesJson= await jsonstatus.json();
}

let valoresNivelesJson;
obtenerNiveles();


//declaro arrow functions para validar los datos del nuevo alumno


const chequearNombreArrow = (nombre) => isNaN(nombre) ?  true : false;
const chequearEmailArrow = (email) => email.includes(".com") && email.includes("@") ?  true : false; 
const chequearIdiomasArrow = (idiomas) => isNaN(idiomas) ? true : false;
const chequearNivelArrow = (nivel) => valoresNivelesJson.find(item => item.nivel === nivel.toUpperCase())  ? true : false;
const chequearSexoArrow = (sexo) => isNaN(sexo) ? true : false;


// const chequearNombreArrow = (nombre) => isNaN(nombre) ?  true : false;
function crearAlumno(nombre,edad,email,idiomas){
    var estados =[];
    let alumnos=JSON.parse(localStorage.getItem("alumnos"));
    //a continuacion se capturan los datos de los inputs y se validan 

    nombre =inputs[0].value;
    nombreValidationState=chequearNombreArrow(nombre);
    estados.push(nombreValidationState);

    edad = inputs[1].value;
    edadValidadaState=chequearEdad(edad);
    estados.push(edadValidadaState);

    email =inputs[2].value;
    emailValidatationState=chequearEmailArrow(email);
    estados.push(emailValidatationState)


    idiomas = inputs[3].value;
    idiomasValidationState=chequearIdiomasArrow(idiomas);
    estados.push(idiomasValidationState);

    nivel=inputs[4].value;
    nivelValidationState=chequearNivelArrow(nivel);
    estados.push(nivelValidationState);
    sexo=inputs[5].value;
    //el array estados contiene cada validacion de los datos, para luego ver si hay algun false devolver error, si son todos true
    // estan los datos ok.
    if (estados.includes(false))
    {
        Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error...',
            text: 'Por favor valide los datos ingresados!',
            footer: '<a href="">Lea el readme para validar los datos aceptados :)</a>'
          })
          estados=[];
    }
    else if(estados.includes(false)===false){
        id=alumnos.length+1;
        const newAlumno = new Alumno (id, nombre, edad, email, idiomas, nivel, sexo);
        if (newAlumno.sexo==="M" || newAlumno.sexo==="m"){
            newAlumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447133/Avatar_Hombre_xlw4dj.jpg";
        }
        //si el Alumno es Femenino, le defino la imagen de un avatar Femenino por defecto
        else if (newAlumno.sexo==="F" || newAlumno.sexo==="f")
            {
            newAlumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1663447137/Avatar_Mujer_y5euoy.png";
            }
            //si no es definido o NA, le defino una imagen de un avatar por defecto.
        else{
            newAlumno.img="https://res.cloudinary.com/dgvlsnajj/image/upload/v1666493178/standardAvatar_hujpdk.jpg";
        }
        //convierto valor a mayuscula para mantener la sintaxis a la hora de renderizar.
        newAlumno.nivel=newAlumno.nivel.toUpperCase()
        alumnos.push(newAlumno);
        localStorage.setItem("alumnos", JSON.stringify(alumnos));
        Swal.fire(
            'Alumno Creado exitosamente!',
            'El Alumno fue agregado!',
            'success'
            )
            estados=[];
        renderizarAlumnos();
    }
}