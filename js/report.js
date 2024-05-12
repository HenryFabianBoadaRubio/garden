// // import "./components/clock.js";
// import {getAllGamaOrnamentales} from "./module/products.js"
// import {getAllOfficesCodeAndCity,getAllOfficesFromSpainCityAndMovil,getOfficesWithClientsFromFuenlabrada} from "./module/offices.js"
// import {getAllEmployeesWithBossAndCodeSeven,getBossFullNameAndEmail,getAll,getAllEmployeesWithBoss,getAllEmployeesWithBossAndBoss} from "./module/employees.js"
// import {getClientsFromSpain,getAllClientsMadrid1130,getAllClientsAndRepresentSalesPayments,getAllClientsAndRepresentSalesNotPayments,getAllClientsAndRepresentSalesandofficeAndPay,getAllClientsAndRepresentSalesandofficeNotPay,getAllClientsAndRepresentSalesOffices,getAllClientsWithLateRequests} from "./module/clients.js"
// import {orderStatusList,getAllCodeRequestLate,getAllEarlyCodeRequest,getAllRejected2009,getAllDeliveredJanuary} from "./module/requests.js"
// import {customerPaymentCode2008,getAllPaymentsPaypal2008,getAllPaymentsMethods} from "./module/payments.js"


// //MULTITABLAS!
// import {getAllClientsAndRepresentSales} from"./module/clients.js"
// // import {getAllNameRepresentSales} from "./module/employees.js"
// // import { getClientsEmploy } from "./module/clients.js";

// const queryAboutTable1 = document.querySelector("#queryAboutTable1");
// const queryAboutTable2 = document.querySelector("#queryAboutTable2");
// const queryAboutTable3 = document.querySelector("#queryAboutTable3");
// const queryAboutTable4 = document.querySelector("#queryAboutTable4");
// const queryAboutTable5 = document.querySelector("#queryAboutTable5");
// const queryAboutTable6 = document.querySelector("#queryAboutTable6");
// const queryAboutTable7 = document.querySelector("#queryAboutTable7");
// const queryAboutTable8 = document.querySelector("#queryAboutTable8");
// const queryAboutTable9 = document.querySelector("#queryAboutTable9");
// const queryAboutTable10 = document.querySelector("#queryAboutTable10");
// const queryAboutTable11 = document.querySelector("#queryAboutTable11");
// const queryAboutTable12 = document.querySelector("#queryAboutTable12");
// const queryAboutTable13 = document.querySelector("#queryAboutTable13");
// const queryAboutTable14 = document.querySelector("#queryAboutTable14");
// const queryAboutTable15 = document.querySelector("#queryAboutTable15");
// const queryAboutTable16 = document.querySelector("#queryAboutTable16");



// //1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
// queryAboutTable1.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable1.children
//     if(!report__container.innerHTML){
//         let data = await getAllOfficesCodeAndCity();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo: </b>${val.codigo}</p>
//                         <p><b>Ciudad: </b>${val.ciudad}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// //2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
// queryAboutTable2.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable2.children
//     if(!report__container.innerHTML){
//         let data = await getAllOfficesFromSpainCityAndMovil();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Oficinas España</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Telefono: </b>${val.telefono}</p>
//                         <p><b>Ciudad: </b>${val.ciudad}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

// queryAboutTable3.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable3.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesWithBossAndCodeSeven();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div> Empleados Jefe -7</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre_empleado: </b>${val.puesto}</p>
//                         <p><b>Apellidos: </b>${val.apellidos}</p>
//                         <p><b>Email: </b>${val.email}</p>

//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
// queryAboutTable4.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable4.children
//     if(!report__container.innerHTML){
//         let data = await getBossFullNameAndEmail();
//         let plantilla = "";
//         console.log(data);
        
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div> Jefe empresa</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Puesto: </b>${data.puesto}</p>
//                         <p><b>Nombre: </b>${data.nombre}</p>
//                         <p><b>Apellidos: </b>${data.apellidos}</p>
//                         <p><b>Email: </b>${data.email}</p>

//                     </div>
//                 </div>
//             </div>
//             `;

//         report__container.innerHTML = plantilla;
//     }
// })

// //5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

// queryAboutTable5.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable5.children
//     if(!report__container.innerHTML){
//         let data = await getAll();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div> Empleados , NO representante</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre_empleado: </b>${val.nombre}</p>
//                         <p><b>Apellidos: </b>${val.apellidos}</p>
//                         <p><b>Puesto: </b>${val.puesto}</p>

//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// //6. Devuelve un listado con el nombre de los todos los clientes españoles.

// queryAboutTable6.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable6.children
//     if(!report__container.innerHTML){
//         let data = await getClientsFromSpain();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div> Clientes españoles</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre_Clientes: </b>${val.nombre}</p>
//                         <p><b>Nacionalidad: </b>${val.nacionalidad}</p>
                

//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.


// queryAboutTable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable7.children
//     if(!report__container.innerHTML){
//         let data = await orderStatusList();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div> Estados pedidos</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre_estados: </b>${val}</p>
                        
                

