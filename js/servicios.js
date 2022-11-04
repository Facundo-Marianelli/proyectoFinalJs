//inicializo variables, aun los servicios no definí si va a tener clase construcctora o van a estar fijas

localStorage.setItem("servicios" , JSON.stringify(servicios));

const items = document.querySelector("#servicios");

//creo funciones
function renderizarServicios() {
    let serviciosJSON;
    fetch("../data/servicios.json")
    .then(response => response.json())
    .then(data => {
        serviciosJSON = [...data]
        console.log("servicios del json",serviciosJSON);

        serviciosJSON.forEach((servicio) => {
            let htmlFiltrados = `
                <div class="col-12 mb-5 d-flex flex-row justify-content-center">
                <div class="card text-dark flex-row" style="width: 30rem;">
                <h4>${servicio.Nombre}</h4>
                <div>
                <img  style="width: 100px;" src="https://res.cloudinary.com/dgvlsnajj/image/upload/v1664136816/Curso_mhiruy.jpg" alt="Card image cap">
                </div>
                    <div class="card-body" >
                        <h5 class="card-title">Idioma: ${servicio.Idioma}</h5>
                    </div>
                </div>
                </div>
                `;
            items.innerHTML += htmlFiltrados;
        });
    });

}

//invoco funcion
renderizarServicios();