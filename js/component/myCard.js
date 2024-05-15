import{getAllOfficesCodeAndCity,getAllOfficesFromSpainCityAndMovil} from "../module/offices.js"
import {getAllEmployeesWithBossAndCodeSeven, getBossFullNameAndEmail,getAll}  from "../module/employees.js"
import {getClientsFromSpain,getAllClientsMadrid1130,getAllClientsAndRepresentSales,getAllClientsAndRepresentSalesPayments,getAllClientsAndRepresentSalesNotPayments,getAllClientsAndRepresentSalesandofficeAndPay} from "../module/clients.js"    
import {orderStatusList, getAllCodeRequestLate,getAllEarlyCodeRequest,getAllRejected2009,getAllDeliveredJanuary} from "../module/requests.js"
import {customerPaymentCode2008,getAllPaymentsPaypal2008,getAllPaymentsMethods } from "../module/payments.js"
import {getAllGamaOrnamentales} from "../module/products.js"


export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.shadowRoot.innerHTML = /*html*/ `
            <link rel="stylesheet" href="../css/myCard.css">
        `
    }
    
    // // 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

    async getAllOfficesCodeAndCityDesing() {
        let data = await getAllOfficesCodeAndCity()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Codigo oficina y ciudad</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                        <p><b>direccion1: </b>${val.direccion1}</p>
                        <p><b>direccion2: </b>${val.direccion2}</p>

                        </div>
                    </div>
                </div>
            `
        })
    }

// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
async getAllOfficesFromSpainCityAndMovilDesing() {
    let data = await getAllOfficesFromSpainCityAndMovil()
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/ `
            <div class="report__card">
                <div class="card__title">
                    <div>Ciudad y telefono oficina españa</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Ciudad: </b>${val.ciudad}</p>
                    <p><b>Telefono: </b>${val.telefono}</p>
                   
                  

                    </div>
                </div>
            </div>
        `
    })
}


    //// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe 
// tiene un código de jefe igual a 7.
    async getAllEmployeesWithBossAndCodeSevenDesing() {
        let data = await getAllEmployeesWithBossAndCodeSeven()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre empleados y email jefe 7</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                      

                        </div>
                    </div>
                </div>
            `
        })
    }
    // 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
    async getBossFullNameAndEmailDesing() {
        let data = await getBossFullNameAndEmail()
        // data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre jefe mas puesto de la empresa</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                       <p><b>Puesto: </b>${data.puesto}</p>
                         <p><b>Nombre: </b>${data.nombre}</p>
                         <p><b>Apellidos: </b>${data.apellidos}</p>
                        <p><b>Email: </b>${data.email}</p>
                      

                        </div>
                    </div>
                </div>
            `
        // })
    }

    // 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

    async getAllDesing() {
        let data = await getAll()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Empleados que no son representantes de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre_empleado: </b>${val.nombre}</p>
                         <p><b>Apellidos: </b>${val.apellidos}</p>
                         <p><b>Puesto: </b>${val.puesto}</p>
                      

                        </div>
                    </div>
                </div>
            `
        })
    }
    // 6. Devuelve un listado con el nombre de los todos los clientes españoles.
    async getClientsFromSpainDesing() {
        let data = await getClientsFromSpain()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes españoles</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                       <p><b>Nombre_Clientes: </b>${val.nombre}</p>
                         <p><b>Nacionalidad: </b>${val.nacionalidad}</p>
                      

                        </div>
                    </div>
                </div>
            `
        })
    }

    // 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

    async orderStatusListDesing() {
        let data = await orderStatusList()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Estados pedidos</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre_estados: </b>${val}</p>
                      

                        </div>
                    </div>
                </div>
            `
        })
    }

    // 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:
    async customerPaymentCode2008Desing() {
        let data = await customerPaymentCode2008()
        data.forEach(payment => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Estados pedidos</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                       <p><b>Codigo_cliente: </b>${payment}</p>

                      

                        </div>
                    </div>
                </div>
            `
        })
    }

    //9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

    async getAllCodeRequestLateDesing() {
        let data = await getAllCodeRequestLate()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Pedidos - codigo cliente y fechas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo_pedido: </b>${val.Codigo_pedido}</p>
                        <p><b>Codigo_cliente: </b>${val.Codigo_cliente}</p>
                        <p><b>Fecha_esperada: </b>${val.Fecha_esperada}</p>
                         <p><b>Fecha_entrega: </b>${val.Fecha_entrega}</p>
                      

                        </div>
                    </div>
                </div>
            `
        })
    }

    // 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

    async getAllEarlyCodeRequestDesing() {
        let data = await getAllEarlyCodeRequest()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>pedidos con entrega anticipada 2 días</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo_pedido: </b>${val.Codigo_pedido}</p>
                        <p><b>Codigo_cliente: </b>${val.Codigo_cliente}</p>
                         <p><b>Fecha_esperada: </b>${val.Fecha_esperada}</p>
                         <p><b>Fecha_entrega: </b>${val.Fecha_entrega}</p>

                        </div>
                    </div>
                </div>
            `
        })
    }

    // 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.

    async getAllRejected2009Desing() {
        let data = await getAllRejected2009()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>pedidos rechazados 2009</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo_solicitud: </b>${val.code_request}</p>
                            <p><b>Fecha_solicitud: </b>${val.date_request}</p>
                            <p><b>Fecha_esperada: </b>${val.date_wait}</p>
                            <p><b>Fecha_entrega: </b>${val.date_delivery}</p>
                            <p><b>Estado: </b>${val.status}</p>
                            <p><b>Codigo_cliente: </b>${val.code_client}</p>
                            <p><b>id: </b>${val.id}</p>

                        </div>
                    </div>
                </div>
            `
        })
    }

    // 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.

    async getAllDeliveredJanuaryDesing() {
        let data = await getAllDeliveredJanuary()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>pedidos entregados enero</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo_solicitud: </b>${val.code_request}</p>
                            <p><b>Fecha_solicitud: </b>${val.date_request}</p>
                            <p><b>Fecha_esperada: </b>${val.date_wait}</p>
                            <p><b>Fecha_entrega: </b>${val.date_delivery}</p>
                            <p><b>Estado: </b>${val.status}</p>
                            <p><b>Codigo_cliente: </b>${val.code_client}</p>
                            <p><b>id: </b>${val.id}</p>

                        </div>
                    </div>
                </div>
            `
        })
    }

    // 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.

    async getAllPaymentsPaypal2008Desing() {
        let data = await getAllPaymentsPaypal2008()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Pagos paypal 2008</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${val.code_client}</p>
                        <p><b>Tipo_pago: </b>${val.payment}</p>
                         <p><b>id_pago: </b>${val.id_transaction}</p>
                         <p><b>Fecha_pago: </b>${val.date_payment}</p>
                         <p><b>total_pago: </b>${val.total}</p>
                         <p><b>id: </b>${val.id}</p>

                        </div>
                    </div>
                </div>
            `
        })
    }

    // 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.

    async getAllPaymentsMethodsDesing() {
        let data = await getAllPaymentsMethods()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>lista formas de pago</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                         <p><b>Tipo_pago: </b>${val}</p>


                        </div>
                    </div>
                </div>
            `
        })
    }

    // 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

    async getAllGamaOrnamentalesDesing() {
        let data = await getAllGamaOrnamentales()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Productos gama ornamentales</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo_producto: </b>${val.code_product}</p>
                            <p><b>Nombre: </b>${val.name}</p>
                            <p><b>Gama: </b>${val.gama}</p>
                            <p><b>Dimension: </b>${val.dimension}</p>
                            <p><b>Provedor: </b>${val.provider}</p>
                            <p><b>Stock: </b>${val.stock}</p>
                            <p><b>Precio_venta: </b>${val.price_sale}</p>
                            <p><b>id: </b>${val.id}</p>


                        </div>
                    </div>
                </div>
            `
        })
    }

    // 16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

    async getAllClientsMadrid1130Desing() {
        let data = await getAllClientsMadrid1130()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes madrid - representante 11-30</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${val.client_code}</p>
                        <p><b>Nombre_cliente: </b>${val.client_name}</p>
                         <p><b>Celular: </b>${val.phone}</p>
                         <p><b>Direccion: </b>${val.address1}</p>
                         <p><b>Ciudad: </b>${val.city}</p>
                         <p><b>Pais: </b>${val.country}</p>
                         <p><b>Codigo_representante: </b>${val.code_employee_sales_manager}</p>
                         <p><b>id: </b>${val.id}</p>


                        </div>
                    </div>
                </div>
            `
        })
    }

    // MULTITABLAS
    // 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
    // --solucion 1.1(employees), 1.2 (clients)

    async getAllClientsAndRepresentSalesDesing() {
        let data = await getAllClientsAndRepresentSales()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes Y representante de ventas </div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${val.codigo_cliente}</p>
                        <p><b>Nombre_cliente: </b>${val.nombre_cliente}</p>
                        <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
                       <p><b>Apellido_representante: </b>${val.apellido_representante}</p>
                        <p><b>Codigo_representante: </b>${val.codigo_representante_ventas}</p>


                        </div>
                    </div>
                </div>
            `
        })
    }

    // 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

    
    async getAllClientsAndRepresentSalesPaymentsDesing() {
        let data = await getAllClientsAndRepresentSalesPayments()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes con pagos Y representante de ventas </div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo_cliente: </b>${val.codigo_pago_cliente}</p>
                            <p><b>Nombre_cliente: </b>${val.nombre_cliente}</p>
                            <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
                            <p><b>Apellido_representante: </b>${val.apellido_representante}</p>
                            <p><b>Codigo_representante: </b>${val.codigo_representante_ventas}</p>


                        </div>
                    </div>
                </div>
            `
        })
    }

    // 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

    async getAllClientsAndRepresentSalesNotPaymentsDesing() {
        let data = await getAllClientsAndRepresentSalesNotPayments()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes SIN pagos Y representante de ventas </div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${val.codigo_cliente}</p>                   
                        <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
                         <p><b>Apellido_representante: </b>${val.apellido_representante}</p>
                         <p><b>Codigo_representante: </b>${val.codigo_representante_ventas}</p>


                        </div>
                    </div>
                </div>
            `
        })
    }

    // 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

    async getAllClientsAndRepresentSalesandofficeAndPayDesing() {
        let data = await getAllClientsAndRepresentSalesandofficeAndPay()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes-pagos - oficinas y representantes  </div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre_cliente: </b>${val.nombre_cliente}</p>
                         <p><b>Nombre_representante: </b>${val.nombre_representate}</p>
                         <p><b>Ciudad_oficina_representante: </b>${val.ciudad_oficina_representante}</p>


                        </div>
                    </div>
                </div>
            `
        })
    }

















static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing() //1
        if(name=="logic" && now=="office_2") this.getAllOfficesFromSpainCityAndMovilDesing() //2
        if(name=="logic" && now=="employe_1") this.getAllEmployeesWithBossAndCodeSevenDesing()//3
        if(name=="logic" && now=="employe_2") this.getBossFullNameAndEmailDesing() //4
        if(name=="logic" && now=="employe_3") this.getAllDesing() //5
        if(name=="logic" && now=="client_1") this.getClientsFromSpainDesing() //6
        if(name=="logic" && now=="request_1") this.orderStatusListDesing() //7
        if(name=="logic" && now=="payment_1") this.customerPaymentCode2008Desing() //8
        if(name=="logic" && now=="request_2") this.getAllCodeRequestLateDesing() //9
        if(name=="logic" && now=="request_3") this.getAllEarlyCodeRequestDesing() //10
        if(name=="logic" && now=="request_4") this.getAllRejected2009Desing() //11
        if(name=="logic" && now=="request_5") this.getAllDeliveredJanuaryDesing() //12
        if(name=="logic" && now=="payment_2") this.getAllPaymentsPaypal2008Desing() //13
        if(name=="logic" && now=="payment_3") this.getAllPaymentsMethodsDesing() //14
        if(name=="logic" && now=="product_1") this.getAllGamaOrnamentalesDesing() //15
        if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16

        //MULTITABLAS
        if(name=="logic" && now=="client_3") this.getAllClientsAndRepresentSalesDesing() //17
        if(name=="logic" && now=="client_4") this.getAllClientsAndRepresentSalesPaymentsDesing() //18
        if(name=="logic" && now=="client_5") this.getAllClientsAndRepresentSalesNotPaymentsDesing() //19
        if(name=="logic" && now=="client_6") this.getAllClientsAndRepresentSalesandofficeAndPayDesing() //20
        // if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16
        // if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16
        // if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16
        // if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16
        // if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16
        // if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16
        // if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16
        // if(name=="logic" && now=="client_2") this.getAllClientsMadrid1130Desing() //16
        
    
    
    
    
    
    }}