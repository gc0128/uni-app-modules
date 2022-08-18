import request from '@/utils/request'

// 登录方法
export function login(username,password,code,uuid){
	const data = {
		username,
		password,
		code,
		uuid
	}
	return request({
		'url':'/',	//请求地址
		headers:{
			isToken:false
		},
		'method':'',	//请求方式
		'data':data		//请求参数
	})
}


// 获取用户详细信息
export const getInfo = ()=> request({url:'',method:''})

// 退出方法
export const logout = ()=>request({url:'',method:''})

// 获取验证码
export const getCodeImg = ()=>request({url:'',method:'',headers:{isToken:false},timeout:20000})