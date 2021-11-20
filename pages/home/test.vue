<template>
	<view>
		
		
		<view class="test">
			<van-icon  name="user-o" :size="size" :color="color2"/>
		</view>
		<view class="test">
			<van-icon  name="wap-home-o" :size="size" :color="color1"/>
		</view>
		
		<view class="test">
			<van-icon  name="notes-o" :size="size" :color="color1"/>
		</view>
		<view class="test">
			<van-icon name="todo-list-o" :size="size" :color="color1"/>
		</view>
		<view class="test">
			<van-icon  name="user-o" :size="size" :color="color1"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				size:"30",
				color1: "#a64423",
				color2: "#646566",
			};
		}
	}
</script>

<style lang="scss">
	.test{
		margin: 200rpx;
	}
</style>
