package com.tjl.tjlconstruction.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tjl.tjlconstruction.models.Client;
import com.tjl.tjlconstruction.repositories.ClientRepository;

@Service
public class ClientService {
   
    private final ClientRepository clientRepository;
    
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }
    
    // returns all 
    public Iterable<Client> allClient() {
        return clientRepository.findAll();
    }
    
    // creates 
    public Client createClient(Client c) {
        return clientRepository.save(c);
    }
    
    // retrieves 
    public Client findClient(Long id) {
        Optional<Client> optionalClient = clientRepository.findById(id);
        if(optionalClient.isPresent()) {
            return optionalClient.get();
        } else {
            return null;
        }
    }

}
