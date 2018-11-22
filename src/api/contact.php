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
        $conn=null;
        
    $date = date('d/m/Y');
    $time = date('H:i:s');
  
    $to      = 'info@hyntec.in'; 
    $subject = 'Important:Contact the Customer '.$contact_name.; 

    /* $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: hemii1413@gmail.com' . "\r\n";
    $headers .= 'Cc: hemii1413@gmail.com' . "\r\n"; 
    $headers .= 'Reply-To: hemii1413@gmail.com' . "\r\n"; 
    $headers .= 'X-Mailer: PHP/' . phpversion();  */

    $headers = "From: hemii1413@gmail.com" . "\r\n" ;
    $headers .= "Reply-To: hemii1413@gmail.com" . "\r\n" ;
    $headers .= "CC: hemii1413@gmail.com" . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\b";
  
    $message = "
        <html>
            <head>
                <title>Welcome to Hyntec IT Services</title>
            </head>
             <body>
                <h1>Thanks you for joining with us!</h1>
                <table cellspacing='0' style='width: 50%; height: 200px;'>
                    <tr style='background-color: #d4d4d4;'>
                        <th>Name:</th><td>.$contact_name.</td>
                    </tr>
                    <tr style='background-color: #e0e0e0;'>
                        <th>Email:</th><td>.$contact_email.</td>
                    </tr>
                    <tr style='background-color: #d4d4d4;'>
                        <th>Mobile Number:</th><td>.$contact_number.</td>
                    </tr>
                    <tr style='background-color: #e0e0e0;'>
                        <th>Subject:</th><td>.$subject.</td>
                    </tr> 
                    <tr style='background-color: #d4d4d4;'>
                        <th>Mesaage:</th><td>.$message.</td>
                    </tr>
                    <tr style='background-color: #e0e0e0;'>
                        <th>Service Type:</th><td>.$service_type.</td>
                    </tr> 
                    <tr style='background-color: #d4d4d4;'>
                        <th>Service Location:</th><td>.$service_location.</td>
                    </tr>
                    <tr style='background-color: #e0e0e0;'>
                        <th>Sent Date:</th><td>.$date.$time.</td>
                    </tr> 
                 </table>
            </body>
        </html>";
  
    mail($to, $subject, $message, $headers); 
    echo "Mail sent Successfully";
  
}
else{
	echo "Error Occured";
}
 
 
?>
