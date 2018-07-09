package com.pxk.springboot.serivce;

import java.util.List;

import com.pxk.springboot.domain.User;
import com.pxk.springboot.helper.PageInfo;

public interface UserService {
	User  getUser(String name);
	PageInfo<User>  findUserByPage(PageInfo<User> pageInfo);
	User  getUserById(int id);
	int updateUser(User user);
	int deleteUser(User user);
	int addUser(User user);
}
