<?php
include('config.php');

$_POST = json_decode(file_get_contents('php://input'));
if (isset($_POST->contact_name)) {
    $contact_name = $_POST->contact_name??NULL;
    $contact_email = $_POST->contact_email??NULL;
    $contact_number = $_POST->contact_number??NULL;
    $subject = $_POST->subject??NULL;
    $message = $_POST->message??NULL;
    $service_type = $_POST->service_type??NULL;
    $service_location = $_POST->service_location??NULL;

    
        // insert mode, there is no ID, but there are data, insert them as new
        $sql = "INSERT INTO contact_info("
            . "contact_name, contact_email, contact_number, subject , message , service_type ,service_location "
            . " ) VALUES ("
            . $conn->quote($contact_name).","
            . $conn->quote($contact_email).","
            . $conn->quote($contact_number).","
            . $conn->quote($subject).","
            . $conn->quote($message).","
            . $conn->quote($service_type).","
            . $conn->quote($service_location).")";
            
        $userdata = $conn->query($sql);
		echo "Data Saved Successfully";
  
    $date = date('d/m/Y');
    $time = date('H:i:s');
  
    $to      = 'info@hyntec.in'; 
    $subject = 'Important:Contact the Customer';  
    $headers = 'From: hemii1413@gmail.com' . "\r\n" . 
              'Reply-To: hemii1413@gmail.com' . "\r\n" . 
              'Content-Type: text/html; charset=ISO-8859-1\r\n' .
              'X-Mailer: PHP/' . phpversion(); 
  
    $message = 'Hello';
  $htmlContent = '
    <html>
    <head>
        <title>Welcome to CodexWorld</title>
    </head>
    <body>
        <h1>Thanks you for joining with us!</h1>
        <table cellspacing="0" style="border: 2px dashed #FB4314; width: 300px; height: 200px;">
            <tr>
                <th>Name:</th><td>CodexWorld</td>
            </tr>
            <tr style="background-color: #e0e0e0;">
                <th>Email:</th><td>contact@codexworld.com</td>
            </tr>
            <tr>
                <th>Website:</th><td><a href="http://www.codexworld.com">www.codexworld.com</a></td>
            </tr>
        </table>
    </body>
    </html>';
  
    mail($to, $subject, $message, $headers); 
    echo "success";
  
}
else{
	echo "Error Occured";
}
 
 
?>
