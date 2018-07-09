package com.pxk.springboot.conntroller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pxk.springboot.domain.User;
import com.pxk.springboot.helper.PageInfo;
import com.pxk.springboot.serivce.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired // 依赖注入service
	UserService userService;

	@RequestMapping("/getUser/{name}") // 定义requestMapping rest风格
	protected User getUser(@PathVariable(value = "name") String name) {
		return userService.getUser(name);
	}

	@RequestMapping("/getUserByName/{name}")
	protected String getUserByName(@PathVariable(value = "name") String name, Model model) {
		User user = userService.getUser(name);
		model.addAttribute(user);
		return "user";
	}
	/**================分割线==================*/

	@RequestMapping("/findUserByPage")
	@ResponseBody
	public PageInfo<User> getStudents(PageInfo<User> pageInfo) {
		return userService.findUserByPage(pageInfo);
	}

	@RequestMapping("/getUserById")
	protected User getUserById(int id) {
		return userService.getUserById(id);
	}

	@RequestMapping("/deleteUser")
	protected int deleteUser(int id) {
		User user = new User();
		user.setId(id);
		return userService.deleteUser(user);
	}

	@RequestMapping(value="/addUser", method = RequestMethod.POST)
	protected int addUser(User user) {
		if(user.getId()!=null&&user.getId()!=0){
			return userService.updateUser(user);
		}else{
			user.setRegestDate(new Date());
			return userService.addUser(user);
		}
	}

}
