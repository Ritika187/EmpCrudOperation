package com.project.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.crud.entity.Dataentity;

@Repository
public interface DataRepository extends JpaRepository<Dataentity, Long >{

    
}
