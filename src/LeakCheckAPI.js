/**
 *
 * 
 * @author fanta#1337
 * @alias ssl#0001
 * 
 * 
 */


let apiKey = "";
let typeOf_Search = "";
let query_requested = "";
const BaseUrl = "https://leakcheck.io/api";
const types = new Map([
    [
        "email", "E-mail"
    ],
    [
        "mass", "E-mail address by keyword"
    ],
    [
        "hash", "E-mail by hash"
    ],
    [
        "pass_email", "E-mail by password"
    ],
    [
        "phash", "E-mail by hashed password"
    ],
    [
        "domain_email", "E-mail by domain"
    ],
    [
        "login", "Username"
    ],
    [
        "phone", "Phone number"
    ],
    [
        "mc", "Minecraft"
    ],
    [
        "pass_login", "Username by password"
    ],
    [
        "pass_phone", "Phone number by password"
    ],
    [
        "auto", "Detect automatically"
    ]
]);


export default class {
    setApiKey(apiKeyParam) {
        apiKey = apiKeyParam;
    }

    setType(typeParam) {
        typeOf_Search = typeParam;
    }

    setQuery(queryParam) {
        query_requested = queryParam;
    }

    async run() { // To stop experimental warning messages from fetch
        const originalEmit = process.emit;
        process.emit = function (name, data, ...args) {
            if (name === `warning` && typeof data === `object` && data.name === `ExperimentalWarning`) {
                return false;
            }
            return originalEmit.apply(process, arguments);
        };


        // Variables
        let typeChosen;


        // Check if the query is undefined
        const undefinedSearch = query_requested == undefined ? true : false;
        if (undefinedSearch) {
            console.log("undefined search")
        }

        /**
         * Check if the search type is existant 
         * When the search type isn't found the type is undefined
         **/

        for (const [key, value] of types) {
            if (typeOf_Search == key) 
                typeChosen = key;
            


        }
        if (typeChosen == undefined && typeOf_Search == undefined) 
            return "Undefined search type!"


        


        // Api Call
        const request = BaseUrl.concat(`?key=${apiKey}`, `&check=${query_requested}`, `&type=${typeChosen}`);

        const response = await fetch(request);
        const body = await response.json();
        return body;

    }
}
