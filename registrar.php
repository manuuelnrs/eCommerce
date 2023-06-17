<?php
include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['edad']) >= 1 && strlen($_POST['telefono']) >= 1 && strlen($_POST['direccion']) >= 1 && strlen($_POST['genero']) >= 1 && strlen($_POST['sucursal']) >= 1 && strlen($_POST['comentarios']) >= 1){
        $name = trim($_POST['name']);
        $edad = trim($_POST['edad']);
        $telefono = trim($_POST['telefono']);
        $direccion = trim($_POST['direccion']);
		$email = trim($_POST['email']);
        $genero = trim($_POST['genero']);
        $sucursal = trim($_POST['sucursal']); 
        $comentarios = trim($_POST['comentarios']);
        $fechareg = date("d/m/y");
        $consulta = "INSERT INTO datos(nombre, email, edad, telefono, direccion, genero, sucursal, comentarios, fecha_reg) VALUES ('$name','$email','$edad','$telefono','$direccion','$genero','$pais','$comentarios','$fechareg')"; 
        $resultado = mysqli_query($conex, $consulta);
        if ($resultado) {
            ?>
            <h3 class="ok">¡Te has inscrito correctamente!</h3>
            <?php
        } else {
            ?>
            <h3 class="bad">¡Ups, ha ocurrido un error!</h3>
            <?php
        }
    } else {
        ?>
        <h3 class="bad">¡Por favor, completa todos los campos!</h3>
        <?php
    }
}
?>
