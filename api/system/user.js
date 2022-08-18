/* 引用网络请求中间件 */
import request from '@/utils/request.js'

/**
 * 
 *	用户密码重置
 */
export const updateUserPwd = (params)=>request({url:'',method:'',data:params})

/**
 * 
 *	查询用户个人信息
 */
export const getUserProfile = ()=>request({url:'',method:''})

/**
 * 
 *	修改用户个人信息
 */
export const updateUserProfile = (data)=>request({url:'',method:'',data:data})

/**
 * 
 *	用户头像上传
 */
export const uploadAvator = (data)=>request({ur:'',method:'',data:data})