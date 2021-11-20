<template>
	<view>
		<view class="page">
			<view class="user-info-container">
				<view class="user-text-info-box">
					<view class="name">{{user.name}}</view>
					<view class="no">{{user.no}}</view>
				</view>
				<view class="avatar-box">
					<image src="../../static/origin/avatar.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="function-container">
				
				<view class="function-box">
					<view class="icon">
						<van-icon name="contact" :size="icon.size" :color="icon.color"/>
					</view>
					<view class="text">
						我的信息
					</view>
					<view class="arrow">
						<van-icon name="arrow" :size="icon.size" :color="icon.arrowColor"/>
					</view>
				</view>
				<view class="function-box">
					<view class="icon">
						<van-icon name="records" :size="icon.size" :color="icon.color"/>
					</view>
					<view class="text">
						我的日报
					</view>
					<view class="arrow">
						<van-icon name="arrow" :size="icon.size" :color="icon.arrowColor"/>
					</view>
				</view>
				<view class="function-box" @click="toMyApplication">
					<view class="icon">
						<van-icon name="notes-o" :size="icon.size" :color="icon.color"/>
					</view>
					<view class="text">
						我的申请
					</view>
					<view class="arrow">
						<van-icon name="arrow" :size="icon.size" :color="icon.arrowColor"/>
					</view>
				</view>
				<view class="function-box">
					<view class="icon">
						<van-icon name="setting-o" :size="icon.size" :color="icon.color"/>
					</view>
					<view class="text">
						修改密码
					</view>
					<view class="arrow">
						<van-icon name="arrow" :size="icon.size" :color="icon.arrowColor"/>
					</view>
				</view>
			</view>
			<view class="exit-button" @click="test">
				退出
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name:"吴彦祖",
					no:'18030000'
				},
				icon:{
					size:'16',
					color:'#000000',
					arrowColor:'#969ead'
				}
			}
		},
		onShow() {
			console.log('页面显示');
			try {
			    const value = uni.getStorageSync('userDate');
			    if (value) {
					this.user.name = value.name;
					this.user.no = value.no;
					console.log("更新数据成功");
			    }
			} catch (e) {
				console.log(调用失败);
			}
			
		},
		methods: {
			toMyApplication(){
				uni.navigateTo({url: 'myApplication'});
			},
			test(){
				console.log("初始化")
				
				// try {
				//     const value = uni.getStorageSync('userDate');
				//     if (value) {
				// 		this.user.name = value.name;
				// 		this.user.no = value.no;
				//     }
				// } catch (e) {
				// 	console.log(调用失败)
				// }
				this.user.name = '吴彦祖';
				this.user.no = '18030000';
				uni.clearStorageSync();
			}
		}
	}
</script>

<style lang="scss">
	.page{
		display: flex;
		flex-direction: column;
	}
	
	.user-info-container{
		margin: 38rpx 45rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 200rpx;
		
		.user-text-info-box{
			
			line-height: 40rpx;
			.name{
				font-size: 26rpx;
			}
			.no{
				font-size: 22rpx;
				color: #969799;
			}
		}
		.avatar-box{
			margin-left: auto;
			image{
				width: 140rpx;
				height: 140rpx;
				border-radius:50%;
			}
		}
	}
	
	.function-container{
		display: flex;
		flex-direction: column;
		border-top: 1rpx solid #f8f8fb; 
		border-bottom: 1rpx solid #f8f8fb;
		
		.function-box{
			margin: 0 30rpx;
			display: flex;
			flex-direction: row;
			height: 75rpx;
			font-size: 26rpx;
			align-items: center;
			border-top: 1px solid #F5F5F5; 
			// border-bottom: 1px solid #F9F9F9;
			.icon{
				margin: 0 10rpx;
			}
			.text{
				line-height: 75rpx;
			}
			.arrow{
				margin-left: auto;
			}
		}
	}

	.exit-button{
		margin: 40rpx;
		margin-top: 20rpx;
		// background-color: #007AFF;
		border-style:solid;
		border-width:1rpx;
		border-color: #EEEEEE;
		
		height: 80rpx;
		border-radius: 80rpx;
		text-align: center;
		line-height: 80rpx;
		font-size: 26rpx;
	}

</style>
