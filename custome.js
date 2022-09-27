//console.log('Hello JavaScript Object');

// Object 

// var myobj = {name:"rohit"}
// console.log(myobj);



// #1  
// const myCar = new Object();
//         myCar.make = 'Maruti Brezza';
//         myCar.model = 'Maruti';
//         myCar.year = 2022;
//         myCar.mileage = 20.6;
//         myCar.seats = 5;
//     console.log(myCar);





// #2 

// const myCar = {
//     make: 'Maruti Brezza',
//     model: 'Maruti',
//     year: 2022,
//     mileage:  20.6,
//     seats: 5,
//     weight:1500
//   };
// console.log('myCar', myCar);


// const myObj = {
//     name:'Rohit Azad'
// }
// console.log(myObj.age);


// const myCar = {};

//         myCar['make'] = 'Maruti Brezza';
//         myCar['model'] = 'Maruti';
//         myCar['year'] = 2022;
//         myCar['mileage'] = 20.6;
//         myCar['seats'] = 5;

// console.log(myCar);


// const carObj = {}, 
//     str = 'Maruti Brezza', 
//     num = 2022, 
//     array = [12,13,14,15],
//     fun = ()=>{return  'Best of  car'},
//     rand = Math.random(),
//     obj = {}

//     //console.log(array);

//     carObj.type              =  'Dot syntax for a key named type';
//     carObj['date created']   =  'This key has a space';
//     carObj[num]              =  'This key has a number';
//     carObj[array]            =  'This key has a array';
//     carObj[fun]              =  'This key has a function';
//     carObj[str]              =   'This key is in variable str';
//     carObj[rand]             =    'A random number is the key here';
//     carObj[obj]              =    'This key is object obj';
//     carObj['']               =    'This key is an empty string';
    
    
//     console.log(carObj);












// const carObj = {
//     type:'Maruti'
// }
// carObj['date created'] = '2022';
// //console.log(carObj)

// console.log(carObj.type)
// console.log(carObj['type'])
// console.log(carObj['date created'])





// function CarObj(make, model, year, mileage, seats) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.mileage = mileage;
//     this.seats = seats;
//   }

//     const myCarObj = new CarObj('Maruti Brezza', 'Maruti', 2022, 20.6, 5);
//     const swiftCar = new CarObj('Maruti Swift LXI', 'Maruti', 2019, 22.6, 5);
//     const vernaCar = new CarObj('Hyundai Verna', 'Hyundai', 2021, 21, 5);
//     const jeepCar = new CarObj('Jeep Compass', 'Jeep', 2020, 17.2, 5);

//     console.log('myCarObj', myCarObj.make)
//     console.log('swiftCar', swiftCar.seats)
//     console.log('vernaCar', vernaCar.year)
//     console.log('jeepCar', jeepCar.mileage)










// const companyObject = { company: 'Google Inc' };
// const emp = Object.create(companyObject, { name: { value: 'emp first' } });

// console.log(companyObject);
// console.log(emp.name)
// console.log(emp)

















// const comNameObject = { company: 'Google Inc' };
// const comAddObject = { office: 'USA ' };

// const companyDetails = Object.assign({}, comNameObject, comAddObject);

// console.log(companyDetails); 

















// class Person {
//     constructor(fname, lname) {
//       this.firstName = fname;
//       this.lastName = lname;
//     }
//   }

//   const person = new Person('Rohit', 'Azad');

// console.log(person.firstName); // Rohit
// console.log(person.lastName); // Azad














// const emp = {name:'Rohit Azad', age:35}

// Object.freeze(emp);

// emp.age = 30;
// emp.add = 'Delhi India';

// console.log(emp) 











// const emp = {name:'Rohit Azad', age:35}

// console.log(Object.values(emp));











    //   const emp = {name:'Rohit Azad', age:35}
    //   const newEmp = {...emp};
    //         newEmp.name = 'Azad  malik';


    // console.log('emp', emp);
    // console.log('newEmp', newEmp);











    // const emp = {name:'Rohit Azad', age:35}
    // const newEmp = Object.assign({}, emp);
    // newEmp.age = 45;
    // console.log('emp', emp);
    //   console.log('newEmp', newEmp);








    // const emp = {
    //     name:'Rohit Azad',
    //     age:35,
    //     address:{
    //       office:{
    //         state:'Delhi',
    //         city:'Delhi',
    //         country : 'India'
    //       },
    //       home:{
    //         state:'New Delhi',
    //         city:'New Delhi',
    //         country : 'India'
    //       }
    //     }
    //   }



    //   const emp_2 = {...emp}
    //   const emp_3 = Object.assign({}, emp); 

    //   emp_2.address.home.state = 'Gurugram';
    
    //   emp_3.address.home.city = 'Noida';
    
    //   emp.address.home.country = 'USA';

    //   console.log('emp', emp);
    //       console.log('emp_2', emp_2);
    //       console.log('emp_3', emp_3);

















    // const emp = {
    //     name:'Rohit Azad',
    //     age:35,
    //     address:{
    //       office:{
    //         state:'Delhi',
    //         city:'Delhi',
    //         country : 'India'
    //       },
    //       home:{
    //         state:'New Delhi',
    //         city:'New Delhi',
    //         country : 'India'
    //       }
    //     }
    //   }

    //     const emp_2 = JSON.parse(JSON.stringify(emp));
    //     const emp_3 = JSON.parse(JSON.stringify(emp));

    //     emp_2.address.home.state = 'Gurugram';
    //       emp_3.address.home.city = 'Noida';
    //       emp.address.home.country = 'USA';


    //       console.log('emp', emp);
    //       console.log('emp_2', emp_2);
    //       console.log('emp_3', emp_3);