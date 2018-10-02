
(function(){
    'use strict'
    //problem 1 using ES6 feature
    const uniArr = [4,1,5,7,2,3,1,4,6,5,2];
    console.log(`Original Array ${uniArr}`);
    const dupArr = removeDups(uniArr);
    console.log("Removing duplicates by ES6");
    console.log(`Unique Array ${dupArr}`);

    function removeDups(arr){
        return [...new Set(arr)];
    }
    // problem 1 using promises
    var removeDupsPromise = function(data){
        return new Promise((resolve, reject) => {
            resolve([...new Set(data)]);
            reject(new Error("Operation failed"));
        });
    }
   
    removeDupsPromise([4,1,5,7,2,3,1,4,6,5,2])
    .then(data => {
        console.log("Removing duplicates by promises...");
        console.log(`Unique Array ${data}`)
    })
    .catch((error) => console.log(error));

    //problem 1 using async/await
    async function removeDupsAsync(data){
        try{
            let result = await removeDupsPromise(data)
            console.log("Removing duplicates by async/await...")
            console.log(`Unique Array ${result}`);
        }
        catch(error){
            console.log("error");
        }
    }
    removeDupsAsync([4,1,5,7,2,3,1,4,6,5,2]);

    //problem 1 using observable
    const {from} = rxjs;
   
    from(removeDupsPromise([4,1,5,7,2,3,1,4,6,5,2])).subscribe((data=>
        {
            console.log("Removing duplicates by observable...")
           console.log(`Unique Array ${data}`);
        }));
    
    //problem 2
    function isWeekend(){
      //  debugger;
        const todayDate = new Date();
        const day = todayDate.getDay();
        return (day ==0 || day ==6)?"weekend":"weekday";
    }
    console.log(isWeekend());
})();


