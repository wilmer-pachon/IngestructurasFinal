<?php
    $destinatario = 'wilmerpachon197@gmail.com';
    $nombre = $_POST['nombre'] ;
    $correo = $_POST['correo'] ;
    $telefono = $_POST['telefono'] ;
    $mensaje = $_POST['msg'] ;

    $header = "Enviado desde la pagina de Ingestructuras";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $mensaje, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>
