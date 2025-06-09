package com.project.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.crud.model.Employeedata;
import com.project.crud.services.EmpService;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class EmpController {
     
   // Service service = new ServiceImpl();
    //Dependency injection
     @Autowired
    private EmpService service;

  @GetMapping("/employees")
  public List<Employeedata> getAllEmployeedata(){
   return service.readEmployeedatas();
  }

   @GetMapping("/employees/{id}")
  public Employeedata getEmployeeById(@PathVariable Long id){
   return service.readEmployeedata(id);
  }


 @PostMapping ("/employees")
  public String createData(@RequestBody Employeedata employeedata){
       // data.add(dataperson1);
      return service.create(employeedata);
        
    }

    @DeleteMapping("/employees/{id}")
    public String deleteData (@PathVariable Long id){
        if(service.deleteEmployeedata(id)){
            return "Deleted successfully";
        }
        else{
            return "Data not found";
        }
    }

    @PutMapping("/employees/{id}")
    public String updateData(@PathVariable Long id, @RequestBody Employeedata employeedata){
        return service.updateEmployeedata(id, employeedata);
    }
    
}
