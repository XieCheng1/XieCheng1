<!--
 * @Author: yx
 * @Date: 2019-11-11 14:45:24
 * @LastEditors: yx
 * @LastEditTime: 2019-11-14 18:07:49
 * @Description: 客服
 -->


 <template>
    <div>
        <MyTop></MyTop>
        <Tips></Tips>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import MyTop from '../components/MyTop';
import Tips from '../components/Tips';
import MyFooter from '../components/MyFooter';

export default {
  name: 'CustService',
//   props:['msg'],
  data() {
      return {
          msg:""
      }
  },
  components:{
   MyTop,Tips,MyFooter
  }
}

</script>

<style>
body{
     background: #f6f6f6;
}
</style>
