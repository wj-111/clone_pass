<template>
	<view class="page"> 
		<view class="" style="width: 100%;height: 360rpx; position: absolute;background-color: #a64423;z-index: -1;"></view>
		<image class="school-name-image" src="../../static/origin/school_name.png"  mode="aspectFit"></image>
		<view class="show-container">
			<view class="show-box">
				<view class="label">
					院系部门
				</view>
				<view class="value">
					{{userDate.academy}}
				</view>
			</view>
			<view class="show-box">
				<view class="label">
					班级
				</view>
				<view class="value">
					{{userDate.class}}
				</view>
			</view>
			<view class="show-box">
				<view class="label">
					学号
				</view>
				<view class="value">
					{{userDate.no}}
				</view>
			</view>
			<view class="show-box">
				<view class="label">
					姓名
				</view>
				<view class="value">
					{{userDate.name}}
				</view>
			</view>
			<view class="show-box">
				<view class="label">
					有效日期
				</view>
				<view class="value">
					{{userDate.selectTime}}
				</view>
			</view>
		</view>
		<image style="margin: 0 auto;width: 430rpx;height: 430rpx;" :src="isNewTime ? imgSrc.new :imgSrc.old" mode="aspectFit"></image>
		
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userDate:{
					academy:'计算机信息工程学院',
					class:'21软件一',
					no:'21030527',
					name:'吴彦祖',
					reason:'',
					selectTime:'2021-07-25 14:31'
				},
				imgSrc:{
					old: '../../static/origin/2d.png',
					new: '../../static/origin/2d2.png'
				}
			};
		},
		computed: {
		    // 计算属性的 getter
		    isNewTime: function () {
		      // `this` 指向 vm 实例
			  let applyYear = parseInt(this.userDate.selectTime.split('-')[0],10)   
			  let applyMouth = parseInt(this.userDate.selectTime.split('-')[1],10)
			  if (applyYear <= 2021 && applyMouth < 11) {
				  return false
			  } else {
				  return true
			  }
		    }
		},
		onLoad:function(options) {
			if(options.time){
				this.userDate.selectTime = options.time;
			}
			try {
			    const value = uni.getStorageSync('userDate');
			    if (value) {
					this.userDate.academy = value.academy;
					this.userDate.class = value.class;
					this.userDate.no = value.no;
					this.userDate.name = value.name;
					
					console.log("更新数据成功");
			    }
			} catch (e) {
				console.log(调用失败);
			}
		},
	}
</script>

<style lang="scss">
	.page{
		display: flex;
		flex-direction: column;
	}
	
	.school-name-image{
		height: 110rpx;
		margin: 40rpx auto 30rpx auto;
	}
	
	.show-container{
		margin: 50rpx;
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		border-radius: 30rpx;
		padding: 30rpx 50rpx; 
		border: 3rpx solid #c7c7c7;
		.show-box{
			
			border-top: 1rpx solid #f8f8fa;
			border-bottom: 1rpx solid #f8f8fa;
			font-size: 26rpx;
			display: flex;
			line-height: 80rpx;
			align-items: center;
			.value{
				margin-left: auto;
			}
		}
	}
</style>
