package com.tjl.tjlconstruction.repositories;

import java.util.List; 

import org.springframework.data.repository.CrudRepository;

import com.tjl.tjlconstruction.models.Client;



public interface ClientRepository extends CrudRepository<Client, Long> {
	
	List<Client> findAll();

	
}
