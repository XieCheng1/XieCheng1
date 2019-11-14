<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 20:01:01
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-13 16:17:22
 -->
<!--
 * @Description: 旅拍
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 15:32:08
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 17:05:51
 -->
<template>
    <div id="box">
        <div id="mains">
             <GoBack></GoBack>
             <DataTop></DataTop>  
        </div>
       <PeopleInf id="peopleInf"></PeopleInf>
    </div>
</template>
<script>
import GoBack from '../components/GoBack';
import DataTop from '../components/DataTop';
import PeopleInf from '../components/PeopleInf';

export default {
    name:'DataPage',
     data(){
        return{
            
        }
    },
    components:{
       GoBack,DataTop,PeopleInf
    }
}
</script>
<style scoped>
    html.body{
        height: 100%;
    }
</style>