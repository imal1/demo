<template>
	<div>
   		<Navigator></Navigator>
		<image style="width:750px;height:1100px" src="https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"></image>
		<div class="wordspanel">
			<list class="wordslist">
				<cell class="cellstyle cellbottom">
					<text class="textstyle">姓名</text>
					<input></input>
				</cell>
				<cell class="cellstyle cellbottom">
					<text class="textstyle">联系方式</text>
					<input></input>
				</cell>
				<cell class="cellstyle">
					<text class="textstyle">仓库地址</text>
					<input></input>
				</cell>
			</list>
		</div>
	</div>
</template>

<style scoped>
	.wordspanel {
		width:700px;
		height:400px;
		position:absolute;
/*		background-color:white;*/
		margin-left:25px;
		margin-top:500px;
		box-shadow:1px 1px 3px 1px #616161;
	}
	.cellstyle{
		height:100px;
	}
	.cellbottom{
		border-bottom-width:1px;
		border-color:#616161;
	}
	.textstyle{
		margin-top:20px;
	}
</style>
<script>
	import Navigator from '../components/navigator.vue';
	export default {
    	components: { Navigator}
  	};
</script>