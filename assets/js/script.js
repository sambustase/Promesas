
async function obtenerDatos() {
    
    try {
        const url = "https://jsonplaceholder.typicode.com/photos";
        const response = await fetch(url);
        const data = await response.json(); 
        
        data.slice(0, 20).forEach((album) => {
            console.log(`Título del álbum: ${album.title}`);
        });
        
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}


function enviarInformacion() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000); 
    });
}


async function mostrarMensaje() {
    const mensaje = await enviarInformacion(); 
    console.log(mensaje); 
}

obtenerDatos();
mostrarMensaje();
