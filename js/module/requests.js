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

//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
export const getAllCodeRequestLate =async()=>{
    let res= await fetch("http://localhost:5508/requests?data_wait_ne_date_delivery")
    let data =await res.json();
    let dataUpdate= data.map(val =>({

            Codigo_pedido: val.code_request,
            Codigo_cliente: val.code_client,
            Fecha_esperada: val.date_wait,
            Fecha_entrega: val.date_delivery
        }));
        return dataUpdate;
    };


