package com.pxk.springboot;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.log4j.lf5.util.Resource;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;

import com.alibaba.druid.pool.DruidDataSource;

@SpringBootApplication
//@MapperScan(basePackages = { "com.pxk.springboot.dao" })//这种扫描会有bug哦
public class Application {
	private final static Logger log=LoggerFactory.getLogger(Application.class);
	@Bean
	@ConfigurationProperties(prefix = "spring.datasource")
	//覆盖默认数据源 使用druid数据源
	public DataSource dataSource() {
		return new DruidDataSource();
	}
	@Bean
	public SqlSessionFactory sqlSessionFactory() {
		try {
			SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
			sessionFactory.setDataSource(dataSource());
			//扫描实体类所在包
			sessionFactory.setTypeAliasesPackage("com.pxk.springboot.domain");
			return sessionFactory.getObject();
		} catch (Exception e) {
			return null;
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		log.info("启动成功");
	}
}
