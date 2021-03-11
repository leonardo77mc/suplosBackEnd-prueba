<?php
include('../controller/inmuebles.controller.php');

$inmuebles = new InmueblesController();

$id = $_POST["id_inmobiliaria"];
if(isset($_POST["id_inmobiliaria"])){
   echo json_encode($inmuebles->save($id));
}
