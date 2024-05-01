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


//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
export const getAllEarlyCodeRequest = async()=> {
    let res= await fetch ("http://localhost:5508/requests");
    let data =await res.json();
    let dataUpdate=[];
    
    data.forEach(val => {
        let fechaespera= new Date (val.date_wait);  
        let fechaentrega= new Date (val.date_delivery);
        let diferencia=Math.abs(fechaespera.getTime()-fechaentrega.getTime());
        let diferenciatotal=Math.ceil(diferencia/(1000*60*60*24));
        if (fechaentrega < fechaespera && (val.date_wait && val.date_delivery)){
            if(diferenciatotal>=2){
                dataUpdate.push({
                    Codigo_pedido: val.code_request,
                    Codigo_cliente: val.code_client,
                    Fecha_entrega: val.date_delivery,
                    Fecha_esperada: val.date_wait
                })
            }
        }

});
    return dataUpdate
}

//11.Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.

export const getAllRejected2009 = async ()=>{
    let res= await fetch("http://localhost:5508/requests?status=Rechazado");
    let data= await res.json();
    let dataUpdate=[];
    data.forEach(val=> {
        if(val.date_request.split("-")[0]==="2009"){
            dataUpdate.push({

                ...val
            }
            );
        };

    });
    return dataUpdate
}

// 12.Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.

export const getAllDeliveredJanuary = async ()=>{
    let res= await fetch("http://localhost:5508/requests?status=Entregado")
    let data= await res.json();
    let dataUpdate=[];
    data.forEach(val=>{
       dataUpdate.push({
    });
})
    return dataUpdate
    }   

    //consulta externa
    // 2.Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
    export const getAllRequests =async ()=>{
         let res= await fetch("http://localhost:5508/requests")
         let data= await res.json();
        let dataUpdate = []
        data.forEach(val=>{
                dataUpdate.push({
                    
                    codigo_solicitud: val.code_request,
                    codigo_cliente: val.code_client,
                    fecha_solicitud: val.date_request,
                    fecha_esperada: val.date_wait,
                    fecha_entrega: val.date_delivery,
                    estado: val.status,
         } )  }
        );
        return dataUpdate
        }   