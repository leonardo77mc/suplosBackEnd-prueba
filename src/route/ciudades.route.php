<?php
include("../controller/inmuebles.controller.php");

// ruta para cargar las ciudades.
$inmuebles = new InmueblesController();
echo json_encode($inmuebles->loadCiudades());
