import { useState } from "react"
function App() {

  const [age,setage] = useState(20);
  const fullName = "mohd afnaan"
  const [hobbies,setHobbies] = useState(["football","cricket"]);
  function incAge(){
    setage(age + 1);
  }
  function decAge(){
    setage(age - 1);
  }

  


  return (
    


    
    <>
    <h1 className="text-center text-4xl mt-2.5 font-bold">My details</h1>
    <p className="bg-amber-500 text-center mt-2.5 ">fullName : {fullName} </p>
    <p className="bg-amber-500 text-center mt-2.5 ">Age : {age}  </p>
    <p className="bg-amber-500 text-center mt-2.5 ">Status : {age >=18  ? "Adult" : "minor" }  </p>

      {
        hobbies.map((x,i)=>(
          <p
           className="bg-amber-500 text-center mt-2.5 "
           key={i}
          >my hobby : {x}</p>
        )
      )
      }
    <div className="text-center">

      {age >=20 && <p className="bg-amber-500 text-center mt-2.5 ">senior citizen</p>}

    <button
      onClick={incAge}
      className="bg-green-500 text-white p-2 m-2 rounded-2xl text-center cursor-pointer "
    >Increase age</button>
    <button
      onClick={decAge}
      className="bg-red-500 text-white p-2 m-2 rounded-2xl text-center cursor-pointer"
    >decrease age</button>


    </div>
    </>
  )
}

export default App
