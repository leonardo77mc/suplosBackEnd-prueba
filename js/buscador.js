$(document).ready(function () {

    const divListaDeInmueblesGenerales = $('#divResultadosBusqueda');
    const divResultadosBusquedaMisBienes = $('#divResultadosBusquedaMisBienes');
    const containerListInmuebles = $('#containerListInmuebles');
    const divSelectCiudad = $('#selectCiudad');
    const divSelectCiudadReporte = $('#selectCiudadReporte');
    const divSelectTipo = $('#selectTipo');
    const divSelectTipoReporte = $('#selectTipoReporte');
    const btnBuscar = $('#btnBuscar');
    const btnGenerarReporte = $('#btnGenerarReporte');
    var ciudadValue = null;
    var ciudadValueReporte = null;
    var tipoValue = null;
    var tipoValueReporte = null;

    loadInmuebles(); // función que carga todos los inmuebles.
    loadInmueblesGuardados(); // función que carga todos los inmuebles guardados en la base de datos.
    loadCiudades(); // función que carga las ciudades para el filtro.
    loadtipos(); // función que carga los tipos para el filtro.

    // selectores para filtrar la busqueda del inmueble.
    divSelectCiudad.change((event) => {
        ciudadValue = event.target.value;
    });

    divSelectTipo.change((event) => {
        tipoValue = event.target.value;
    });

    divSelectCiudadReporte.change((event) => {
        ciudadValueReporte = event.target.value;
    });

    divSelectTipoReporte.change((event) => {
        tipoValueReporte = event.target.value;
    })

    // Evento para buscar el inmueble segun los filtros seleccionados.
    btnBuscar.click((event) => {
        event.preventDefault();

        if (ciudadValue != "" && tipoValue != "") {

            const formData = new FormData();
            formData.append('ciudad', ciudadValue);
            formData.append('tipo', tipoValue);

            axios({
                method: 'post',
                url: 'http://localhost/dashboard/suplosBackEnd/src/route/filtro.route.php',
                data: formData
            })
                .then(function (response) {

                    const listaDeInmuebles = response.data;
                    divListaDeInmueblesGenerales.empty();
                    for (let i of listaDeInmuebles) {
                        const row = `

                      <li class="collection-item">

                        <div class="container" style="width:100%;">
                            <div class="row" id="container-inmuebles">

                                <div class="col s4 m4 l4">
                                    <img src="./img/home.jpg" width="100%" height="100%" />
                                </div>
                                <div class="col s6 m6 l6 content-inmueble">

                                    <p class="p_1">Dirección:${i.Direccion}</p>
                                    <p class="p_2">Ciudad:${i.Ciudad}</p>
                                    <p class="p_3">Teléfono:${i.Telefono}</p>
                                    <p class="p_4">Código:${i.Codigo_Postal}</p>
                                    <p class="p_5">Tipo:${i.Tipo}</p>
                                    <p class="p_5">Precio:${i.Precio}</p>
                                    
                                    <button class="btn white-text btnSave" id="${i.Id}">Guardar</button>

                                </div>
                                <div class="col s4 m2 l2"></div>

                            </div>
                        </div>
                    </li>
                    `;
                        divListaDeInmueblesGenerales.append(row);
                    }

                });

        } else {
            loadInmuebles();
        }
    });

    // Evento para buscar el inmueble segun los filtros seleccionados en el generar reporte.
    btnGenerarReporte.click((event) => {
        event.preventDefault();

        if (ciudadValueReporte != "" && tipoValueReporte != "") {

            const formData = new FormData();
            formData.append('ciudad', ciudadValueReporte);
            formData.append('tipo', tipoValueReporte);

            axios({
                method: 'post',
                url: 'http://localhost/dashboard/suplosBackEnd/src/route/filtro.route.php',
                data: formData
            })
                .then(function (response) {

                    const listaDeInmuebles = response.data;
                    containerListInmuebles.empty();
                    for (let i of listaDeInmuebles) {
                        const row = `

                      <li class="collection-item">

                        <div class="container" style="width:100%;">
                            <div class="row" id="container-inmuebles">

                                <div class="col s4 m4 l4">
                                    <img src="./img/home.jpg" width="100%" height="100%" />
                                </div>
                                <div class="col s6 m6 l6 content-inmueble">

                                    <p class="p_1">Dirección:${i.Direccion}</p>
                                    <p class="p_2">Ciudad:${i.Ciudad}</p>
                                    <p class="p_3">Teléfono:${i.Telefono}</p>
                                    <p class="p_4">Código:${i.Codigo_Postal}</p>
                                    <p class="p_5">Tipo:${i.Tipo}</p>
                                    <p class="p_5">Precio:${i.Precio}</p>
                                    
                                    <button class="btn white-text btnSave" id="${i.Id}">Guardar</button>

                                </div>
                                <div class="col s4 m2 l2"></div>

                            </div>
                        </div>
                    </li>
                    `;
                        containerListInmuebles.append(row);
                    }

                });

        }
    });

    // guardar inmueble.
    $('#divResultadosBusqueda').on('click', '.btnSave', function (event) {

        const formData = new FormData();
        formData.append("id_inmobiliaria", event.target.id);

        axios({
            method: 'post',
            url: 'http://localhost/dashboard/suplosBackEnd/src/route/guardar.route.php',
            data: formData
        })
            .then(function (response) {
                console.log('Response:', response.data);
                if (response.data) {
                    loadInmueblesGuardados();
                } else {

                }
            });

    });

    // eliminar el inmueble.
    $('#divResultadosBusquedaMisBienes').on('click', '.btnDelete', function (event) {

        const formData = new FormData();
        formData.append("id_inmobiliaria", event.target.id);

        axios({
            method: 'post',
            url: 'http://localhost/dashboard/suplosBackEnd/src/route/eliminarInmueble.route.php',
            data: formData
        })
            .then(function (response) {
                console.log('Response:', response.data);
                if (response.data) {
                    loadInmueblesGuardados();
                } else {

                }
            });

    });


    // Cargar todos los inmuebles de archivo data-1.json
    function loadInmuebles() {
        // Make a request for a user with a given ID
        axios.get('http://localhost/dashboard/suplosBackEnd/src/route/inmuebles.route.php')
            .then(function (response) {
                // console.log('Response:', response.data);
                // handle success
                const listaDeInmuebles = response.data;
                divListaDeInmueblesGenerales.empty();
                for (let i of listaDeInmuebles) {
                    const row = `

                      <li class="collection-item">

                        <div class="container" style="width:100%;">
                            <div class="row" id="container-inmuebles">

                                <div class="col s4 m4 l4">
                                    <img src="./img/home.jpg" width="100%" height="100%" />
                                </div>
                                <div class="col s6 m6 l6 content-inmueble">

                                    <p class="p_1">Dirección:${i.Direccion}</p>
                                    <p class="p_2">Ciudad:${i.Ciudad}</p>
                                    <p class="p_3">Teléfono:${i.Telefono}</p>
                                    <p class="p_4">Código:${i.Codigo_Postal}</p>
                                    <p class="p_5">Tipo:${i.Tipo}</p>
                                    <p class="p_5">Precio:${i.Precio}</p>
                                    
                                    <button class="btn white-text btnSave" id="${i.Id}">Guardar</button>

                                </div>
                                <div class="col s4 m2 l2"></div>

                            </div>
                        </div>
                    </li>
                    `;
                    divListaDeInmueblesGenerales.append(row);
                }
            })
            .catch(function (error) {
                // handle error
                console.log('error:' + error.message);
            });
    }

    // cargar todos los inmuebles de la base de datos.
    function loadInmueblesGuardados() {
        // Make a request for a user with a given ID
        axios.get('http://localhost/dashboard/suplosBackEnd/src/route/inmueblesGuardados.route.php')
            .then(function (response) {
                console.log('Response save:', response.data);
                // handle success
                const listaDeInmuebles = response.data;
                divResultadosBusquedaMisBienes.empty();
                for (let i of listaDeInmuebles) {
                    const row = `

                      <li class="collection-item">

                        <div class="container" style="width:100%;">
                            <div class="row" id="container-inmuebles">

                                <div class="col s4 m4 l4">
                                    <img src="./img/home.jpg" width="100%" height="100%" />
                                </div>
                                <div class="col s6 m6 l6 content-inmueble">

                                    <p class="p_1">Dirección:${i.direccion}</p>
                                    <p class="p_2">Ciudad:${i.ciudad}</p>
                                    <p class="p_3">Teléfono:${i.telefono}</p>
                                    <p class="p_4">Código:${i.codigo_postal}</p>
                                    <p class="p_5">Tipo:${i.tipo}</p>
                                    <p class="p_5">Precio:${i.precio}</p>
                                    
                                    <button class="btn white-text btnDelete" id="${i.id}">Eliminar</button>

                                </div>
                                <div class="col s4 m2 l2"></div>

                            </div>
                        </div>
                    </li>
                    `;
                    divResultadosBusquedaMisBienes.append(row);
                }
            })
            .catch(function (error) {
                // handle error
                console.log('error:' + error.message);
            });
    }

    // Cargar las ciudades para el filtro sin repetirse.
    function loadCiudades() {
        // Make a request for a user with a given ID
        axios.get('http://localhost/dashboard/suplosBackEnd/src/route/ciudades.route.php')
            .then(function (response) {
                // handle success
                const listaCiudades = Object.values(response.data);
                // divSelectCiudad.empty();
                // divSelectCiudadReporte.empty();
                for (let i = 0; i < listaCiudades.length; i++) {
                    const row = `<option>${listaCiudades[i]}</option>`;
                    divSelectCiudad.append(row);
                    divSelectCiudadReporte.append(row);
                }
            })
            .catch(function (error) {
                // handle error
                console.log('error:' + error.message);
            });
    }

    // cargar los tipos de inmuebles sin repetirse.
    function loadtipos() {
        // Make a request for a user with a given ID
        axios.get('http://localhost/dashboard/suplosBackEnd/src/route/tipos.route.php')
            .then(function (response) {
                // handle success
                const listaTipos = Object.values(response.data);
                // divSelectTipo.empty();
                // divSelectTipoReporte.empty();
                for (let i = 0; i < listaTipos.length; i++) {
                    const row = `<option>${listaTipos[i]}</option>`;
                    divSelectTipo.append(row);
                    divSelectTipoReporte.append(row);
                }
            })
            .catch(function (error) {
                // handle error
                console.log('error:' + error.message);
            });
    }

    //convertir a excel
    function convertToCSV(objArray) {
        const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
        let str = "";
        for (let i = 0; i < array.length; i++) {
            let line = "";
            for (let index in array[i]) {
                if (line != "") line += ",";
                line += array[i][index];
            }
            str += line + "\r\n";
        }
        return str;
    }

});