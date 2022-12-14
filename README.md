# JavaScript_Object_Info
JavaScript Object leraning. 

What is object 

  JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value.
  
  A property's value can be a function/array/string/boolean/object/number etc.
  
  In JavaScript, an object is a standalone entity, with properties and type. Compare it with a car, for example. A car is an object, with properties. A car has a color, a design, weight, mileage, oilType, function, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.
  
  let's create an object named myCar and give it properties
  
  **#1**. How to create a object we create a blank object and assign to key and value as a variable like this.
```
  const myCar = new Object();
        myCar.make = 'Maruti Brezza';
        myCar.model = 'Maruti';
        myCar.year = 2022;
        myCar.mileage = 20.6;
        myCar.seats = 5;
```

  **#2**. Create a object in direct 
 ```
        const myCar = {
          make: 'Maruti Brezza',
          model: 'Maruti',
          year: 2022,
          mileage:  20.6,
          seats: 5
        };
```

if you Unassigned properties of an object then it's by default show to  undefined  like this 
 
```
        myCar.price //  it's show to undefined
```

**#3**. Properties of JavaScript objects can also be accessed or set using a bracket notation like this.
      
      
```
        myCar['make'] = 'Maruti Brezza';
        myCar['model'] = 'Maruti';
        myCar['year'] = 2022;
        myCar['mileage'] = 20.6;
        myCar['seats'] = 5;
```
   
**#4**. in object you can assing a string/number/array/function/object like this.
      
      
      
```
         // six variables are created and assigned in a single go,
          // separated by commas
        const carObj = {},
          str='Maruti Brezza',
          nub=2022,
          array=[12,13,14,15],
          fun=()=>{return 'best of car'},
          rand= Math.random(),
          obj= {} // blank object
        
        
        // Now, creating additional properties.
        
        carObj.type              =  'Dot syntax for a key named type';
        carObj['date created']   =  'This key has a space';
        carObj[nub]              =  'This key has a number';
        carObj[array]            =  'This key has a array';
        carObj[fun]              =  'This key has a function';
        carObj[str]              =   'This key is in variable str';
        carObj[rand]             =    'A random number is the key here';
        carObj[obj]              =    'This key is object obj';
        carObj['']               =    'This key is an empty string';
        
        
        console.log(carObj);
        /*
            "" : "This key is an empty string" 
            0.13389161767770918 : "A random number is the key here" 
            12,13,14,15 : "This key has a array" 
            2022 : "This key has a number" 
            ()=>{return 'best of car'} : "This key has a function" 
            Maruti Brezza : "This key is in variable str" 
            [object Object] : "This key is object obj" 
            date created : "This key has a space" 
            type : "Dot syntax for a key named type"
        */
        
        // notice that in the log, the order of the properties listed is not the same as the order they were created.
        
        
        
 ```
   
   **Access to objects**
```
console.log(carObj['type'])  // Dot syntax for a key named type
console.log(carObj.type)    // Dot syntax for a key named type
console.log(carObj['date created'])  //  This key has a space
```
   
**#5**. Using a constructor function . Here are we used to two type first we create a constructor function and after that Create an instance of the object with new   like this.

```
function CarObj(make, model, year, mileage, seats) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  this.seats = seats;
}

// Now you can create an object called myCarObj as follows:
const myCarObj = new CarObj('Maruti Brezza', 'Maruti', 2022, 20.6, 5);

// You can create any number of CarObj objects by calls to new. For example,
const swiftCar = new CarObj('Maruti Swift LXI', 'Maruti', 2019, 22.6, 5);
const vernaCar = new CarObj('Hyundai Verna', 'Hyundai', 2021, 21, 5);
const jeepCar = new CarObj('Jeep Compass', 'Jeep', 2020, 17.2, 5);

```


**#6** Using Object.create() to create new objects

```
      //The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
      //To understand the Object.create method, just remember that it takes two parameters. The first parameter is a mandatory object that serves as the prototype of the new object to be created. The second parameter is an optional object which contains the properties to be added to the new object.


      const companyObject = { company: 'Google Inc' };

      const emp = Object.create(companyObject, { name: { value: 'emp first' } });

      console.log(companyObject) // {company: "Google Inc"}
      console.log(emp.name) // emp first
```

**#7** Using Object.assign() to create new objects

