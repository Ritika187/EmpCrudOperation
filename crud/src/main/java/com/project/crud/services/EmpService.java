package com.project.crud.services;

import java.util.List;

import com.project.crud.model.Employeedata;

public interface EmpService {
   String create(Employeedata dataPerson1);
    List<Employeedata> readEmployeedatas();
    boolean deleteEmployeedata(Long id);
    String updateEmployeedata(Long id, Employeedata employeedata);
       Employeedata readEmployeedata(Long id);
}
