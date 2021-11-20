<template>
	<view>
		<view class="search-container">
			<view class="icon">
				<van-icon name="search" size="20" />
			</view>
			<view class="">
				<input type="text" value="" placeholder="请输入搜索关键词"/>
			</view>
		</view>
		
		
		<view class="list-container" v-for="(item,index) in list" :key="index" @click="toDetail(item)" v-if="item.reason!==''">
			<view class="list-box">
				<view class="content">
					<view class="reason">
						{{item.reason}}
					</view>
					<view class="time">
						{{item.time}}
					</view>
				</view>
				<view class="flag">
					通过
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						reason:'开学',
						time:'2021-09-24 09:00'
					},
					{
						reason:'开学',
						time:'2021-09-24 09:00'
					},
					{
						reason:'回校',
						time:'2021-07-25 14.31'
					},
					{
						reason:'开学',
						time:'2021-03-06 14.00'
					},
					{
						reason:'开学',
						time:'2020-09-05 09.00'
					}
				]
			};
		},
		methods:{
			toDetail: function(item) {
				uni.navigateTo({
					url: "applicationDetail?time=" + item.time
				})
			},
		},
		onShow() {
			console.log('我的申请页面');
			
			
			try {
			    const value = uni.getStorageSync('userDate');
			    if (value) {
					// this.list.unshift({
					// 	reason:value.reason,
					// 	time:value.selectTime
					// });
					
					this.list[0].reason = value.reason;
					this.list[0].time = value.selectTime;
					console.log("更新数据成功");
			    }
			} catch (e) {
				console.log(调用失败);
			}
		}
	}
</script>

<style lang="scss">
	.search-container{
		margin: 20rpx;
		display: flex;
		align-items: center;
		background-color: #f7f8fa;
		height: 60rpx;
		border-radius: 10rpx;
		
		
		font-size: 26rpx;
		.icon{
			margin: 0 20rpx;
		}
	}
	
	.list-container{
		
		margin: 30rpx;
		display: flex;
		flex-direction: column;
		border-bottom: 1rpx solid #F5F5F5;
		.list-box{
			height: 120rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			.content{
				display: flex;
				flex-direction: column;
				line-height: 50rpx;
				font-size: 28rpx;
				.time{
					font-size: 24rpx;
					color: #9697a6;
				}
			}
			.flag{
				padding: 5rpx;
				font-size: 22rpx;
				margin-left: auto;
				color: #07c160;
				border: 2rpx solid #07c160;
				border-radius: 5rpx;
			}
		}
	}
</style>
