const TokenKey = 'token';

//认证令牌
/* 获取token */
export function getToken(){
	return uni.getStorageSync(TokenKey)
}
/* 保存token */
export function setToken(token){
	return uni.setStorageSync(TokenKey,token)
}
/* 清除token */
export function removeToken(){
	return uni.removeStorageSync(TokenKey)
}