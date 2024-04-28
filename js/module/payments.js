//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.
export const customerPaymentCode2008 = async()=>{
    let res = await fetch("http://localhost:5505/payments?date_payment")
    let data = await res.json();
    // let dataUpdate= new Set();
    let dataUpdate= []
    data.forEach(payment => {
        if(payment.date_payment.split('-')[0]==="2008"){

            dataUpdate.push(
                payment.code_client,
    
            )
        }

        // dataUpdate.add(val.status);
    });
    dataUpdate = [... new Set(dataUpdate)]
    // let uniqueStatusArray = Array.from(dataUpdate);//convertir el ser en un array
    return dataUpdate;
    // return uniqueStatusArray;

}

//13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.

export const getAllPaymentsPaypal2008 = async ()=> {
    let res= await fetch("http://localhost:5505/payments?payment=PayPal")
    let data= await res.json();
    let dataUpdate=[];
    data.forEach(val => {
        if(val.date_payment.split('-')[0]==="2008"){
            dataUpdate.push({
                ...val
            })
        }

});
    dataUpdate.sort((a,b)=>b.total-a.total);
    return dataUpdate
}

//14.Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPaymentsMethods = async ()=>{
    let res =await fetch("http://localhost:5505/payments?payment")
    let data= await res.json();
    // let dataUpdate=[];
    let dataUpdate= new Set();
    data.forEach(val => {
        dataUpdate.add(val.payment);

    });
    let uniqueStatusArray = Array.from(dataUpdate);//convertir el ser en un array
    return uniqueStatusArray;

}

//multitabla

//2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllPayments = async ()=>{
    let res= await fetch("http://localhost:5505/payments?code_client")
    let data = await res.json();
    let dataUpdate=[];
    // let dataUpdate= new Set();

    data.forEach(val=>{
        dataUpdate.push({

           codigo_cliente: val.code_client,
           tipo_pago: val.payment
        }
            
        )
        
    })
    // let uniqueStatusArray = Array.from(dataUpdate);//convertir el ser en un array

    return dataUpdate
}


//33. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
// export const getAllClientsNoPay =async ()=>{
//     let res= await fetch("http://localhost:5505/payments")
//     let data=await res.json();
//     let dataUpdate=[]
//     data.forEach(val=>{
//         dataUpdate.push({

//         })
//     })

// }