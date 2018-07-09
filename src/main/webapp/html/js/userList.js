var myrow = {};
$(function() {
	$('#mytab').bootstrapTable({
		url : "../user/findUserByPage",// 数据源
		dataField : "list",// 服务端返回数据键值 就是说记录放的键值是rows，分页时使用总记录数的键值为total
		// search: true,//是否搜索
		totalField : "total",// 接收总页数的参数
		pagination : true,// 是否分页
		pageSize : 5,// 单页记录数
		pageList : [ 5, 10, 20, 50 ],// 分页步进值
		sidePagination : "server",// 服务端分页
		// contentType: "application/x-www-form-urlencoded",//请求数据内容格式 默认是
		// application/json 自己根据格式自行服务端处理
		dataType : "json",// 期待返回数据类型
		method : "get",// 请求方式
		searchAlign : "left",// 查询框对齐方式
		queryParamsType : "other",// 查询参数组织方式 为limit时候传的参数是 offset和limit，否则为
		// pageSize和pageNumber
		// 可以带查询参数
		// queryParams : function getParams(params) {
		// params.name = $('#usernameText').val();
		// return params;
		// },
		searchOnEnterKey : false,// 回车搜索
		columns : [
		// {
		// title : "全选",
		// // field : "select",
		// checkbox : true,
		// width : 20,// 宽度
		// align : "center",// 水平
		// valign : "middle"// 垂直
		// },
		{
			title : "用户名",// 标题
			field : "name"// 键名
		// sortable: true,//是否可排序
		// order: "desc"//默认排序方式
		}, {
			field : "gender",
			title : "性别",
			formatter : function(value, row, index) {
				if (value == "F") {
					return "女";
				} else {
					return "男";
				}
			}
		},{
			title : "注册时间",// 标题
			field : "regestDate"// 键名
		}, {
			title : "操作",
			field : "control",
			width : 70,
			align : "center",
			valign : "middle",
			formatter : operateFormatter,
			events : "operateEvents"
		} ],
		locale : "zh-CN", // 中文支持,
		detailView : false
	// 是否显示详情折叠
	});
});
window.operateEvents = {
	'click .remove' : function(e, value, row) {
		deleteSudentsById(row.id);
	},
	'click .edite' : function(e, value, row) {
		$("#myModal").modal('show');
		$("#sid").val(row.id);
		// 为输入框赋值
		$("#usernameTextE").val(row.name);
		$("#ageTextE").val(row.age);
		$("#regestDateE").val(row.regestDate);
		row.gender == "F" ? $("#gederTextF").prop("checked", "checked") : $(
				"#gederTextM").prop("checked", "checked");
	}
};
function operateFormatter(value, row, index) {
	return [
			'<div class="pull-center">',
			'<a  class="edite" href="javascript:void(0)" title="编辑" href="#"><span class="glyphicon glyphicon-expand"></span></a>',
			'&nbsp;&nbsp;&nbsp;&nbsp;<a class="remove" href="javascript:void(0)" title="删除">',
			'<i class="glyphicon glyphicon-remove"></i>', '</a>', '</div>' ]
			.join('');
}
// 新增用户
function addUser() {
	$("#sid").val("");
	// 情况信息编辑窗口（编辑和新增公用了一个窗口需要清空）
	$("#usernameTextE").val("");
	$("#gederTextM").attr("checked", "checked");// 性别默认为男
	$("#dd").html("");// 清空头像
	// 弹出信息编辑模态窗口
	$("#myModal").modal('show');
}
// 保存用户信息
function saveUser() {
	// 调用后台方法进行保存
	$.ajax({
		url : '../user/addUser',
		type : 'POST',
		data : {
			id : $("#sid").val(),
			// 为输入框赋值
			name : $("#usernameTextE").val(),
			age : $("#ageTextE").val(),
			gender : $('#gederTextM:checked').val()
		},
		async : false,
		cache : false,
		success : function(returndata) {
			// 关闭模态窗口
			$("#myModal").modal('hide');
			// 刷新列表
			$('#mytab').bootstrapTable('refresh');
		},
		error : function(returndata) {
			alert("添加失败！");
		},
		dataType : "json"
	});
}
function deleteSudentsById(id) {
	var r = confirm("确认要删除该数据吗!");
	if (r == true) {
		$.get("../user/deleteUser", {
			id : id
		}, function(data) {
			alert("删除成功！");
			// 刷新列表
			$('#mytab').bootstrapTable('refresh');
		}, "json");
	} else {
		alert("删除失败！")
	}
}
// 下面用于多图片上传预览功能
function setImagePreviews(avalue) {
	var docObj = document.getElementById("upload-file");
	var dd = document.getElementById("dd");
	dd.innerHTML = "";
	var fileList = docObj.files;
	for (var i = 0; i < fileList.length; i++) {
		dd.innerHTML += "<img id='img" + i + "'  />";
		var imgObjPreview = document.getElementById("img" + i);
		if (docObj.files && docObj.files[i]) {
			// 火狐下，直接设img属性
			imgObjPreview.style.display = 'block';
			imgObjPreview.style.width = '150px';
			imgObjPreview.style.height = '180px';
			// imgObjPreview.src = docObj.files[0].getAsDataURL();
			// 火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
			imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);
		} else {
			// IE下，使用滤镜
			docObj.select();
			var imgSrc = document.selection.createRange().text;
			alert(imgSrc)
			var localImagId = document.getElementById("img" + i);
			// 必须设置初始大小
			localImagId.style.width = "150px";
			localImagId.style.height = "180px";
			// 图片异常的捕捉，防止用户修改后缀来伪造图片
			try {
				localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
				localImagId.filters
						.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
			} catch (e) {
				alert("您上传的图片格式不正确，请重新选择!");
				return false;
			}
			imgObjPreview.style.display = 'none';
			document.selection.empty();
		}
	}
	return true;
}
