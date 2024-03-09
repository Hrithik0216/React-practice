import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Login from './features/login/Login';
import Profile from './features/profile/Profile';

// let input = "   Subscribe   "
// let tr = input.trim()
// let j = "<div>" + tr + "<div/>"
// console.log(j)

// const Trim = (input) => input.trim()
// const join = (input) => `<div>${input}<div/>`
// const toLowerCase = (input) => input.toLowerCase()

// const result = join(toLowerCase(Trim(input)));
// console.log("result: " + result)
// //use Lodash library to pipe/compose the nested functions 

// function add(a) {
//   return function (b) {
//     return a + b
//   }
// }
// console.log(add(3)(4))

// const person1 = {
//   name: "Hrithik",
//   address: {
//     city: "coimbatore",
//     state: "Tamilnadu"
//   }
// }
// const person2 = {
//   ...person1,name:"Arun",address:{
//     ...person1.address,
//     city:"chennai"
//   }
// }
// console.log("person1: " + JSON.stringify(person1))
// console.log("person2: " + JSON.stringify(person2))

function App() {
  return (
    <div className="App">
      <Counter/>
      <Profile/>
      <Login/>
    </div>
  );
}

export default App;
