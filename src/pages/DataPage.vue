<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 20:01:01
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 17:59:35
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
             <Back></Back>
             <NewDatatop></NewDatatop>
             <Newpiao></Newpiao>
        </div>
       <PeopleInf id="peopleInf"></PeopleInf>
    </div>
</template>
<script>
import Back from '../components/Back';
import PeopleInf from '../components/PeopleInf';
import NewDatatop from '../components/NewDatatop';
import Newpiao from '../components/Newpiao';

export default {
    name:'DataPage',
     data(){
        return{
            
        }
    },
    components:{
       Back,
       NewDatatop,PeopleInf,Newpiao
    }
}
</script>
<style scoped>
    html.body{
        height: 100%;
    }
</style>