var http = new XMLHttpRequest(); 
var url = "https://jsonplaceholder.typicode.com/";
var method = 'GET';
http.open(method, url);
http.onreadystatechange = function(){
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
        console.log(http.responseText);
    }
}
