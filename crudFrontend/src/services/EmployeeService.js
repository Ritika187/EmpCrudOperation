import axios from "axios"


const EMPLOYEE_S_API_BASE_URL="http://localhost:9090/employees"
class EmployeeService{
    saveEmployee(Employee){
      return axios.post(EMPLOYEE_S_API_BASE_URL, Employee)
    }

    getEmployees(){
        return axios.get(EMPLOYEE_S_API_BASE_URL);
    }

    getEmployeeById(id){
    return axios.get(EMPLOYEE_S_API_BASE_URL + '/' + id);
}
    
   deleteEmployeeById(id){
    return axios.delete(EMPLOYEE_S_API_BASE_URL + '/'+id);
   }

   updateEmployee(id, Employee){
    return axios.put(EMPLOYEE_S_API_BASE_URL + '/'+ id, Employee);
   }
}

const employeeService = new EmployeeService();
export default employeeService;