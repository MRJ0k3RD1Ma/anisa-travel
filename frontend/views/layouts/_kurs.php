<?php

$url = "https://cbu.uz/oz/arkhiv-kursov-valyut/json/";

$get = '840,978,643';
$post = [
    'username' => '+998999670395',
    'password' => 'test',
];
$get = strtoupper($get);
$options = array(
    CURLOPT_RETURNTRANSFER => true,   // return web page
    CURLOPT_HEADER => false,  // don't return headers
    CURLOPT_FOLLOWLOCATION => true,   // follow redirects
    CURLOPT_MAXREDIRS => 10,     // stop after 10 redirects
    CURLOPT_ENCODING => "",     // handle compressed
    CURLOPT_POSTFIELDS => json_encode($post),
    CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
    CURLOPT_USERAGENT => "anisatravel.uz", // name of client
    CURLOPT_AUTOREFERER => true,   // set referrer on redirect
    CURLOPT_CONNECTTIMEOUT => 120,    // time-out on connect
    CURLOPT_TIMEOUT => 120,    // time-out on response
    CURLOPT_SSL_VERIFYHOST => 0,
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_CUSTOMREQUEST => 'GET',
);

$ch = curl_init($url);
curl_setopt_array($ch, $options);

$content = curl_exec($ch);

curl_close($ch);

$content = json_decode($content, true);
if($content) {

    $res = [];
    $text = [840 => 'USD', 978 => 'EUR', 643 => 'RUB'];
    $kurs = explode(',', $get);
    $g = '840';
    $k = explode(',', $g);

    foreach ($content as $key => $item) {
        foreach ($k as $i) {
            if ($item['Code'] == $i) {
                $t = $text[$i];
                $rate = $item['Rate'];
                echo "<a href=\"#\"><span style=\"text-transform: uppercase\">{$t}: {$rate}</span><i class=\"ti ti-chevron-down dropdown-indicator\"></i></a>";
            }
        }
    }
    echo "<ul>";
    foreach ($content as $key => $item) {
        foreach ($kurs as $i) {
            if ($item['Code'] == $i) {
                $t = $text[$i];
                $rate = $item['Rate'];
                echo "<li><a class=\"dropdown-item\">{$t}: {$rate}</a></li>";
            }
        }
    }
    echo "</ul>";
}
?>