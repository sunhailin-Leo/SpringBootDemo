/**
 * From date to String
 * 
 * @param date
 *            Date
 * @returns {fomart(yyyy-MM-dd)}
 */
function dateToString(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	return year + "-" + (month < 10 ? "0" + month : month) + "-"
			+ (day < 10 ? "0" + day : day);
}
/**
 * 获取cookies
 * @param name
 * @returns
 */
function getCookie(name) {
	var cookies = document.cookie.split(";");
	reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	var arr;
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
}
/**
 * 去掉字符串两端空格
 * @param s
 * @returns
 */
function trim(s) {
	return s.replace(/(^\s*)|(\s*$)/g, "");
}


/**
 * 转换long值为日期字符串
 * 
 * @param l
 *            long值
 * @param isFull
 *            是否为完整的日期数据, 为true时, 格式如"2000-03-05 01:05:04" 为false时, 格式如
 *            "2000-03-05"
 * @return 符合要求的日期字符串
 */

function getSmpFormatDateByLong(l, isFull) {
	return getSmpFormatDate(new Date(l), isFull);
}

/**
 * 转换日期对象为日期字符串
 * 
 * @param l
 *            long值
 * @param pattern
 *            格式字符串,例如：yyyy-MM-dd hh:mm:ss
 * @return 符合要求的日期字符串
 */
function getFormatDate(date, pattern) {
	if (date == undefined) {
		date = new Date();
	}
	if (pattern == undefined) {
		pattern = "yyyy-MM-dd hh:mm:ss";
	}
	return date.format(pattern);
}

/**
 * 转换日期对象为日期字符串
 * 
 * @param date
 *            日期对象
 * @param isFull
 *            是否为完整的日期数据, 为true时, 格式如"2000-03-05 01:05:04" 为false时, 格式如
 *            "2000-03-05"
 * @return 符合要求的日期字符串
 */
function getSmpFormatDate(date, isFull) {
	var pattern = "";
	if (isFull == true || isFull == undefined) {
		pattern = "yyyy-MM-dd hh:mm:ss";
	} else {
		pattern = "yyyy-MM-dd";
	}
	return getFormatDate(date, pattern);
}
// 扩展Date的format方法
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1,
		"d+" : this.getDate(),
		"h+" : this.getHours(),
		"m+" : this.getMinutes(),
		"s+" : this.getSeconds(),
		"q+" : Math.floor((this.getMonth() + 3) / 3),
		"S" : this.getMilliseconds()
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}