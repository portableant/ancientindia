<?

$mailTo = "emu@thebritishmuseum.ac.uk";
$mailSubject = "Mobile submission";

$myName = $_POST['name'];
$myAddress = $_POST['address'];
$myTitle = $_POST['title'];
$myXml = $_POST['xmlString'];

$mailBody = "Name: $myName\r\n";
$mailBody .= "Email: $myAddress\r\n";
$mailBody .= "Title: $myTitle\r\n";
$mailBody .= $myXml;

$mailHeaders = "From: arabesque@ancientindia.co.uk\n";

if(mail($mailTo, $mailSubject, $mailBody, $mailHeaders)){
	print("success=true");
}else{
	print("success=false");
}


//print($mailBody);

?>