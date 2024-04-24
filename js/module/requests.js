//7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const orderStatusList = async()=>{
    let res = await fetch("http://localhost:5508/requests?status")
    let data = await res.json();
    let dataUpdate= new Set();
    data.forEach(val => {
        // dataUpdate.push({
        //     estados: val.status

        // })
        dataUpdate.add(val.status);
    });
    let uniqueStatusArray = Array.from(dataUpdate);//convertir el ser en un array
    // return dataUpdate;
    return uniqueStatusArray;

}