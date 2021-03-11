<?php


class Connect
{
    private static $INSTANCE = null;
    private $host = "localhost";
    private $db = "Intelcost_bienes";
    private $user = "root";
    private $password = "";
    private $conn;

    public function __construct()
    {
        $this->conn = mysqli_connect($this->host, $this->user, $this->password, $this->db);
        if (!$this->conn) {
            die("Error al conectar la base de datos: " . mysqli_connect_error());
        }
        mysqli_set_charset($this->conn, "utf8");
        // echo "Conexión exitosa";

    }

    /**
     * @return Connect|null
     */
    public static function getINSTANCE()
    {
       if(!isset(self::$INSTANCE)){
           self::$INSTANCE = new Connect();
       }
        return self::$INSTANCE;
    }

    public function getConnection() {
        return $this->conn;
    }

}