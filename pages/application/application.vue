<template>
	<view>
		<view class="">
			<view class="function-container">
				<view class="function-box">
					<view class="">
						<van-icon name="notes-o" :size="size" :color="color"/>
					</view>
					<text>入校申请</text>
					
				</view>
				<view class="function-box">
					<view class="">
						<van-icon name="underway-o" :size="size" :color="color" />
					</view>
					<text>进出校园申请</text>
					
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				size:"30",
				color: "#a64423"
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
	.function-container{
		width: 600rpx;
		display: flex;
		.function-box{
			margin: 40rpx;
			text-align: center;
			line-height: 40rpx;
			// margin: 0 0rpx;
			font-size: 24rpx;
			color: #646566;
		}
	}

</style>
