// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe 
// tiene un código de jefe igual a 7.
export const getAllEmployeesWithBossAndCodeSeven = async() =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email
        });
    });
    return dataUpdate;
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la 
// empresa.
export const getBossFullNameAndEmail = async()=>{
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let dataUpdate = {};
    data.forEach(val => {
        if(val.code_boss == null){
            dataUpdate.puesto=val.position
            dataUpdate.nombre = val.name
            dataUpdate.apellidos = `${val.lastname1} ${val.lastname2}`
            dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    });
    return dataUpdate;
}
//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados 
// que no sean representantes de ventas.
export const getAll = async()=>{
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position
        })
    });
    return dataUpdate;
}

//multitabla
/*1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
--solucion 1.1(employees), 1.2 (clients)*/

export const getAllNameRepresentSales= async ()=>{
    let res= await fetch("http://localhost:5502/employees?position=Representante%20Ventas")
    let data= await res.json();
    let dataUpdate=[];
    data.forEach(val=>{
        dataUpdate.push({
            nombre_cliente: val.client_name,
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position,
            codigo: val.employee_code,
            codigo_oficina: val.code_office,


        });
    });
    return dataUpdate
}


// 8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getAllEmployeesWithBoss = async() => {
    let res = await fetch("http://localhost:5502/employees")
    let dataEmployees = await res.json()
    let dataUpdate = []

    for (let employee of dataEmployees) {
        for (let boss of dataEmployees) {
            if (employee.code_boss == boss.employee_code) {
                dataUpdate.push({
                    employee_name: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
                    boss_name: `${boss.name} ${boss.lastname1} ${boss.lastname2}`
                })
            }
        }
    }
    return dataUpdate
}

//9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.

export const getAllEmployeesWithBossAndBoss = async() => {
    let res = await fetch("http://localhost:5502/employees")
    let dataEmployees = await res.json()
    let dataUpdate = []

    for (let employee of dataEmployees) {
        for (let boss of dataEmployees) {
            if (employee.code_boss == boss.employee_code) {
                for (let bigBoss of dataEmployees){
                    if (boss.code_boss == bigBoss.employee_code){
                        dataUpdate.push({
                            nombre_empleado: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
                            nombre_bigBoss: `${boss.name} ${boss.lastname1} ${boss.lastname2}`,
                            nombre_bigBoss_bigBoss: `${bigBoss.name} ${bigBoss.lastname1} ${bigBoss.lastname2}`
                        })
                    }
                }
            }
        }
    }
    return dataUpdate
}
//TABLAS EXTERNAS
// 4.Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada

export const getAllEmployeesWithoutOffice = async() => {
    let res = await fetch("http://localhost:5502/employees")
    let dataEmployees = await res.json()
    let dataUpdate = []

    for (let employee of dataEmployees) {
        if (employee.code_office == null) {
            dataUpdate.push({
                nombre: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
                puesto: employee.position
            })
        }
    }
    return dataUpdate
}