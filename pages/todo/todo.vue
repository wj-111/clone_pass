<template>
	<view class="page">
		<view class="gif">
			<image style="height: 500rpx;width: 500rpx;" src="../../static/loading.gif" mode="scaleToFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.page{
		display: flex;
		flex-direction: columns;
		.gif{
			margin: auto;
		}
	}
</style>
