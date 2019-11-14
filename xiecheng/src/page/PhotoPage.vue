<!--
 * @Description: 旅拍
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 15:32:08
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-13 10:03:15
 -->
<template>
    <div id="box">
        <div id="mains">
            <Weizhi></Weizhi> 
            <TaverHot></TaverHot> 
        </div>
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
#box{
    display: flex;
    flex-direction: column;
}
#mains{
    flex: 1;
    overflow-y: auto;
}
</style>