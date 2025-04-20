import React, { useState } from 'react';
import styles from './PracticeForm.module.css';

const PracticeForm = () => {

    let[formData,setFormData]=useState({



    });

    function handleChange(event){

      const{name,value}=event.target;

      setFormData((prev)=>({

        ...prev,
        [name]:value,

      }));


    }


    function handleSubmit(event){

        event.preventDefault();


    }
  return (
    <>
    <div className={styles.title}>PracticeForm</div>
    <div>
        Creating a SignUp Form
    </div>
    <form onSubmit={handleSubmit} >
      <div>
        Name:<input type='text' name='name' onChange={handleChange}  />
      </div>
      <div>
        City:<input type='text' name='city' onChange={handleChange} />
      </div>
      <div>
        Age:<input type='text' name='age' onChange={handleChange} />
      </div>
      <div>

      </div>
      <div>
        Select Subject:<select>
            <option>--Select--</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Mathematics</option>
            <option>Marathi</option>
            <option>Hindi</option>
        </select>
      </div>
      <div>
       <input type='radio ' />
      </div>
      <div>
        Email:<input type='email' name='email' />
      </div>
      <div>
        Password:<input type='password'  name='password'/>
      </div>
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default PracticeForm