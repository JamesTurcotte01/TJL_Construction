package com.tjl.tjlconstruction.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tjl.tjlconstruction.repositories.ClientRepository;

@CrossOrigin(origins = "http://localhost8081")
@Controller
@RequestMapping("/api")
public class MainController {

	@Autowired
	private ClientRepository clientRepository;
	
	
	
	
//	@GetMapping("/")
//	public String landing() {
//		
//	}
}
