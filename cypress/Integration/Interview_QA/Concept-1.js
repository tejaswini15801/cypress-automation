//Question - 

const person = {
    name : "John",
    age : "25",
    greet : function(){
        console.log("Hello, my name is " + this.name);
    }

}

//how to call this function
person.greet(); // person is object and great is a method/property of that object