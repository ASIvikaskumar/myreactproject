import React, { useState } from 'react';
import './TestProject.scss';


const TestProject = () => {
    const [inputValue, setInputValue] = useState('');    // for input value hold....
    const [dataList, setDataList] = useState([]);        //  for list of entered Data....


    // handle input changes.......
    const _handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    // Add the entered data to the list when submit is clicked....
    const _handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setDataList((prevData) => [...prevData, {id: Date.now(), value: inputValue }]);
            setInputValue('');
        }else{alert("Please enter a valid input!");}
    };


    const _handleDelete = (id) => {
        setDataList((prevData) => prevData.filter((item) => item.id !== id));
    };

    const _handleCheckboxChange = (id) => {
        setDataList((prevData) => 
            prevData.map((item) => 
                item.id === id ? {...item, isChecked: !item.isChecked } : item )
        );
    };




  return (
    <div>
        {/* <h2>Data Entry Form</h2> */}

        {/* //... Input and Submit...// */}

        <form onSubmit = {_handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange = {_handleInputChange}
            placeholder= "Enter data"
            />
            <button type = "submit">Submit</button>            
        </form>


        {/* //... Display list of entered data...// */}
        <ul>
            {dataList.map((item) => (
                <li key ={item.id}>
                    <input 
                    type= "checkbox"
                    checked={item.isChecked}
                    onChange = {() => _handleCheckboxChange(item.id)}                    
                    />

                    <span style ={{ textDecoration: item.isChecked ? 'line-through' : 'none'}}>
                        {item.value}
                    </span>
                    {/* {item.value} */}
                    <button onClick ={() => _handleDelete(item.id)}>Delete</button>

                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default TestProject;
