<template>
	<div>
		<div class="userheadercontainer">
			<wxc-cell 	class="userheader"
                		:has-bottom-border="false"
                		@wxcCellClicked="wxcCellClicked"
                  		:cell-style="cellStyle">
          		<image class="image" slot="label" src="https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg"></image>
          		<text class="font" slot="title">立即登录</text>
          		<image class="arrow" slot="value" src="https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"></image>
			</wxc-cell>
		</div>
		<div class="userlist">
			<wxc-cell 	label="专属仓储主管"
                		:has-arrow="true"
                		@wxcCellClicked="wxcCellClicked"></wxc-cell>
			<wxc-cell 	label="查询订单"
                		:has-arrow="true"
                		@wxcCellClicked="wxcCellClicked"></wxc-cell>
			<wxc-cell 	label="评分"
                		:has-arrow="true"
                		@wxcCellClicked="wxcCellClicked"></wxc-cell>
			<wxc-cell 	label="版本更新"
                		:has-arrow="true"
                		@wxcCellClicked="wxcCellClicked"></wxc-cell>
		</div>
	</div>
</template>

<style scoped>
.userheadercontainer{
	background-color:#EF5F62;
	height:300px;
	width:750px
}
.userheader{
	background-color:transparent;
	margin-top:80px;
}
.font{
	color:white;
	font-size:30px;
}
.image {
    width: 120px;
    height: 120px;
    margin-right: 20px;
    border-radius: 90px;
  }
.userlist{
	width: 750px;
}
</style>
<script>
	import { WxcCell } from 'weex-ui';
	export default {
    	components: { WxcCell}
  	};
</script>