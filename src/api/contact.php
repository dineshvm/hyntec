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
}
else{
	echo "Error Occured";
}
 
 
?>