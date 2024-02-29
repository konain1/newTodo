import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MakeTodos } from './components/MakeTodos'

function App() {
  const [todo, setTodo] = useState([])

  
  // useEffect(()=>{

  //   fetch('http://localhost:3000/todos').then((data)=>{
  //     let datas = data.json()
  //     return datas;
  //   }).then((json)=>{
  //     setTodo(json)

  //   })
  // },[])

  return (
    <>
      <div className='container'>

      <MakeTodos></MakeTodos>

     
       </div>
    </>
  )
}

export default App
