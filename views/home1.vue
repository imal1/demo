<template>
	<div>
		<wxc-minibar class="navigator" title="" background-color="#374361" text-color="#e53935" leftButton="">
			<text class="navtitle" style="font-size:35px; color:white;" slot="middle">订 仓</text>
			<wxc-icon class="navicon" name="search" slot="right" @click="appear"></wxc-icon>
		</wxc-minibar>
		<Searchbar class="searchbar" v-show="isshow"></Searchbar>
		<div class="waterfall">
			<slider class="slider" interval="3000" auto-play="true">
				<div class="frame" v-for="img in imageList">
					<image class="bannerimage" resize="cover" :src="img.src"></image>
				</div>
				<indicator class="indicator"></indicator>
			</slider>
			<!--<div class="itemcontainer" v-for="item in whList">
				<image class="image" :src="item.imgUrls[0]"></image>
				<div class="textcontainer">
					<text style="font-weight:500;font-size:26;">111{{item.whName}}</text>
					<div class="tagcontainer">
						<text class="customtag" v-for="tag in item.whTypes">222{{tag}}</text>
					</div>
					<text style="color:#424242;font-size:22;">333面积:{{item.whArea}}  层高:{{item.whHigh}}</text>
				</div>
				<wxc-tag class="tag" v-show="item.status==0" tag-color="#EF5F62" font-color=white value="订仓"></wxc-tag>
				<wxc-tag class="tag" v-show="item.status==1" tag-color="#4B68A5" font-color=white value="满仓"></wxc-tag>
			</div>
			<div class="reservespace"></div>-->
		</div>
	</div>
</template>

<style scoped>
	.navigator {
		border-bottom-width: 2px;
		border-bottom-color: #161F33;
	}
	
	.navtitle {
		margin-left: -500px;
	}
	
	.navicon {
		color: white;
		font-size: 38px;
		left: -50px;
	}
	
	.searchbar {
		position: sticky;
	}
	
	.tagcontainer {
		flex-direction: row;
	}
	
	.customtag {
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
	
	.reservespace {
		height: 120px;
	}
	
	.itemcontainer {
		margin: 5px;
		background-color: white;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 15px;
		flex-direction: row;
		border-bottom-width: 2px;
		border-bottom-color: #bdbdbd;
		border-top-width: 1px;
		border-top-color: #eeeeee;
		width: 750px;
	}
	
	.bannerimage {
		width: 750px;
		height: 300px;
	}
	
	.slider {
		width: 750px;
		height: 300px;
	}
	
	.image {
		width: 160px;
		height: 110px;
		border-radius: 5px;
	}
	
	.textcontainer {
		margin-left: 30px;
		width: 400px;
		justify-content: space-between;
	}
	
	.tag {
		right: 10px;
		top: 41px;
	}
	
	.indicator {
		item-selected-color: rgba(183, 28, 28, 0.7);
		right: 0;
		bottom: 0;
	}
</style>
<script>
	import { WxcTag, WxcMinibar, WxcIcon } from 'weex-ui';
	import Searchbar from '../components/searchbar.vue';
	/*var navigator = weex.requireModule('navigator');*/
	var stream = weex.requireModule('stream');
	export default {
		components: {
			Searchbar,
			WxcTag,
			WxcMinibar,
			WxcIcon
		},
		data() {
			return {
				imageList: [
					{src: 'http://p.ruishunwl.com/app/1.png'},
					{src: 'http://p.ruishunwl.com/app/1.png'},
					{src: 'http://p.ruishunwl.com/app/1.png'}
				],
				whList: "加载中....",
				isshow: false
			}
		},
		created: function() {
			var Url = 'http://192.168.1.93:8888/rs-wms-zsc/maindata/getWareHouseList.do';
			var me = this;
			stream.fetch({
					method: 'GET',
					url: Url,
					type: 'jsonp'
				},
				function(ret) {
					var r = ret.data;
					me.whList = JSON.parse(r.data); 
					if(!ret.ok){me.getJsonpResult = "request failed";
        			}else{
          				var r = ret.data;
						me.whList = JSON.parse(r.data);
					}
				},function(response){
        			console.log('get jsonp in progress:'+response.length);
        			me.getJsonpResult = "bytes received:"+response.length;
				});
			},
			methods: {
				appear(event) {
				this.isshow = !this.isshow;
				}
			}
	};
</script>