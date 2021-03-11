<?php
include("../data/db/Connect.php");

class InmuebleDaos
{

    // metodo dao que guarda el inmueble.
    public static function save($direccion, $ciudad, $telefono, $codigoPostal, $tipo, $precio, $idInmobiliaria)
    {
        $connect = Connect::getINSTANCE();
        $insertar = "INSERT INTO `list_inmuebles` (`id`, `direccion`, `ciudad`, `telefono`, `codigo_postal`, `tipo`, `precio`, `id_inmueble`) VALUES (NULL, '$direccion', '$ciudad', '$telefono', '$codigoPostal', '$tipo', '$precio', '$idInmobiliaria')";
        $resultado = mysqli_query($connect->getConnection(), $insertar);

        if (!$resultado) {
            return false;
        } else {
            return true;
        }
    }

    // metodo dao que lista los inmuebles.
    public static function queryListInmuebles()
    {
        $connect = Connect::getINSTANCE();
        $query = "SELECT * FROM `list_inmuebles`";
        $resultado = $connect->getConnection()->query($query);
        $inmuebles = array();
        if ($resultado->num_rows > 0) {
            // output data of each row
            while ($row = $resultado->fetch_assoc()) {
                $inmuebles[] = $row;
            }
            return $inmuebles;
        }
        return [];
    }

    // metodo dao que elimina el inmueble segun el id.
    public static function queryDeleteInmuebleById($id)
    {
        $connect = Connect::getINSTANCE();
        $query = "DELETE FROM `list_inmuebles` WHERE `list_inmuebles`.`id` = $id";
        $resultado = $connect->getConnection()->query($query);

        if (!$resultado) {
            return false;
        } else {
            return true;
        }
    }


}