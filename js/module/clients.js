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

//16.Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.
export const getAllClientsMadrid1130 = async ()=>{
    let res= await fetch("http://localhost:5501/clients?city=Madrid")
    let data= await res.json();
    let dataUpdate=[];
    data.forEach(val=>{
        if(val.code_employee_sales_manager=="11"|| val.code_employee_sales_manager=="30"){
            dataUpdate.push({
                ...val
            })
        }

    });
    return dataUpdate
}


//multitabla
/*1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
--solucion 1.1(employees), 1.2 (clients)*/

import {getAllNameRepresentSales} from "./employees.js"
export const getAllClientsAndRepresentSales= async()=>{
    let res =await fetch("http://localhost:5501/clients")
    let dataClients=await res.json();
    let dataManager= await getAllNameRepresentSales();
    let dataUpdate=[];

    dataClients.forEach(val=>{
        dataManager.forEach(dat=>{
            if(val.code_employee_sales_manager == dat.codigo){
                dataUpdate.push({
                    nombre_cliente: val.client_name,
                    nombre_representate: dat.nombre,
                    apellido_representante: dat.apellidos,
                    codigo_representante_ventas: dat.codigo

                });
            };
        });
    });
            return dataUpdate
    }