//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. 
// queryAboutTable8.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable8.children
//     if(!report__container.innerHTML){
//         let data = await customerPaymentCode2008();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(payment => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes codigo pago 2008</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_cliente: </b>${payment}</p>
                        
                

//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// //9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

// queryAboutTable9.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable9.children
//     if(!report__container.innerHTML){
//         let data = await getAllCodeRequestLate();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Pedidos no entregados a tiempo</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_pedido: </b>${val.Codigo_pedido}</p>
//                         <p><b>Codigo_cliente: </b>${val.Codigo_cliente}</p>
//                         <p><b>Fecha_esperada: </b>${val.Fecha_esperada}</p>
//                         <p><b>Fecha_entrega: </b>${val.Fecha_entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
// queryAboutTable10.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable10.children
//     if(!report__container.innerHTML){
//         let data = await getAllEarlyCodeRequest();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Pedidos entregados anticipados al tiempo</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_pedido: </b>${val.Codigo_pedido}</p>
//                         <p><b>Codigo_cliente: </b>${val.Codigo_cliente}</p>
//                         <p><b>Fecha_esperada: </b>${val.Fecha_esperada}</p>
//                         <p><b>Fecha_entrega: </b>${val.Fecha_entrega}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.
// queryAboutTable11.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable11.children
//     if(!report__container.innerHTML){
//         let data = await getAllRejected2009();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Pedidos rechazados 2009</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_solicitud: </b>${val.code_request}</p>
//                         <p><b>Fecha_solicitud: </b>${val.date_request}</p>
//                         <p><b>Fecha_esperada: </b>${val.date_wait}</p>
//                         <p><b>Fecha_entrega: </b>${val.date_delivery}</p>
//                         <p><b>Estado: </b>${val.status}</p>
//                         <p><b>Codigo_cliente: </b>${val.code_client}</p>
//                         <p><b>id: </b>${val.id}</p>


//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año. -->
// queryAboutTable12.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable12.children
//     if(!report__container.innerHTML){
//         let data = await getAllDeliveredJanuary();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Pedidos entregados enero</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_solicitud: </b>${val.code_request}</p>
//                         <p><b>Fecha_solicitud: </b>${val.date_request}</p>
//                         <p><b>Fecha_esperada: </b>${val.date_wait}</p>
//                         <p><b>Fecha_entrega: </b>${val.date_delivery}</p>
//                         <p><b>Estado: </b>${val.status}</p>
//                         <p><b>Codigo_cliente: </b>${val.code_client}</p>
//                         <p><b>id: </b>${val.id}</p>


//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // <!-- 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor. -->
// queryAboutTable13.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable13.children
//     if(!report__container.innerHTML){
//         let data = await getAllPaymentsPaypal2008();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Pagos paypal 2008</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_cliente: </b>${val.code_client}</p>
//                         <p><b>Tipo_pago: </b>${val.payment}</p>
//                         <p><b>id_pago: </b>${val.id_transaction}</p>
//                         <p><b>Fecha_pago: </b>${val.date_payment}</p>
//                         <p><b>total_pago: </b>${val.total}</p>
//                         <p><b>id: </b>${val.id}</p>
                        


//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.

// queryAboutTable14.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable14.children
//     if(!report__container.innerHTML){
//         let data = await getAllPaymentsMethods();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Formas de pago</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
                        
//                         <p><b>Tipo_pago: </b>${val}</p>
                
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

// queryAboutTable15.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable15.children
//     if(!report__container.innerHTML){
//         let data = await getAllGamaOrnamentales();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Productos ornamentales >100 - stock</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_producto: </b>${val.code_product}</p>
//                         <p><b>Nombre: </b>${val.name}</p>
//                         <p><b>Gama: </b>${val.gama}</p>
//                         <p><b>Dimension: </b>${val.dimension}</p>
//                         <p><b>Provedor: </b>${val.provider}</p>
//                         <p><b>Stock: </b>${val.stock}</p>
//                         <p><b>Precio_venta: </b>${val.price_sale}</p>
//                         <p><b>id: </b>${val.id}</p>
                        


//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

// queryAboutTable16.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable16.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsMadrid1130();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes madrid y representante legal</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_cliente: </b>${val.client_code}</p>
//                         <p><b>Nombre_cliente: </b>${val.client_name}</p>
//                         <p><b>Celular: </b>${val.phone}</p>
//                         <p><b>Direccion: </b>${val.address1}</p>
//                         <p><b>Ciudad: </b>${val.city}</p>
//                         <p><b>Pais: </b>${val.country}</p>
//                         <p><b>Codigo_representante: </b>${val.code_employee_sales_manager}</p>
//                         <p><b>id: </b>${val.id}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// //MULTITABLA!
// // 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
// // --solucion 1.1(employees), 1.2 (clients)

// queryAboutTable17.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable17.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsAndRepresentSales();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Nombre cliente y representante ventas</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_cliente: </b>${val.codigo_cliente}</p>
//                         <p><b>Nombre_cliente: </b>${val.nombre_cliente}</p>
//                         <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
//                         <p><b>Apellido_representante: </b>${val.apellido_representante}</p>
//                         <p><b>Codigo_representante: </b>${val.codigo_representante_ventas}</p>
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })
// // 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

