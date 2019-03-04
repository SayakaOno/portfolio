<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

echo explode(",", $_SERVER['HTTP_ACCEPT_LANGUAGE'])[0];