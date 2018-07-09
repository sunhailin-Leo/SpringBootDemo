package com.pxk.springboot.serivce.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pxk.springboot.dao.UserMapper;
import com.pxk.springboot.domain.User;
import com.pxk.springboot.helper.Page;
import com.pxk.springboot.helper.PageInfo;
import com.pxk.springboot.serivce.UserService;
@Service//注入成service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserMapper userMapper;
	@Override
	public User getUser(String name) {
		return new User(name);
	}

	//这里实现了分页，看着有点复杂，是因为我原来习惯使用分页插件包（pageHelper），这里为了方便理解直接省略了插件包
	//简化使用了这个包里面的两个类Page和PageInfo
	@Override
	public PageInfo<User> findUserByPage(PageInfo<User> pageInfo) {
		long count =userMapper.findCount();
		List<User> list=userMapper.findUserByPage((pageInfo.getPageNum()-1)*pageInfo.getPageSize(), pageInfo.getPageSize());
		Page<User> page=new Page<>(pageInfo.getPageNum(), pageInfo.getPageSize());
		page.setTotal(count);
		PageInfo<User> rpg = new PageInfo<User>(page);
		rpg.setList(list);
		return rpg;
	}

	@Override
	public User getUserById(int id) {
		return userMapper.getUserById(id);
	}

	@Override
	public int updateUser(User user) {
		return userMapper.updateUser(user);
	}

	@Override
	public int deleteUser(User user) {
		return userMapper.deleteUser(user);
	}

	@Override
	public int addUser(User user) {
		return userMapper.addUser(user);
	}
}