// queryAboutTable18.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable18.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsAndRepresentSalesPayments();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes CON pagos y representante</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_cliente: </b>${val.codigo_pago_cliente}</p>
//                         <p><b>Nombre_cliente: </b>${val.nombre_cliente}</p>
//                         <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
//                         <p><b>Apellido_representante: </b>${val.apellido_representante}</p>
//                         <p><b>Codigo_representante: </b>${val.codigo_representante_ventas}</p>
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

// queryAboutTable19.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable19.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsAndRepresentSalesNotPayments();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes SIN pagos y representante</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Codigo_cliente: </b>${val.codigo_cliente}</p>
//                         <p><b>Nombre_cliente: </b>${val.nombre_cliente}</p>
//                         <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
//                         <p><b>Apellido_representante: </b>${val.apellido_representante}</p>
//                         <p><b>Codigo_representante: </b>${val.codigo_representante_ventas}</p>
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })

// // 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

// queryAboutTable20.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable20.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsAndRepresentSalesandofficeAndPay();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes CON pagos y representante con oficina</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
                       
//                         <p><b>Nombre_cliente: </b>${val.nombre_cliente}</p>
//                         <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
//                         <p><b>Ciudad_oficina_representante: </b>${val.ciudad_oficina_representante}</p>
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;

//     }
// })


// // 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

// queryAboutTable21.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable21.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsAndRepresentSalesandofficeNotPay();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes SIN pagos y representante con oficina</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
                       
//                         <p><b>Nombre_cliente: </b>${val.nombre_cliente}</p>
//                         <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
//                         <p><b>Ciudad_oficina_representante: </b>${val.ciudad_oficina}</p>
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;

//     }
// })

// // 6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.

// queryAboutTable22.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable22.children
//     if(!report__container.innerHTML){
//         let data = await getOfficesWithClientsFromFuenlabrada();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Oficinas clientes fuenlabrada</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
                       
//                         <p><b>Codigo_oficina: </b>${val.code_office}</p>
//                         <p><b>Direccion_1: </b>${val.address}</p>
//                         <p><b>Direccion_2: </b>${val.address2}</p>
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;

//     }
// })


// // 7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

// queryAboutTable23.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable23.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsAndRepresentSalesOffices();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes y representantes con su oficina</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
                       
//                         <p><b>nombre_cliente: </b>${val.nombre_cliente}</p>
//                         <p><b>nombre_representate: </b>${val.nombre_representate}</p>
//                         <p><b>ciudad_oficina_representante: </b>${val.ciudad_oficina_representante}</p>
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;

//     }
// })

// // 8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

// queryAboutTable24.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable24.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesWithBoss();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Nombre empleados y su jefe</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
                       
//                         <p><b>nombre_empleado: </b>${val.employee_name}</p>
//                         <p><b>nombre_jefe: </b>${val.boss_name}</p>
                        
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;

//     }
// })

// // 9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.

// queryAboutTable25.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable25.children
//     if(!report__container.innerHTML){
//         let data = await getAllEmployeesWithBossAndBoss();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>empleado - jefe de jefes</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
                       
//                         <p><b>nombre_empleado: </b>${val.nombre_empleado}</p>
//                         <p><b>nombre_jefe: </b>${val.nombre_bigBoss}</p>
//                         <p><b>nombre_jefe_jefe: </b>${val.nombre_bigBoss_bigBoss}</p>

                        
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;

//     }
// })

// // 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

// queryAboutTable26.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable26.children
//     if(!report__container.innerHTML){
//         let data = await getAllClientsWithLateRequests();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>Clientes que no se les entrego a tiempo</div>
//                 </div>
            
//                 <div class="card__body">
//                     <div class="body__marck">
                       
//                         <p><b>nombre_cliente: </b>${val}</p>
                        

                        
                        
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;

//     }
// })



import { Mycard } from "./component/myCard.js";
import { Mydetails } from "./component/myDetails.js";

let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")

        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
            <my-details logic="office_1" text="1.Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>
            <my-details logic="office_2" text="2.Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>
                
            `;
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
            <my-details logic="employe_1" text="3.Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe "></my-details>
            <my-details logic="employe_2" text="4.Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa. "></my-details>
            <my-details logic="employe_3" text="5.Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas. "></my-details>
               
            `;
        }
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
            <my-details logic="client_1" text="6.Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>
                
            `;
        }
        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
            <my-details logic="request_1" text="7.Devuelve un listado con los distintos estados por los que puede pasar un pedido."></my-details>
            <my-details logic="request_2" text="9.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo."></my-details>
            <my-details logic="request_3" text="10.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada."></my-details>
            <my-details logic="request_4" text="11.Devuelve un listado de todos los pedidos que fueron **rechazados** en 2009."></my-details>
            <my-details logic="request_5" text="12.Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año."></my-details>
                
            `;
        }
        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`
            <my-details logic="payment_1" text="8.Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:"></my-details>
            <my-details logic="payment_2" text="13.Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor."></my-details>
            <my-details logic="payment_3" text="14.Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas."></my-details>
                
            `;
        }
    })
});

let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)