<template>
	<view class="content">
		
	</view>
</template>

<script>
	import {
		login
	} from '../../api/system/user.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			login().then(res => {
				console.log(res)
				if (res.code == 200) { //一般成功状态码都是200，根据实际情况判断
					//此处为接口调用成功之后需要做的事情
				} else {
					//否者就是不成功，一般会弹出错误信息
				}
			})

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;

	}
</style>
