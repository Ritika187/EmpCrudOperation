import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const Employeelist = () => {
    const [loading, setLoading] = useState(true);
    const [Employees, setEmployees] = useState(null);

    useEffect(() =>{
      const fetchData =async () => {
        setLoading(true);
        try{
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        }
        catch(error){
            console.log(error);
            
        }
        setLoading(false);
      };
      fetchData();
    },[]);

    const deleteEmployee = (e, id) =>{
     e.preventDefault();
     EmployeeService.deleteEmployeeById(id)
         .then(()=>{
            if(Employees){
           setEmployees((prevElement) => {
            return prevElement.filter((Employee)=>Employee.id!==id);
         })
        }
         })
    };

    const editEmployee = (e,id)=>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`)
    };
    const navigate = useNavigate();
    return (
        <div className='container mx-auto my-8'>
            <div>
                <button
                onClick={()=> navigate('/addemployee')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold mx-64 my-6 py-2 px-10 rounded-xl shadow-purple-500/40 shadow-lg transition duration-300">Add Employee 👨🏼‍💻</button>
            </div>

            <div className='mx-64 rounded-xl'>
                <table className="shadow-lg text-center">
                    <thead className="bg-purple-600 text-white font-semibold">
                        <tr >
                            <th className='px-5 py-2 uppercase tracking-wide >FirstName'>FirstName</th>
                            <th className='px-5 py-2 uppercase tracking-wide >FirstName'>LastName</th>
                            <th className='px-5 py-2 uppercase tracking-wide >FirstName'>Email</th>
                            <th className='px-5 py-2 uppercase tracking-wide >FirstName'>PhoneNumber</th>
                            <th className='px-5 py-2 uppercase tracking-wide >FirstName'>Action</th>


                        </tr>
                    </thead>
                    {!loading && (
                    <tbody className="bg-white/15 text-slate-800">
                    {Employees.map((Employee)=>(
                        <tr key={Employee.id} className="hover:bg-purple-200 hover:text-black">
                            <td className='whitespace-nowrap' >{Employee.firstName}</td>
                            <td className='whitespace-nowrap' >{Employee.lastName}</td>
                            <td className='whitespace-nowrap' >{Employee.email}</td>
                            <td className='whitespace-nowrap' >{Employee.phoneNumber}</td>
                           <td className='whitespace-nowrap space-x-2' >
                                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg transition duration-200"
                                onClick={(e,id)=> editEmployee(e, Employee.id)}>Edit</button>

                                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg transition duration-200"
                                onClick={(e,id)=> deleteEmployee(e, Employee.id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}

export default Employeelist;