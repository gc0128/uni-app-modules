// 引用用户请求api
import {login} from '@/api/login.js';
import {setToken} from '@/utils/auth.js';


/**
 * 
 * 示例微信小程序参数(参数可自行修改)
 *
 */
const actions = {
	login({commit},param){
		return new Promise((resolve,reject) => {
			login({
				id: param.id,
				code: param.code
			}).then(response =>{
				//添加自己的要做的事情(如 将获取的token保存到本地)
				//必须在resolve之前执行
				setToken(response.token)	//将获取到的token保存到本地
				resolve(response)
			}).catch(errror => {
				//请求不成功输出失败信息
				console.log(error)
			})
		})
	}
}
//对外抛出
export default{
	actions
}