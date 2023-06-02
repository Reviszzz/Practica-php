<?php 

//obtener todos los valores del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$web = $_POST['web'];
$mensaje = $_POST['mensaje'];

if (!empty($email) && !empty($mensaje)) {//verificar el email y mensaje
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $recive = "jtrujillocruz26@gmail.com";//el email que recive
        $object = "From: $name <$name>";
        $body = "Name: $name\nEmail: $email\nTelephone: $telephone\nWeb: $web\n\Mensaje: $mensaje\n";
        $send = "From: $email";
        if(mail($recive ,$object, $body, $send)){//mail para mandar el mensaje
            echo "tu mensaje se envio correctamente!";
        }else{
            echo "hubo un error al envirar el mensaje";
        }
    }else{
        echo "Por favor ingrese un email valido";
    }
}else{
    echo "el email y el mensaje son requeridos";
}

?>