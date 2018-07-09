package com.pxk.springboot.domain;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class User {
	private Integer id;
	private String name;
	private Integer age;
	private String passWord;
	private String gender;
	//json日期格式化
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
	private Date regestDate;
	//默认构造函数不能少 ，如果没有会报ibatis.executor.ExecutorException: No constructor found
	public User() {
		super();
	}

	public User(String name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getRegestDate() {
		return regestDate;
	}

	public void setRegestDate(Date regestDate) {
		this.regestDate = regestDate;
	}
}
