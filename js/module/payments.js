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