<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-09 09:17:12
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-13 23:34:02
 -->
<template>
<div id="box">
    <GoBack></GoBack>
    <Banner01></Banner01> 
    <Decoration id="decoration"></Decoration>
    <Nav class="bgv"></Nav>
    <fatherToChild class="bgv" title="门票+交通+项目"></fatherToChild>
    <traffic></traffic>
    <fatherToChild class="bgv" title="推荐商品"></fatherToChild>
    <TuijianNav class="bgv"></TuijianNav>
    <Tuijian class="bgv" id="Tuijian"></Tuijian>
    <fatherToChild class="bgv" title="景区内游玩"></fatherToChild>
    <Inplay class="bgv"></Inplay>
    <fatherToChild class="bgv" title="游友点评"></fatherToChild>
    <DianPing class="bgv"></DianPing>
    <Footer></Footer> 
</div>
   
</template>
<script>
import GoBack from '../components/GoBack';
import Footer from '../components/Footer';
import Banner01 from '../components/Banner01';
import Decoration from '../components/Decoration';
import Nav from '../components/Nav';
import fatherToChild from '../components/fatherToChild';
import traffic from '../components/traffic';
import TuijianNav from '../components/TuijianNav';
import Tuijian from '../components/Tuijian';
import Inplay from '../components/Inplay';
import DianPing from '../components/DianPing';


export default {
    name:'WuyiShan',
    data(){
        return{
            
        }
    },
    components:{
        GoBack,Footer,Decoration,Banner01,Nav,fatherToChild
        ,traffic,TuijianNav,
        // Tuijian,
        Inplay,DianPing
    }

}
</script>
<style scoped>
#box{
    overflow: hidden;
}
#decoration{
    position: relative;
    top: -15px;
    z-index: 2;
}
#Tuijian{
    margin-top: 15px;
}
.bgv{
    background-color: #fff;
}
</style>