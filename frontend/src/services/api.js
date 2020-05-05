import axios from 'axios';

var api = axios.create({
    baseURL: `https://pcjmmlqv06gvblof-gmnapp-nodejs.cfapps.eu10.hana.ondemand.com/service.xsodata/`,
    timeout: 1000,
    headers: { 
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*'
    }
});
// const api = axios.create({
//     // baseURL: `https://cors-anywhere.herokuapp.com//pcjmmlqv06gvblof-gmnapp-nodejs.cfapps.eu10.hana.ondemand.com/service.xsodata`
//     baseURL: `https://pcjmmlqv06gvblof-gmnapp-nodejs.cfapps.eu10.hana.ondemand.com/service.xsodata/`
// });

export default api;

