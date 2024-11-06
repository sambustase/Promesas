function enviarInformacion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const operacion = true;
            if (operacion) {
                resolve("Información Enviada");
            } else {
                reject("Error al enviar la información");
            }
        }, 3000);
      });
    }
  
enviarInformacion().then((message) => {
    console.log(message); 
  });


async function fetchData(){
    try {
        let response = await fetch ("https://jsonplaceholder.typicode.com/photos");
        let data = await response.json();
        let count = 0;
        data.forEach(item => {
          if (count < 20) {
            console.log(item.title);
            count++;
          }
        });  
    } catch (error) {
        console.log(error);
        
    }  
}

fetchData()