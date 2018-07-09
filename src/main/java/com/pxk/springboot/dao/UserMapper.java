package com.pxk.springboot.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.pxk.springboot.domain.User;

public interface UserMapper {
	List<User> findUserByPage(@Param("startIndex")int startIndex ,@Param("pageSize")int pageSize);
	User  getUserById(int id);
	int updateUser(User user);
	int deleteUser(User user);
	int addUser(User user);
	long findCount();
}
