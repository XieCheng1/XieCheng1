<!--
 * @Author: yx
 * @Date: 2019-11-08 19:56:05
 * @LastEditors: yx
 * @LastEditTime: 2019-11-14 21:59:35
 * @Description: 首页
 -->

 <template>
    <div>
        <Search :cityname="this.$route.params.cid"></Search>
        <Banner></Banner>
        <TopNav style="top:-5%;"></TopNav>
        <Ticket></Ticket>
        <TopList type="热销排行榜" :cityname="this.$route.params.cid"></TopList>
        <SceneryList :cityname="this.$route.params.cid"></SceneryList>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import Search from '../components/Search';
import Banner from '../components/Banner';
import TopNav from '../components/TopNav';
import Ticket from '../components/Ticket';
import TopList from '../components/TopList';
import SceneryList from '../components/SceneryList';
import MyFooter from '../components/MyFooter';

export default {
  name: 'Index',
  props:['id','cityid'],
  data() {
      return {
          
      }
  },
  components:{
      Search,Banner,TopNav,Ticket,SceneryList,TopList,MyFooter
  },
  created() {
    //   console.log(this.cityid);
  },
  mounted() {
     console.log(this.$route.params.cid);
     console.log(this.$route.params.cid);
  },
}

</script>

<style>
body{
     background: #f6f6f6;
}
</style>
