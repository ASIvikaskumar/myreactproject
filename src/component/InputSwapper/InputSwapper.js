import React, { useState } from 'react';
import './inputSwapper.scss';

const InputSwapper = () => {
    const [inputFieldFirst, setInputFieldFirst] = useState('');
    const [inputFieldSecond, setInputFieldSecond] = useState('');

    const _handleButtonOne = () => {       

            setInputFieldSecond(inputFieldFirst);
            setInputFieldFirst('');
            
    };

    const _handleButtonTwo = () => {      

            setInputFieldFirst(inputFieldSecond);
            setInputFieldSecond('');
        
    };

  return (
    <div className='mainContainer'>
       

    <div className='containerFirst'>
        <label>Data First :-</label>
        <input 
        type="text"
        value= {inputFieldFirst}
        onChange={(e) => setInputFieldFirst(e.target.value)}/>
        <button className='btnFirst' onClick={_handleButtonOne}>Submit One</button>
            
    </div>
    <div className='containerSecond'>
        <label>Data Second :-</label>
        <input 
        type ="text"
        value = {inputFieldSecond}
        onChange={(e) => setInputFieldSecond(e.target.value)}/>

        <button className='btnSecond' onClick={_handleButtonTwo}>Submit Two</button>

    </div>
        </div>
  )
}

export default InputSwapper;
