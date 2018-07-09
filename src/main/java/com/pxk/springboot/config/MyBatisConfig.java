package com.pxk.springboot.config;

import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * mybatis 配置文件
 * @author Administrator
 *
 */
@Configuration
public class MyBatisConfig {
	@Bean
	public MapperScannerConfigurer mapperScannerConfigurer() {
		MapperScannerConfigurer mapperScannerConfigurer = new MapperScannerConfigurer();
		//指定扫描的mapper.xml文件所在目录
		mapperScannerConfigurer.setBasePackage("com.pxk.springboot.dao");
		return mapperScannerConfigurer;
	}

}
