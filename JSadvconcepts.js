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
            let success = false;
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


//Prototypal Inheritance

function Person(name){
    this.name = name ;
}
 Person.prototype.greet = function (){
    console.log(`Hello my name is ${this.name}`)
}

let p1 = new Person('Tushar');

p1.greet()
 

//THIS and binding context

const car = {
    company : "toyota",
    drive() {
        console.log(`I drive a ${this.company}`)
    }
 }

car.drive();

const unbindedDrive = car.drive;
unbindedDrive();

const bindedDrive= car.drive.bind({company: "Maruti"});
bindedDrive();


//Aync-await and Promise all
function fetchUserData (){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve ({name : "MOJITO", url : "https://MOJITO.com"})
        }, 3000)
    });
}

async function getUserData() {
    try {
        console.log(`fetching user data.....`);
        const userData = await fetchUserData();
        console.log("User data fetched succesfully");
        
        console.log("UserData:",userData);
    } catch (error) {
        console.log(`Error fetching data`,error);
    }
}
getUserData();

//

function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Post data fetched')
        }, 3500);
    });
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Comment Data fetched')
        }, 3500);
    });
}
async function getBlogData(){
    try {
        console.log("fetchiing blog data")
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()])
        console.log(postData);
        console.log(commentData);
        console.log("Data fetched complete")
    } catch (error) {
        console,log('Error fetching blog data', error )
    }
}
getBlogData()

//Iterator and generators in javascript

function* numberGenrator(){
    yield 1;
    yield 2;
    yield 3;  
}
 let gen = numberGenrator()

 console.log(gen.next().value);
 console.log(gen.next().value);
 console.log(gen.next().value);

