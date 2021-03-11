<?php
include("../controller/inmuebles.controller.php");

$inmuebles = new InmueblesController();

$ciudad = $_POST["ciudad"];
$tipo = $_POST["tipo"];

if(isset($_POST["ciudad"]) && isset($_POST['tipo'])){
    echo json_encode($data = $inmuebles->listaInmueblesFiltrados($ciudad, $tipo));
}



