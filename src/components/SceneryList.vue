<!--
 * @Author: yx
 * @Date: 2019-11-08 23:35:12
 * @LastEditors: yx
 * @LastEditTime: 2019-11-15 00:25:07
 * @Description: 新增景点
 -->

 <template>
    
    <div class="sceList">
        <h3>热门景点</h3>
        <div class="secL">
             <div class="secBox" v-for="(item,index) in scenerys" :key="index">
                <router-link :to='"/WuyiShan/"+item.pid'>
                    <img :src="item.ph1">
                    <div class="sceR">
                        <p>{{item.sname}}</p>
                        <span>票价：<i>￥{{item.startprice}}起</i></span>
                    </div>
                    <div class="jd">景点</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SceneryList',
  props:['type','cityname'],
  data() {
      return {
          scenerys:[],
      }
  },
  created() {
    //    console.log(this.cityname);
        // axios.get('/day566/part/hot?cid='+this.cityname)
        axios.get('/newhot')
      .then(res=>{
        // this.scenerys = res.data.New;//连后端
        this.scenerys = res.data[1].New;//模拟的
      })
      .catch(err=>{
          console.log(err);
      })
  },
 
}

</script>

<style scoped>
.sceList{
    width: 95%;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 2.5%;
    margin-bottom: 0.5rem;
}
.sceList h3{
    width: 100%;
    height: 0.3rem;
    /* text-align: center; */
    margin-left: 0.1rem;
    font-size: 14px;
    font-weight: bold;
}
.secL{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.secBox{
    width: 47.5%;
    /* height: 1.7rem; */
    padding-bottom: 0.08rem;
    position: relative;
}
.secBox img{
    width: 100%;
    height: 1.5rem;
    border-top-left-radius: 0.08rem;
    border-top-right-radius: 0.08rem;
}
.secBox a{
    color: black;
}
.sceR{
    padding: 0.05rem;
    background: #fff;
}
.sceR p{
    line-height: 0.24rem;
}
.sceR span{
    font-size: 12px;
}
.sceR i{
    color: rgb(250, 68, 68);
    font-size: 14px;
}
.jd{
    width: 0.35rem;
    height: 0.2rem;
    background: rgb(0,0,0,0.7);
    color: #ddd;
    font-size: 0.12rem;
    line-height: 0.2rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 15;
     border-top-left-radius: 0.08rem;
    border-bottom-right-radius: 0.04rem;
}
</style>
