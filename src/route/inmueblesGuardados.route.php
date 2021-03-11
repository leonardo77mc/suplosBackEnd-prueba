<?php
include("../controller/inmuebles.controller.php");

$inmuebles = new InmueblesController();
echo json_encode($inmuebles->getListInmueblesGuardados());