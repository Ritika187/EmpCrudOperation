package com.project.crud.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.crud.entity.Dataentity;
import com.project.crud.model.Employeedata;
import com.project.crud.repository.DataRepository;
@Service
public class ServiceImpl implements EmpService {
    @Autowired
    private DataRepository dataRepository;

    @Override
    public String create(Employeedata employeedata) {
        Dataentity dataentity = new Dataentity();
        BeanUtils.copyProperties(employeedata, dataentity);

        dataRepository.save(dataentity);
        return "Saved successfully";
    }

    @Override
    public Employeedata readEmployeedata(Long id) {
        Dataentity dataentity = dataRepository.findById(id).get();    
        Employeedata employeedata = new Employeedata();
        BeanUtils.copyProperties( dataentity,employeedata);

        return employeedata;
    }


    @Override
    public List<Employeedata> readEmployeedatas() {
        List<Dataentity> employeelist= dataRepository.findAll(); 
         List<Employeedata> employeedatas =new ArrayList<>(); 

        for(Dataentity dataentity : employeelist){
            Employeedata emp = new Employeedata();

            emp.setId(dataentity.getId());
            emp.setFirstName(dataentity.getFirstName());
            emp.setLastName(dataentity.getLastName());
            emp.setEmail(dataentity.getEmail());
            emp.setPhoneNumber(dataentity.getPhoneNumber());

            employeedatas.add(emp);
        }
             return employeedatas;
    }

    @Override
    public boolean deleteEmployeedata(Long id) {
        Dataentity emp = dataRepository.findById(id).get();
        dataRepository.delete(emp);
        return true;
    }

    @Override
    public String updateEmployeedata(Long id, Employeedata employeedata) {
        Dataentity existingEmployee= dataRepository.findById(id).get();
        existingEmployee.setFirstName((employeedata.getFirstName()));
        existingEmployee.setLastName(employeedata.getLastName());
        existingEmployee.setEmail(employeedata.getEmail());
        existingEmployee.setPhoneNumber(employeedata.getPhoneNumber());

        
        dataRepository.save(existingEmployee);
        return "updated successfully";
    }

    
    
  
}
