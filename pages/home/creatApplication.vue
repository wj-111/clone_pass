<template>
	<view class="page">
		
		<view class="input-container">
			<view class="input-box">
				<view class="label">
					学院<text style="color: #1989FA;">（学院全名）</text>
				</view>
				<view class="input-text">
					<input type="text" value="" v-model="userDate.academy" placeholder="请输入" />
				</view>
			</view>
			<view class="input-box">
				<view class="label">
					班级<text style="color: #1989FA;">（如：21软件一）</text>
				</view>
				<view class="input-text">
					<input type="text" value="" v-model="userDate.class" placeholder="请输入"/>
				</view>
			</view>
			<view class="input-box">
				<view class="label">
					姓名
				</view>
				<view class="input-text">
					<input type="text" value="" v-model="userDate.name" placeholder="请输入"/>
				</view>
			</view>
			<view class="input-box">
				<view class="label">
					学号
				</view>
				<view class="input-text">
					<input type="text" value="" v-model="userDate.no" placeholder="请输入"/>
				</view>
			</view>
			<view class="input-box">
				<view class="label">
					申请理由
				</view>
				<view class="input-text">
					<input type="text" value="" v-model="userDate.reason" placeholder="请输入"/>
				</view>
			</view>
			
			<view class="input-box">
				<view class="label">
					最迟返校时间
				</view>
				<view class="input-text">
					<!-- <van-button type="primary" @click="showPopup">主要按钮</van-button> -->
					<input type="text"  :value="userDate.selectTime" placeholder="请输入" @click="showPopup"/>
					<!-- <van-cell is-link @click="showPopup">选择时间</van-cell> -->
					<van-popup v-model:show="show" position="bottom">
						<van-datetime-picker
						  v-model="currentDate"
						  type="datetime"
						  title="选择年月日小时分钟"
						  @confirm="confirm"
						  @cancel="cancel"
						/>
					</van-popup>
				</view>
			</view>
			<view class="button-container">
				<van-button plain type="primary" color="#a64423" size="large" @click='submit'>提交</van-button>
			</view>
			
			
			
			
			
			
			
			
			
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentDate:new	Date(),
				show:false,
				userDate:{
					academy:'',
					class:'',
					name:'',
					no:'',
					reason:'',
					selectTime:''
				}
			};
		},
		methods:{
			showPopup(){
				this.show = true
			},
			confirm(){
				this.userDate.selectTime = this.currentDate.getFullYear()+'-'+parseInt(this.currentDate.getMonth()+1).toString().padStart(2,'0')
				+'-'+this.currentDate.getDate().toString().padStart(2,'0')+' '+this.currentDate.getHours().toString().padStart(2,'0')+':'+this.currentDate.getMinutes().toString().padStart(2,'0');
				this.show = false;
			},
			cancel(){
				this.show = false;
			},
			submit(){
				console.log('存储数据');
				
				
				uni.setStorage({
				   key: 'userDate',
				   data: {
					  ...this.userDate
				   },
				   success: function () {
					   console.log('success');
				   }
				});
				uni.switchTab({
					url:"home"
				})
				
			
			}
		}
		
	}
</script>

<style lang="scss">
	.page{
		display: flex;
		flex-direction: column;
	}
	.input-container{
		.input-box{
			font-size: 40rpx;
			.label{
				font-size: 36rpx;
				color: #222222;
				height: 80rpx;
				line-height: 80rpx;
				background-color: #f6f6f6;
				// background-color: #a64423;
			}
			.input-text{
				display: flex;
				align-items: center;
				line-height: 80rpx;
				height: 80rpx;
			}
		}
	}
	.button-container{
		padding: 40rpx;
		text-align: center;
	}
</style>
