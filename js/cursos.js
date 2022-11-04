//clase constructora de Alumno
class Curso {
    //la clase alumno va a tener un nombre y apellido, edad, email y los idiomas que sabe
    constructor (id,nombre, nivel, idioma, profesor,precio){
        this.id=id;
        this.nombre=nombre;
        this.nivel=nivel;
        this.idioma=idioma;
        this.profesor=profesor;
        this.precio=precio;
    }
}

//inicializo variables:
let niveles= ["A1","A2","B1","B2","C1","C2"]

const cursos = [
 {  id: 1, nombre: "Curso de ingles para Economía", nivel: "A2" , idioma: "Ingles" , profesor: "Adriana" , precio: 4000    },
 {  id: 2, nombre: "Curso de ingles para Principiates", nivel: "A1" , idioma: "Ingles" , profesor: "Pepe" , precio: 2000    },
 {  id: 2, nombre: "Curso de ingles para Principiates2", nivel: "A1" , idioma: "Ingles" , profesor: "Pepe" , precio: 2000    }
]

//defino el local storage.



var estados=[];

let datosDeCursos=JSON.parse(localStorage.getItem("cursos"));

datosDeCursos!=null ? console.log("los datos ya estan cargados.") : localStorage.setItem("cursos" , JSON.stringify(cursos));

//inicializo variables
const items = document.querySelector("#items");
const muestroCursos=document.querySelector("#mostrandoCursos")

const accionCurso=document.querySelector("#creacionCurso");
accionCurso.addEventListener("click", crearCurso);

//construccion de funciones

function renderizarCursos() {
    let cursos=JSON.parse(localStorage.getItem("cursos"));
    items.innerHTML="";
    cursos.forEach((curso) => {
      let htmlFiltrados = `
          <div class="col-12 mb-5 d-flex flex-row justify-content-center">
          <div class="card text-dark flex-row" style="width: 30rem;">
          <h4>${curso.nombre}</h4>
          <div>
          <img  style="width: 100px;" src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1664136816/Curso_mhiruy.jpg" alt="Card image cap">
          </div>
              <div class="card-body" >
                  <h5 class="card-title">Profesor: ${curso.profesor}</h5>
                  <p>Nivel :${curso.nivel}</p>
                  <p>Precio: ${curso.precio}$</p>
                  <button type="button" class="btn btn-success">Comprar</button>
              </div>
          </div>
          </div>
          `;
        items.innerHTML += htmlFiltrados;
    });
}

//invoco funciones, tambien en los eventos click.

renderizarCursos();

//creo arrow functions para validar los datos ingresados

function chequearPrecio(precio){
    let precioValidado=false;
    //lo convierto a numero la edad, conservado sus decimales en caso que contenga
    precio= Number(precio)
    //si es un numero, y es un entero, estamos bien
    if ((isNaN(precio)===false) && (Number.isInteger(precio)===true))
    {
        //valido que la edad sea mayor a 2. 
        if (precio>0===true){
            //pongo la variable en true.
            precioValidado=true;
        }
    }
    return precioValidado;
}

const chequearNombreArrow = (nombre) => isNaN(nombre) ?  true : false;
const chequearNivelArrow = (nivel) => niveles.includes(nivel.toUpperCase()) ?  true : false; 
const chequearIdiomasArrow = (idiomas) => isNaN(idiomas) ? true : false;
const chequearProfesorArrow = (profesor) => isNaN(profesor) ? true : false;


function crearCurso(nombre,nivel,idioma,profesor,precio) {
    var valores=document.querySelector("#valoresNuevoCurso");
    const inputElements = valores.querySelectorAll("input");
    let cursos=JSON.parse(localStorage.getItem("cursos"));


    //valido datos:
    nombre=inputElements[0].value;
    nombreValidationState=chequearNombreArrow(nombre);
    estados.push(nombreValidationState);

    nivel=inputElements[1].value;
    nivelValidationState=chequearNivelArrow(nivel);
    estados.push(nivelValidationState);

    idioma=inputElements[2].value;
    idiomaValidadoState=chequearIdiomasArrow(idioma);
    estados.push(idiomaValidadoState);

    profesor=inputElements[3].value;
    profesorValidadoState=chequearProfesorArrow(profesor);
    estados.push(profesorValidadoState);


    precio=inputElements[4].value;
    precioValidadoState=chequearPrecio(precio);
    estados.push(precioValidadoState);
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
    else if (estados.includes(false)==false)
    {
        let id=cursos.length+1;
        const newCurso= new Curso(id,nombre,nivel,idioma,profesor,precio);
        cursos.push(newCurso);
        localStorage.setItem("cursos" , JSON.stringify(cursos));
        Swal.fire(
            'Curso Creado exitosamente!',
            'El curso fue agregado!',
            'success'
        )
        estados=[];
        renderizarCursos();
    }
    console.log("estados,",estados);

}

