<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 20:01:01
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-12 09:59:36
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
       <DataTop></DataTop>  
       <PeopleInf></PeopleInf>
    </div>
</template>
<script>
import DataTop from '../components/DataTop';
import PeopleInf from '../components/PeopleInf';

export default {
    name:'DataPage',
     data(){
        return{
            
        }
    },
    components:{
       DataTop,PeopleInf
    }
}
</script>
<style scoped>

</style>