import{getAllOfficesCodeAndCity,getAllOfficesFromSpainCityAndMovil} from "../module/offices.js"
import {getAllEmployeesWithBossAndCodeSeven, getBossFullNameAndEmail,getAll}  from "../module/employees.js"




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



static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="office_1") this.getAllOfficesCodeAndCityDesing() //1
        if(name=="logic" && now=="office_2") this.getAllOfficesFromSpainCityAndMovilDesing() //2
        if(name=="logic" && now=="employe_1") this.getAllEmployeesWithBossAndCodeSevenDesing()//3
        if(name=="logic" && now=="employe_2") this.getBossFullNameAndEmailDesing() //4
        if(name=="logic" && now=="employe_3") this.getAllDesing() //5
        
    
    
    
    
    
    
    }}