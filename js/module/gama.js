// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

export const getAllGamasByClient = async() => {
    let res = await fetch("http://localhost:5507/request_details")
    let dataProductos = await getAllProducts()
    let dataRequestDetails = await res.json()
    let dataRequests = await getAllRequests()
    let dataClients = await getAllClients()
    let dataUpdate = []

    // Recorremos los clientes
    for (let cliente of dataClients) {
        let datosCliente = {
            client_code: cliente.client_code,
            client_name: cliente.client_name,
            boughtGamas: new Set(),
            code_employee_sales_manager: cliente.code_employee_sales_manager
        }

        // Reviso todas las request que han habido
        for (let request of dataRequests) {
            if (request.code_client == cliente.client_code) {
                for (let requestDetails of dataRequestDetails) {
                    if (request.code_request == requestDetails.code_request) {
                        for (let product of dataProductos) {
                            if (requestDetails.product_code == product.code_product) {
                                // Desestructuro su gama
                                let {gama} = product
                                // Añado su gama a los datos de este cliente que genere al inicio
                                datosCliente.boughtGamas.add(gama)
                            }
                        }
                    }
                }
                
            }
        }
}
       // Convierto las gamas compradas del cliente en array
       datosCliente.boughtGamas = Array.from(datosCliente.boughtGamas)
       // Como hay clientes que no compraron productos de ninguna gama, valido que los productos comprados sean 1 o mas
       if (datosCliente.boughtGamas.length >= 1) {
           // Si el cliente si ha comprado dataProductos, los pusheo a la dataUpdate
           dataUpdate.push(datosCliente)
       }
       return dataUpdate
   }
   // De esta forma vuelve el "perfil" de un cliente que ha comprado tres gamas
   // {
   //     client_name: 'Naturagua',
   //     boughtGamas: [ 'Herramientas', 'Frutales', 'Ornamentales' ]
   // }
