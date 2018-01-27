<template>
	<div class="pagebackground">
		<wxc-minibar title=""
                   background-color="#29395c"
                   :left-button="leftButton"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick">
                   <text class="title" style="font-size:35px; color:white;" slot="middle">仓库详情</text>
		</wxc-minibar>
    	<slider class="slider">
      		<div class="frame" v-for="img in imageList">
        		<image class="bannerimage" resize="cover" :src="img.src"></image>
      		</div>
      		<indicator class="indicator"></indicator>
    	</slider>
    	<list>
    		<div class="backgroundwhite direction-row">
    			<div>
    				<text>{{whList[0].whName}}</text>
    				<div class="direction-row rows-space">
    					<text class="customtag" v-for="tag in whList[0].whTypes">{{tag}}</text>
    				</div>
    			</div>
    			<div>
    				<text class="tag" v-show="whList[0].status==0" style="background-color: #EF5F62;">立即预定</text>
					<text class="tag" v-show="whList[0].status==1" style="background-color: #bdbdbd;">不可预定</text>
    			</div>
    		</div>
    		<div class="backgroundwhite">
    			<cell><text>{{whList[0].colname01}}</text></cell>
    			<cell class="direction-row rows-space"><text>地面：{{whList[0].whMode}}</text><text>  库内高度：层高{{whList[0].whHigh}}</text></cell>
    		</div>
    		<div class="backgroundwhite">
    			<cell v-for="memo in whList[0].memo.split('，')">
    				<text>{{memo}}</text>
    			</cell>
    		</div>
    		<cell><text>上拉加载地图</text></cell>
    	</list>
    </div>
</template>
<style scoped>
	.tag{
		color: white;
		padding: 5px;
		padding-left: 15px;
		padding-right: 15px;
		border-radius: 50px;
		margin-left: 130px;
		margin-top: 22px;
	}
	.title{
		margin-left: -400px;
	}
	.pagebackground{
		background-color: #f2f3f4;
	}
	.bannerimage {
    	width: 750px;
    	height: 500px;
  	}
  	.backgroundwhite{
  		background-color: white;
  		margin-bottom: 10px;
  		padding-left: 80px;
  		padding-right: 80px;
  		padding-top: 40px;
  		padding-bottom: 40px;
  	}
  	.rows-space{
  		margin-top:40px;
  	}
  	.border-bottom{
  		border-bottom-width:1px;
  		border-bottom-color:#bdbdbd;
  	}
  	.customtag{
		width: 70px;
		padding-top: 2px;
		padding-bottom: 2px;
		margin-right: 5px;
		background-color: #EF5F62;
		align-items: center;
		font-size: 20px;
		color: white;
		border-radius: 2px;
	}
	.slider {
    	width: 750px;
    	height: 350px;
  	}
  	.direction-row{
  		flex-direction:row;
  	}
	.indicator {
		item-selected-color:rgba(183,28,28,0.7);
		right:0;
		bottom:0;
	}
</style>
<script>
	import { WxcMinibar,WxcTag } from 'weex-ui';
	var navigator = weex.requireModule('navigator');
	var stream = weex.requireModule('stream');
	export default {
  		components:{ Navigator,WxcMinibar,WxcTag },
    	data: () => ({
      		imageList: [
        		{ src: 'http://p.ruishunwl.com/Warehouse/Warehouse1-1.png'},
        		{ src: 'http://p.ruishunwl.com/Warehouse/Warehouse1-3.png'},
        		{ src: 'http://p.ruishunwl.com/Warehouse/Warehouse1-4.png'},
        		{ src: 'http://p.ruishunwl.com/Warehouse/Warehouse1-5.png'},
        	],
        	whList:"加载中....",
    	}),
    	created: function() {
    		var Url ='http://192.168.1.93:8888/rs-wms-zsc/maindata/getWareHouseList.do';
    		var me = this;
    		stream.fetch ({
	    			method: 'GET',
	    			url: Url,
	    			type:'json'
    			}, 
    			function(ret){
    				var r =ret.data;
    				me.whList = JSON.parse(r.data);
    			}
    		);
    		var bundleUrl = this.$getConfig().bundleUrl;
        	bundleUrl = new String(bundleUrl);
        	var nativeBase;
        	var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
        	var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        	if (isAndroidAssets) {
            	nativeBase = 'file://assets/dist/';
        	}
        	else if (isiOSAssets) {
            	nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        	}
        	else {
            var host = 'localhost:8081';
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            nativeBase = 'http://' + host + '/index.html?page=./dist/';
        	}
        	this.baseURL = nativeBase;
    	},
    	methods: {
      		minibarLeftButtonClick (event) {
        		navigator.push({
        			url: this.baseURL + '/index.vue'
        		})
        	}
    	}
	}
</script>