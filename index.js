import { countryList } from "./countries.js";

countryList.map((item,i)=>{
    let Details = `country name is = ${item.name} and code =  ${item.code}`
    console.log(Details);
})