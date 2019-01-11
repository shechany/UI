import Axios from "axios";


export var postData = (route,data) =>{
    var baseUrl = "http://127.0.0.1:8000";
    var returnResponse;
    Axios.post(baseUrl+route,data).then((response) => {
    return  response.data;
}).catch((error) => {
    return Response = error;
})
// return return Response;
}

// export var getData = () =>{
//     Axios.get(url,{

//     }).then(function(){

//     }).catch(function(){

//     })
// }