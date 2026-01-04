// Asynchronous Javascript with event loop

console.log("hello 1");         

setTimeout(() => {              //this is a time function.
    console.log("hello 2");
}, 1000);                       // it take 1 sec to execute.

console.log("hello 3");

//Closures funtion (I need to learn about them a bit more)

function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    } 
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

//Promises and promise chaining

function fetchData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data fetched successfully");
            }else{
                reject("Error fetching Data");
            }
        }, 2000);
    });
}

fetchData()
    .then((data) => {console.log(data)})
    .catch((error) =>{console.error(error)})

    