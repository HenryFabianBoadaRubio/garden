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
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position,
            codigo: val.employee_code,


        });
    });
    return dataUpdate
}