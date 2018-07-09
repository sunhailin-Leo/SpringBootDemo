/*
Navicat MySQL Data Transfer

Source Server         : pxk
Source Server Version : 50515
Source Host           : localhost:3306
Source Database       : springboot_demo

Target Server Type    : MYSQL
Target Server Version : 50515
File Encoding         : 65001

Date: 2017-09-16 15:46:46
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `regest_date` datetime DEFAULT NULL,
  `pass_word` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `User` VALUES ('1', '小明', '25', 'M', '2017-09-05 15:34:06', '111111');
INSERT INTO `User` VALUES ('2', '小红', '12', 'F', '2017-09-06 15:34:10', '123321');
INSERT INTO `User` VALUES ('3', 'lily', '26', 'F', '2017-09-21 15:34:14', '123123');
INSERT INTO `User` VALUES ('4', 'lucy', '39', 'F', '2017-08-03 15:34:16', '111');
INSERT INTO `User` VALUES ('5', 'lilei', '27', 'M', '2017-08-03 15:34:16', '123123');
INSERT INTO `User` VALUES ('6', 'hanmeimei', '27', 'M', '2017-08-03 15:34:16', '123123');
INSERT INTO `User` VALUES ('7', '鲁迅', '120', 'M', '2017-08-03 15:34:16', 'rwer');
INSERT INTO `User` VALUES ('8', '王者荣耀', '21', 'F', '2017-08-03 15:34:16', '1231rwetrw');
INSERT INTO `User` VALUES ('9', 'lol', '21', 'F', '2017-08-03 15:34:16', '12312312');
INSERT INTO `User` VALUES ('10', '90后美眉', '21', 'F', '2017-08-03 15:34:16', '234234');
INSERT INTO `User` VALUES ('11', 'AndPen', '21', 'M', '2017-08-03 15:34:16', '1231232');
