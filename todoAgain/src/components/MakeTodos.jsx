import { useState } from "react"

export function MakeTodos () {

  
  // const [title,setTitle] = useState("")
  // const [description,setDescription] = useState("")


  function handlerMakedTodo(){

    fetch('http://localhost:3000/make',{
      method:"POST",
        body:JSON.stringify({
          title:document.getElementById('title').value,
          description:document.getElementById('description').value
        }),
        headers:{
          "content-type":"application/json"
        }
    }).then(async(data)=>{
      let datas = await data.json()
      alert('todo added')
      
    })

    console.log(title)
  }
  
  return (
    <>
      <div className='container'>
        
          <label>Title</label>
          
          <input type='text' name='title' id="title" placeholder='title' onChange={(e)=>{
            setTitle(e.target.value)
          }}></input>
        
          <input
            type='text'
            name='description'
            id="description"
            placeholder='description'
            onChange={(e)=>{
            setDescription(e.target.value)
          }}
          ></input>
        
          <button type='submit' onClick={handlerMakedTodo} >todo Added</button>
       
      </div>
    </>
  )
}
