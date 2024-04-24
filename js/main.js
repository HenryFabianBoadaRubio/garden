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
} from "./module/requests.js"

import {
    customerPaymentCode2008,
} from "./module/payments.js"


console.log(await customerPaymentCode2008());

