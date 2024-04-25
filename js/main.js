import { 
    getAllOfficesCodeAndCity, 
    getAllOfficesFromSpainCityAndMovil 
} from "./module/offices.js";

import { 
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAll,
    
} from "./module/employees.js";

import {
    getClientsFromSpain,
    
} from "./module/clients.js"


import {
    orderStatusList,
    getAllCodeRequestLate,
    getAllEarlyCodeRequest,
    getAllRejected2009


} from "./module/requests.js"

import {
    customerPaymentCode2008,
} from "./module/payments.js"


console.log(await getAllRejected2009());

