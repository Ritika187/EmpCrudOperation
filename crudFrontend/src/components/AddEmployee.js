import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const AddEmployee = () => {
  const [Employee, setEmployee] = useState({
    "id": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "phoneNumber": ""
  });

  const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({...Employee, [e.target.name]: value}); 
  }

  const saveEmployee = (e) =>{
    e.preventDefault();
    EmployeeService.saveEmployee(Employee)
    .then((response)=>{
      console.log("saved",response);
      navigate("/");
    })
    .catch((error)=>{
      console.log(error);
    }
    )
  }

  const reset =(e) =>{
    e.preventDefault();
    setEmployee({
      "id": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "phoneNumber": ""
    });
  }
  const navigate = useNavigate();
  return (
    <div className='max-w-xl bg-slate-800 my-20 rounded shadow py-4 px-8  mx-auto'>
        <div className='flex items-center justify-center font-bold text-xl mb-6'>
            <p className=''>Add 👨🏼‍💻New Employee</p>
        </div>
        
        <div className='mx-10 my-2 flex flex-col gap-4'>
              <input type='text' name='firstName' 
               onChange={(e) => handleChange(e)}
               value={Employee.firstName}
               className=' py-1 my-2 text-slate-800 rounded' placeholder='FirstName'></input>

              <input type='text' name='lastName'
               onChange={(e) => handleChange(e)}
               value={Employee.lastName}
                className='py-1 my-2 text-slate-800 rounded' placeholder='LastName'></input>

              <input type='email' name='email'
               onChange={(e) => handleChange(e)}
               value={Employee.email}
                className='py-1 my-2 text-slate-800 rounded' placeholder='Email'></input>

              <input type='number' name='phoneNumber'
              onChange={(e) => handleChange(e)}
              value={Employee.phoneNumber}
              className='py-1my-2 text-slate-800 rounded' placeholder='Phonenumber'></input>
        </div>
        <div className='flex items-center justify-center gap-4 mt-6'>
              <button 
              onClick={saveEmployee}
              className='bg-green-400 hover:bg-green-700 py-1 px-3 rounded-lg'>Save</button>
              <button
              onClick={(e) => reset(e)}
              className='bg-blue-400 hover:bg-blue-700 py-1 px-3 rounded-lg'>Clear</button>
              <button 
              onClick={()=> navigate('/')}
              className='bg-red-400 hover:bg-red-700 py-1 px-3 rounded-lg'>Cancel</button>
        </div>
        
    </div>
  )
}

export default AddEmployee