import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_URL;
import Home from "./Home";
import React from "react";
// function Profile( {profile}) {
//     return (

//     )
// }

                                        
var axios = require("axios").default;

var options = {
method: 'POST',
url: 'https://beta.eu-north.computational-magic.com/api/v1',
headers: {
    'content-type': 'application/json',
    'x-api-key': 'YOUR API KEY HERE'
},
data: {
    query: '{summary(input: "YOUR LONG STRING TO SUMMARISE HERE" )}'
}
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});