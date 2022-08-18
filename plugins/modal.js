//封装提示框组件
export default {
	// 消息提示
	msg(content){
		uni.showToast({
			icon:'none',
			title:content
		})
	},
	// 错误消息
	msgError(content){
		uni.showToast({
			icon:'error',
			title:content
		})
	},
	// 成功消息
	msgSuccess(content){
		uni.showToast({
			icon:'success',
			title:content
		})
	},
	// 隐藏消息
	msgHide(content){
		uni.hideToast()
	},
	// 弹出提示
	alert(content) {
		uni.showModal({
			title:'提示',
			content:content,
			showModal:false
		})
	},
	// 确认窗体
	confirm(content){
		return new Promise((resolve,reject) => {
			uni.showModal({
				title:'提示',
				content:content,
				cancelText:'取消',
				confirmText:'确定',
				success:function(res){
					if(res.confirm){
						resolve(res.confirm)
					}
				}
			})
		})
	},
	// 提示消息
	showToast(option){
		if(typeof option === "object"){
			uni.showToast(option)
		}else{
			uni.showToast({
				title:'option',
				icon:'none',
				duration:2500
			})
		}
	},
	// 打开遮罩层
	loading(){
		uni.showLoading({
			title:'加载中',
			icon:'none'
		})
	},
	// 关闭遮罩层
	closeLoading(){
		uni.hideLoading()
	}
}