```
      // What if we want to create an object that needs to have properties from more than one object? Object.assign() comes to our help.
      // Assume you have two objects as below:
      const comNameObject = { company: 'Google Inc' };
      const comAddObject = { office: 'USA ' };
      
      const companyDetails = Object.assign({}, comNameObject, comAddObject);
      
      console.log(companyDetails); // { company: "Google Inc", office: "USA" }
```

**#8**. using es6 classes

```
class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

const person = new Person('Rohit', 'Azad');

console.log(person.firstName); // Rohit
console.log(person.lastName); // Azad
```

**#9**. Now learn to. Object.freeze() function 
```
// The Object.freeze() method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability,
// writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

const emp = {name:'Rohit Azad', age:35}
Object.freeze(emp);
emp.age = 30;
emp.add = 'Delhi India';

console.log(emp) //  {name:'Rohit Azad', age:35}

// here you see that emp object is not add any more property and not. edit any property.

```


#10 Now learn about Object.keys() function


```
    //The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
    const emp = {name:'Rohit Azad', age:35}
    console.log(Object.keys(emp)); // expected output: Array ['name', 'age']

```

#11 Now learn about Object.values() function


```
    // The Object.values() method returns an array of a given object's own enumerable property values
      const emp = {name:'Rohit Azad', age:35}
    console.log(Object.values(emp)); // expected output: Array ['Rohit Azad', 35]
```


**More about Object Properties** :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object



#**12 **how to copy objects in JavaScript ?

**Copy Objects in JavaScript **

we used to **3** way 

Use the **spread (...)** syntax

Use the **Object.assign()** method

Use the **JSON.stringify()** and **JSON.parse()** methods

```
      const emp = {name:'Rohit Azad', age:35}
      const newEmp = emp;
      newEmp.age = 45;
      
      
      console.log('emp', emp);
      console.log('newEmp', newEmp);
      // check result to this 
      // you can see values are still connected to the  object key.
```


Solution of this we used to 3 way 
#**12** - a). spread (...) syntax

```
    const emp = {name:'Rohit Azad', age:35}
    const newEmp = {...emp};
    newEmp.age = 45;
    
      console.log('emp', emp);
      console.log('newEmp', newEmp);
    // your problum is solved to this way
    // it's called to Shallow copy
```

#12 - b). **Object.assign()** method 


```
   // using  Object.assign() method
    const emp = {name:'Rohit Azad', age:35}
    const newEmp = Object.assign({}, emp);
    newEmp.age = 45;
    
      console.log('emp', emp);
      console.log('newEmp', newEmp);
    // your problum is solved to this way
    // it's called to Shallow copy
```


#12 - c).  check with deep copy 

```
       const emp = {
            name:'Rohit Azad',
            age:35,
            address:{
              office:{
                state:'Delhi',
                city:'Delhi',
                country : 'India'
              },
              home:{
                state:'New Delhi',
                city:'New Delhi',
                country : 'India'
              }
            }
          }
          // now copy to this obj to another obj
          
          const emp_2 = {...emp} // with spread (...)
          const emp_3 = Object.assign({}, emp); // with object with assign function 
          
          // now change some value in both objects
          
          emp_2.address.home.state = 'Gurugram';
          emp_3.address.home.city = 'Noida';
          emp.address.home.country = 'USA';
          
          console.log('emp', emp);
          console.log('emp_2', emp_2);
          console.log('emp_3', emp_3);
          // cehck to result and thing how do this. ????
```


#12 - d).  check with deep copy  solution


```
       const emp = {
            name:'Rohit Azad',
            age:35,
            address:{
              office:{
                state:'Delhi',
                city:'Delhi',
                country : 'India'
              },
              home:{
                state:'New Delhi',
                city:'New Delhi',
                country : 'India'
              }
            }
          }
          // now copy to this obj to another obj
          
          const emp_2 = JSON.parse(JSON.stringify(emp));
          const emp_3 = JSON.parse(JSON.stringify(emp));
          
          // now change some value in both objects
          
          emp_2.address.home.state = 'Gurugram';
          emp_3.address.home.city = 'Noida';
          emp.address.home.country = 'USA';
          
          console.log('emp', emp);
          console.log('emp_2', emp_2);
          console.log('emp_3', emp_3);
          // cehck to result now your problum is solved.
```

