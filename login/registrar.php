<?php
    include("con_db.php");

if (isset($_POST['registrar'])) {

    if (strlen($_POST['nombre']) >= 1 &&
        strlen($_POST['primerape']) >= 1 &&
        strlen($_POST['segundoape']) >= 1 &&
        strlen($_POST['correo']) >= 1 &&
        strlen($_POST['contrasena']) >= 1 &&
        strlen($_POST['confirmarcontrasena']) >= 1 ){

            $nombre = trim($_POST['nombre']);
            $primerape = trim($_POST['primerape']);
            $segundoape = trim($_POST['segundoape']);
            $correo = trim($_POST['correo']);
            $contrasena = trim($_POST['contrasena']);
            $confirmarconstrasena = trim($_POST['confirmarcontrasena']);

            $consulta = "INSERT INTO `usuario`(Nom_Usuario, Primer_Apellido, Segundo_Apellido, Correo_Usuario, Contraseña) 
            VALUES ('$nombre','$primerape','$segundoape','$correo','$contrasena')";

            $resultado = mysqli_query($conex,$consulta);

        
    }
}
?>