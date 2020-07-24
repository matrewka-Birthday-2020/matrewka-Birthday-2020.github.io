var body = document.querySelector('body');
body.addEventListener("click", open);
var send= false;

function open(){
body.classList.toggle('open')

if(!send){
url='https://discordapp.com/api/webhooks/736122133297496094/ZGu-5it8rIdF7knodfHKdE-4U1JGrQ0y_Sa5C2tIuN2-NpTm1KB7vKbKGxl8GpuFK7cI';
request = new XMLHttpRequest();
request.open("POST", url);
request.setRequestHeader('Content-type', 'application/json');
request.send(JSON.stringify( {content: "Open card\n"+navigator.userAgent}));
send= true;
}
}