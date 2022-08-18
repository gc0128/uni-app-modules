import {getToken,removeToken} from '@/utils/auth';
import env from '@/utils/env'
// import { resolve } from 'node:path/win32';

function service(options = {}){
	options.url = `${env.baseUrl}${options.url}`;
	//判断本地是否存在token，如果存在则带上请求头
	if(getToken()){
		options.header = {
			'content-type' : 'application/json', 	//默认请求头
			'Authorization' : `${getToken()}`		//请求数据需要的自定义参数(令牌)
		}
	}
	
	return new Promise((resolved,rejected) => {
		//成功
		options.success = (res) => {
			if(Number(res.data.code) == 0){	//请求成功
				resolved(res.data)	//请求成功时返回接口数据
			}else{
				uni.showToast({
					icon:'none',
					duration:3000,
					title:`${res.data.desc}`
				})
				rejected(res)	//请求失败时返回错误信息
			}
		}
		options.fail = (err) => {
			//请求失败弹窗
			uni.showToast({
				icon:'none',
				duration:3000,
				title:'服务器错误,请稍后再试！'
			})
			rejected("请求失败");	//请求失败时返回错误信息
		}
		uni.request(options)	//传入配置好的对象
	})
}

export default service;