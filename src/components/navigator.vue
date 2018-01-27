<template>
	<div>
      <wxc-minibar title=""
                   background-color="#374361"
                   text-color="#e53935"
                   leftButton="">
                   <text class="title" style="font-size:35px; color:white;" slot="middle">订 仓</text>
      </wxc-minibar>
	</div>
</template>
<style scoped>
	.title{
		margin-left: -500px;
	}
</style>
<script>
	import { WxcMinibar } from 'weex-ui';
	export default {
  	components:{WxcMinibar}
  };
</script>