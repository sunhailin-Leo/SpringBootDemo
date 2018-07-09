package com.pxk.springboot.conntroller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pxk.springboot.domain.User;

@RestController
@RequestMapping("/hello/*")
public class HelloSpringBoot {
	@RequestMapping(value="/{name}")
	private String sayHello(@PathVariable("name")String name){
		return "hello "+name;
	}
	
	@RequestMapping(value="getjson",produces={"application/json;chartset=UTF-8"})
	private User getUserJson(String name){
		return new User(name);
	}
	
	@RequestMapping(value="getxml",produces={"application/xml;chartset=UTF-8"})
	private User getUserXML(String name){
		return new User(name);
	}
}
