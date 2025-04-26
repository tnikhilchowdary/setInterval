function checkHealth(){
    console.log(`[${new Date().toLocaleString()}] Server is ruuning Smooothly`)
}

setInterval(checkHealth, 1000);

