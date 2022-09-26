# JavaScript_Object_Info
JavaScript Object leraning. 

What is object 

  JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value.
  
  A property's value can be a function/array/string/boolean/object/number etc.
  
  In JavaScript, an object is a standalone entity, with properties and type. Compare it with a car, for example. A car is an object, with properties. A car has a color, a design, weight, mileage, oilType, function, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.
  
  let's create an object named myCar and give it properties
  
  #1. How to create a object we create a blank object and assign to key and value as a variable like this.
```
  const myCar = new Object();
        myCar.make = 'Maruti Brezza';
        myCar.model = 'Maruti';
        myCar.year = 2022;
        myCar.mileage = 20.6;
        myCar.seats = 5;
```

  #2. Create a object in direct 
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

#3. Properties of JavaScript objects can also be accessed or set using a bracket notation like this.
      
      
```
        myCar['make'] = 'Maruti Brezza';
        myCar['model'] = 'Maruti';
        myCar['year'] = 2022;
        myCar['mileage'] = 20.6;
        myCar['seats'] = 5;
```
   
#4. in object you can assing a string/number/array/function/object like this.
      
      
      
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
   
   
