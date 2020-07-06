


export const getComunas = async() => {
    
    try {
        const response = await fetch('http://179.8.187.64:3000/comunas');
        const comunas = await response.json();
        return comunas.data;
    } catch (error) {
        console.log("ERROR: ",error)
    }
}

export const getTipo = async(comuna) => {
    try {
        const response = await fetch(`http://179.8.187.64:3000/tipos?comuna=${comuna}`);
        const tipo = await response.json();
        return tipo.data;
    } catch (error) {
        console.log("ERROR: ",error);
    }
}

export const getDormitorios = async(comuna, tipo) => {
    try {
        console.log(comuna);
        console.log(tipo);
        const response = await fetch(`http://179.8.187.64:3000/dormitorios?comuna=${comuna}&tipoInmueble=${tipo}`);
        const dormitorios = await response.json();
        return dormitorios.data;
    } catch (error) {
        console.log("ERROR: ",error);
    }
}

export const getInmuebles = async ({comuna,dormitorios, tipoInmueble}) => {
    try {
    
        const response = await fetch('http://179.8.187.64:3000/inmuebles/filtro', {
            method: 'POST', 
            body: JSON.stringify({comuna,dormitorios,tipoInmueble}),
            headers:{
              'Content-Type': 'application/json'
            }});
        const inmuebles = await response.json();
        return inmuebles.data;
    } catch (error) {
        console.log("ERROR: ",error);
    }
}

export const getFullInfo = () => {
    
}