const dns = require("dns");
const {from} = require("rxjs");

dns.resolve4("www.mum.edu",(err,address)=>{
    console.log(`${address}`);
});

//using promise
const convertDomainToIPByPromise =  url => {
    return new Promise(function(resolve, reject){
        dns.resolve4(url,(err,address)=>{
            if(typeof address != "undefined")
            resolve(`${address}`);
            else{
            reject(new Error(err));
            }
        });
    })

}

convertDomainToIPByPromise("www.mum.edu")
    .then(data=>console.log(data))
    .catch(err=>console.log(err));

//using async
const convertDomainToIPByAsyncAwait = async url => {
    try{
        let result =await convertDomainToIPByPromise(url)
        console.log(result)
    }
    catch(error){
        console.log(error);
    }
}

convertDomainToIPByAsyncAwait("www.mum.edu");


//by Observables
from(convertDomainToIPByPromise("www.mum.edu")).subscribe(data =>{console.log(data)});

