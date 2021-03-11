<?php
include('../daos/inmuebles.dao.php');


class InmueblesController
{


    public function loadDataJson()
    {
        return json_decode(@file_get_contents("../data/data-1.json"), true);
    }


    // metodo que carga las ciudades y retorna un nuevo array sin elementos repetidos.
    public function loadCiudades()
    {
        $data = $this->loadDataJson();
        $ciudades = array();
        foreach ($data as $item) {
            $ciudades[] = $item["Ciudad"];
        }
        $ciudades = array_unique($ciudades);
        return $ciudades;
    }

    // metodo que carga los tios de inmueble y retorna un nuevo array sin elementos repetidos.
    public function loadTipos()
    {
        $data = $this->loadDataJson();
        $tipos = array();
        foreach ($data as $item) {
            $tipos[] = $item["Tipo"];
        }
        $tipos = array_unique($tipos);
        return $tipos;
    }

    // metodo que retorna los inmuebles de filtro.
    public function listaInmueblesFiltrados($ciudad, $tipo)
    {
        $data = $this->loadDataJson();
        $lista = array();
        foreach ($data as $item) {
            if ($ciudad == $item["Ciudad"] && $tipo == $item["Tipo"]) {
                $lista[] = $item;
            }
        }
        return $lista;
    }

    // metodo que guarda el inmueble en la base de datos.
    public function save($id)
    {
        $data = $this->loadDataJson();
        foreach ($data as $item) {
            if ($id == $item["Id"]) {
                $save = InmuebleDaos::save(
                    $item["Direccion"],
                    $item["Ciudad"],
                    $item["Telefono"],
                    $item["Codigo_Postal"],
                    $item["Tipo"],
                    $item["Precio"],
                    $item["Id"]);
                return $save;
            }
        }

    }

    // metodo que elimina el inmueble de la base de datos segun el id.
    public function eliminar($id)
    {
        return InmuebleDaos::queryDeleteInmuebleById($id);
    }

    // metodo que lista los inmuebles guardados en la base de datos.
    public function getListInmueblesGuardados()
    {
       return InmuebleDaos::queryListInmuebles();
    }

}














