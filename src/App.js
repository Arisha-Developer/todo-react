import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [inputList, setInputList] = useState("")
  let [items, setItems] = useState([])

  //Render Items
  
  const listOfItems = (e) => {
    e.preventDefault(); 
    console.log('handleSubmit ran');
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")
  }

  //Delete Items
  
  const deleteTodo=(todoIndex)=>{
    const dltTodo=[...items]
    console.log(todoIndex)
    dltTodo.splice(todoIndex,1)
    setItems(dltTodo)
  }
//   const setEdit=()=>{
//   if(inputList){ 
//     return (
//       <form onSubmit={(event) => handleSubmit(event)}>
//           <input
//               className="input"
//               value={newItem}
//               onChange={(e) => setNewItem(e.target.value)}
//               placeholder="Edit your list"
//            />
//       </form>
//    )
//   }
// }
  return (
    <div className="App">
      <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>

      <div className='main'>
        <h1 className='todo_head'>Todo List</h1>
        <input
         placeholder='Write your todo'
         onChange={e => setInputList(e.target.value)}
          // onChange={addEvent}
          value={inputList}>
          </input>
        <button className='add_todo' onClick={listOfItems}>Add</button>
      </div>
      <div>

      </div>
      <div>
        <ul >
          
          {items.map((itemVal,index) => {
            return <li >{itemVal}</li>
         
          })}
         </ul>
         <div className='btn_div'>
          <button onClick={deleteTodo} >Delete</button>
          {/* <button className="edit-icon" onClick={() => setEdit(true)}></button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
