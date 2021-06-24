package com.tjl.tjlconstruction.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="clients")
public class Client {
	    @Id
	    @GeneratedValue(strategy=GenerationType.IDENTITY)
	    private Long id;
	    @NotNull
	    @Size(min = 2, max=75, message = "First Name must be between 2 and 75 characters long")
	    private String name;
	    @NotNull
	    @Size(min = 2, max = 75, message = "Last Name must be between 2 and 75 characters long")
	    @NotNull
	    private Integer phoneNumber;
	    @Email
	    private String email;
	    @Column(updatable=false)
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date createdAt;
	    @DateTimeFormat(pattern="yyyy-MM-dd")
	    private Date updatedAt;
	    
	    public Client() {
	    }
	    public Client(String name, Integer phoneNumber, String email) {
	    	this.name = name;
	    	this.phoneNumber = phoneNumber;
	    	this.email = email;
	    	
	    }
	    
	    
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Integer getPhoneNumber() {
			return phoneNumber;
		}
		public void setPhoneNumber(Integer phoneNumber) {
			this.phoneNumber = phoneNumber;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public Date getCreatedAt() {
			return createdAt;
		}
		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}
		public Date getUpdatedAt() {
			return updatedAt;
		}
		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}
		@PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
		@PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }
	 
}
