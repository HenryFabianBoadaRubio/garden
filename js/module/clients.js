//6. Devuelve un listado con el nombre de los todos los clientes españoles.

export const getClientsFromSpain = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.client_name,
            nacionalidad: val.country

        })
    });
    return dataUpdate;
}

