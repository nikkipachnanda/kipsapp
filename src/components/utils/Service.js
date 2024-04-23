import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://anandapublishers--sampuat.sandbox.my.salesforce.com/services/data/v52.0/composite/sobjects',
});

const data = {
    "allOrNone": false,
    "records": [
        {
            "attributes": {
                "type": "Kips_PJP_Weekly_Plan__c"
            },
            "Kips_Week_Start_date__c": "2024-04-25",
            "Kips_Status__c": "Drafted"
        }
    ]
};

const headers = {
    'Authorization': 'Bearer 00D0T0000008m3G!AQEAQFLTI.kdy_ZSiZ3_4FhBilLiXuPkEgzxkNf5ROCXHtr9ngoFO6TafgwEW1gu4LAsMo1cDrjJW6ZQtBwvXkkTYngJbrIJ',
    'Content-Type': 'application/json' // Adjust content type if necessary
};

export const postAWP = (data) => apiClient.post('', data, { headers });

