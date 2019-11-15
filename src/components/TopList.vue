<!--
 * @Author: yx
 * @Date: 2019-11-09 10:23:20
 * @LastEditors: yx
 * @LastEditTime: 2019-11-15 00:24:15
 * @Description: 排行榜
 -->

 <template>
  <div class="topList">
      <div class="hello">
          <span class="el-icon-sunny"><i>9°C</i></span>
          <h4 id="welcity">您好，欢迎来到{{nowcity.cname}}</h4>
      </div>
      <div class="topCon">
          <p>{{type}}</p>
          <div class="topBox" v-for="(item,index) in tops" :key="index">
              <router-link :to='"/WuyiShan/"+item.pid' class="topA">
                <img :src="item.ph1">
                <span>排行榜</span>
                <div class="topBoxR">
                    <p>{{item.sname}}</p>
                    <span>票价：￥{{item.startprice}}起</span>
                    <span>销量：<b>{{item.soid}}</b></span>
                </div>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'TopList',
    props:['type','cityname'],
    data() {
        return {
            msg:"西安",
            tops:[],
            nowcity:[]
        }
    },
    created() {
        // console.log(this.cityname);
        // axios.get('/day566/part/hot?cid='+this.cityname)
        axios.get('/newhot')
      .then(res=>{
        // this.tops = res.data.top;//连后端
        this.tops = res.data[0].top;//模拟的
      })
      .catch(err=>{
          console.log(err);
      }),

      
    //    axios.get('day566/city1/all')
    axios.get('/must')
      .then(res=>{
		  	
		   for(let i in res.data){
				//   console.log(res.data[i])
				  if(res.data[i].cid==this.cityname){
					  this.nowcity = res.data[i]
				  }
			  }
			
      })
      .catch(err=>{
          	console.log(err);
      })
    },
    methods: {
         getHot(data){
          data.sort(function (obj1,obj2) {
              return obj2.bycount-obj1.bycount;
          });
          let arr = data.slice(0,3);
          return arr;
      }
    },
    mounted() {
		if(this.$route.params.cid==null){
            return document.getElementById("welcity").innerHTML='您好，欢迎来到'+'西安';
        }else{
            // document.getElementById("welcity").innerHTML='您好，欢迎来到'+this.cityname;
        }

	},
}
</script>

<style scoped>
.topList{
    width: 95%;
    /* overflow: hidden; */
    height: 3.1rem;
    margin: 0 auto;
    /* background: rgb(231, 200, 205); */
    margin-top: 1.5%;
    box-sizing: border-box;
}
.hello{
    width: 95%;
    font-size: 0.18rem;
    line-height: 0.3rem;
}
.hello span{
    float: left;
}
.hello h4{
    margin-left: 30%;
    font-size: 0.16rem;
}
i{
    font-style: normal;
    font-size: 12px;
    vertical-align: top;
}
.topCon{
    width: 93%;
    /* height: 3rem; */
    background: #fff;
    padding: 0.1rem;
    margin-top: 0.08rem;
    border-radius: 0.1rem;
    margin: 0 auto;
    /* box-sizing: border-box; */
    box-shadow: 0rem 0rem 0.05rem 0.01rem #ccc;
}
.topCon>p{
    font-weight: bold;
}
.topBox{
    width: 100%;
    height: 0.7rem;
    background: #f6f6f6;
    margin-top: 0.1rem;
    border-radius: 0.1rem;
     position: relative;
}
.topA{
    color: black;
}
.topA img{
    width: 30%;
    height: 100%;
    float: left;
    border-radius: 0.1rem;
   
}
.topA>span{
    background: rgb(245, 87, 87);
    position: absolute;
    top: 0;
    left: 0.06rem;
    padding: 0.03rem;
    font-size: 12px;
    color: #fff;
}
.topBoxR{
    float: left;
    margin-left: 0.2rem;
}
.topBoxR p{
    font-size: 0.18rem;
    line-height: 0.4rem;
}
.topBoxR span{
    line-height: 0.3rem;
    margin-right: 0.15rem;
}
</style>
