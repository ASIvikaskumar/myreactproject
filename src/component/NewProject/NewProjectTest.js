import React, { useState } from 'react';
import './newProject.scss';

const NewProjectTest = () => {
    const [tasks, setTasks] = useState([]);  // Array to store tasks....
    const [inputValue, setInputValue] = useState(''); // Input value....

    // Add a task to the list
    const _addTask = () => {
        if(inputValue) {
            setTasks([...tasks, inputValue]);  //  Add new task to the array
            setInputValue(''); // clear input...
        }else{alert('Please Enter Valid Value!');}
    };


    //Delete a task from the list

    const _deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index)); //Remove the selected task
    };


    return(
        <div className='mainContainer'>
            <h2>To-Do List</h2>
            <div>
                <input 
                className='inputContainer'
                type='text'
                value = {inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Add a task'/>
                
                <button className='addBtn' onClick={_addTask}>Add</button>
            </div>

            <ul className='ulContainer'>
                {tasks.map((task, index) => (
                    <li className='liContainer' key={index}>
                        <span>{task}</span>
                        <button  className='delBtn'  onClick={() => _deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default NewProjectTest;

// import React from 'react';

const NewProjectTest = () => {
  return (
    <div>
      
    </div>
  )
}

export default NewProjectTest



