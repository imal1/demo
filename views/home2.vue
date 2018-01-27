<template>
	<div class="container">
   		<wxc-minibar title=""
                   background-color="#374361"
                   text-color="#e53935"
                   leftButton="">
                   <text class="title" style="font-size:35px; color:white;" slot="middle">掌上管家</text>
		</wxc-minibar>
   		<list class="module-list">
   			<cell class="row">
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/crm.png"></image>
   					<text class="module-title">商品创建</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/im.png"></image>
   					<text class="module-title">入库订单</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/版本.png"></image>
   					<text class="module-title">出库订单</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/部门.png"></image>
   					<text class="module-title">增加类别</text>
   				</div>
   			</cell>
   			<cell class="row">
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/轨迹.png"></image>
   					<text class="module-title">查询库存</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/汇报.png"></image>
   					<text class="module-title">库存总账</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/考勤.png"></image>
   					<text class="module-title">库存流水</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/客户.png"></image>
   					<text class="module-title">滞销分析</text>
   				</div>
   			</cell>
   			<cell class="row">
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/企业.png"></image>
   					<text class="module-title">top销售</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/权限.png"></image>
   					<text class="module-title">效期数据</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/任务.png"></image>
   					<text class="module-title">安全库存</text>
   				</div>
   				<div class="module">
   					<image class="module-icon" src="http://p.ruishunwl.com/app/tempicon/设置.png"></image>
   					<text class="module-title">补货分析</text>
   				</div>
   			</cell>
   		</list>
	</div>
</template>
<style scoped>
.module-list{
	background-color:white;
	margin-top:80px;
}
.row{
	flex-direction:row;
	width:670px;
	align-items:center;
	margin-left: 40px;
}
.module{
	height:230px;
	width:180px;
	flex:1;
    justify-content: center;
    align-items:center;
}
.module-icon{
	width:70px;
	height:70px;
	margin-bottom:20px;
}
.module-title{
	font-size:22px;
}
</style>
<script>
	import { WxcMinibar } from 'weex-ui';
	  export default {
  	components:{ WxcMinibar }
};
</script>