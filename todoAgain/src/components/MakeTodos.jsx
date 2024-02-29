export function MakeTodos () {

  function handlerMakedTodo(){
    alert('running')
  }
  return (
    <>
      <div className='container'>
        <form action='' method='POST'>
          <label>Title</label>
          
          <input type='text' name='title' placeholder='title'></input>
        
          <input
            type='text'
            name='description'
            placeholder='description'
          ></input>
        
          <button type='submit' onClick={handlerMakedTodo} >todo Added</button>
        </form>
      </div>
    </>
  )
}
