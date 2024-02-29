import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MakeTodos } from './components/MakeTodos'
import { Todos } from './components/Todos'
function App() {
  const [todo, setTodo] = useState([])

  
  useEffect(()=>{

    fetch('http://localhost:3000/todos').then(async(data)=>{
      let datas =  await data.json()
      console.log(datas.msg)
      setTodo(datas.msg)
    })
      

   
  },[])

  return (
    <>
      <div className='container'>

      <MakeTodos></MakeTodos>
      <Todos todos={todo}></Todos>

     
       </div>
    </>
  )
}

export default App
