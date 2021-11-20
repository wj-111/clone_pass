<template>
	<view class="page">
		<view class="" style="width: 100%;height: 450rpx; position: absolute;background-color: #a64423;">
			
		</view>
		
		
		<image class="school-name-image" src="../../static/origin/school_name.png"  mode="aspectFit"></image>
		<image class="slogan-image" src="../../static/origin/slogan.jpg" mode="scaleToFill"></image>
		
		<view class="function-container">
			<view class="function-box">
				<view class="">
					<van-icon name="records" :size="size" :color="color"/>
				</view>
				<text>健康日报</text>
				
			</view>
			<view class="function-box">
				<view class="">
					<van-icon name="qr" :size="size" :color="color"/>
				</view>
				<text>通行证</text>
				
			</view>
			<view class="function-box" @click="toCreatApplication()">
				<view class="">
					<van-icon name="notes-o" :size="size" :color="color"/>
				</view>
				<text>入校申请</text>
				
			</view>
			<view class="function-box">
				<view class="">
					<van-icon name="todo-list-o" :size="size" :color="color"/>
				</view>
				<text>待办</text>
				
			</view>
		</view>
		
		<image class="show-picture" src="../../static/origin/picture1.jpg" mode="scaleToFill"></image>
		<image class="show-picture" src="../../static/origin/picture2.jpg" mode="scaleToFill"></image>
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{
					name:"王杰"
				},
				
				size:"30",
				color: "#a64423"
			};
		},
		methods:{
			toCreatApplication(){
				uni.navigateTo({
					url:"creatApplication"
				});
			}
		}
	}
</script>

<style lang="scss">
	.page{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.school-name-image{
		height: 110rpx;
		margin: 40rpx 0 30rpx 0;
	}
	.slogan-image{
		height: 380rpx;
		width: 660rpx;
	}
	
	.function-container{
		margin: 35rpx 0;
		width: 600rpx;
		display: flex;
		.function-box{
			text-align: center;
			line-height: 40rpx;
			flex: 1;
			// margin: 0 0rpx;
			font-size: 24rpx;
			color: #646566;
			
			
		}
	}
	.show-picture{
		margin: 10rpx 0;
		height: 390rpx;
		width: 705rpx;
	}
	
	
</style>
