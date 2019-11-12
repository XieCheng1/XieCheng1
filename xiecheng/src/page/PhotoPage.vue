<!--
 * @Description: 旅拍
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 15:32:08
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 17:05:51
 -->
<template>
    <div id="box">
        <Weizhi></Weizhi> 
        <TaverHot></TaverHot> 
        <HotNav></HotNav> 
        <PullPhoto></PullPhoto>
    </div>
</template>
<script>
import Weizhi from '../components/Weizhi';
import TaverHot from '../components/TaverHot';
import HotNav from '../components/HotNav';
import PullPhoto from '../components/PullPhoto';




export default {
    name:'PhotoPage',
     data(){
        return{
            
        }
    },
    components:{
        Weizhi,TaverHot,HotNav,PullPhoto
    }
}
</script>
<style scoped>

</style>