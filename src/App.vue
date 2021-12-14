<template>
  <div id="app" :style="{background:bgColor}">
    <myHeader @changeColor="changeColor" :color="cube"></myHeader>
    <keep-alive> <router-view style="marginTop:0px;" @changeColor="changeColor" /></keep-alive>
    <div id="camera">
      <div id="changeBgColor">
        <ul>
          <li @click="bgColor='#9CB6C8'"></li>
          <li @click="bgColor='#81BCE5'"></li>
          <li @click="bgColor='#818EE5'"></li>
        </ul>
      </div>
      <div id="space" :class="{'gray_page':cube=='gray','yellow_page':cube=='yellow','red_page':cube=='red','green_page':cube=='green','pink_page':cube=='pink','blue_page':cube=='blue'}">
        <div class="cube" id="front" @click="cube='red'" :class="{'check_cube':cube=='red'}"><router-link to="/"></router-link></div>
        <div class="cube" id="right" @click="cube='blue'" :class="{'check_cube':cube=='blue'}"><router-link to="/read"></router-link></div>
        <div class="cube" id="left" @click="cube='green'" :class="{'check_cube':cube=='green'}"><router-link to="/share"></router-link></div>
        <div class="cube" id="back" @click="cube='pink'" :class="{'check_cube':cube=='pink'}"><router-link to="/event"></router-link></div>
        <div class="cube" id="top" @click="cube='yellow'" :class="{'check_cube':cube=='yellow'}"><router-link to="/bookmark"></router-link></div>
        <div class="cube" id="bottom" @click="cube='gray'" :class="{'check_cube':cube=='gray'}"><router-link to="/"></router-link></div>
      </div>
    </div>
  <myfooter></myfooter>
  </div>
</template>

<script>
import myHeader from './components/header'
import myfooter from './components/footer'
export default {
  name: 'App',
  components:{
    myHeader,
    myfooter,
  },
  data(){
    return {
      cube:'red',
      bgColor:"#9CB6C8",
    }
  },
  mounted(){
    document.querySelector("body").style.margin=0
    document.querySelector("body").style.padding=0
  },
  methods: {
    
  changeColor(color){
    this.cube=color
  }
  },
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}
#camera{
  z-index:998;
  position:fixed;
  right:100px;
  bottom:10px;
  perspective: 512px;
  perspective-origin: 50% 50%;
  #changeBgColor{
    position:absolute;
    bottom:0;
    right:0;
    
    ul{
      display:flex;
      gap:10px;
      list-style: none;
      li{
        z-index:2;
        width:20px;
        height:20px;
        border-radius:50%;
        cursor: pointer;
        border:2px solid white;
      }
      li:nth-child(1){
        background: #9CB6C8;
      }
      li:nth-child(2){
        background: #81BCE5;
      }
      li:nth-child(3){
        background: #818EE5;
      }
    }
  }
  #space.red_page{
    transform:rotateX(325deg) rotateY(150deg);
  }
  #space.green_page{
    transform:rotateX(400deg) rotateY(65deg);
  }
  #space.pink_page{
    transform:rotateX(325deg) rotateY(-30deg);
  }
  #space.blue_page{
    transform:rotateX(325deg) rotateY(-125deg);
  }
  #space.yellow_page{
    transform:rotateX(240deg) rotateY(-125deg);
  }
  #space.gray_page{
    transform:rotateX(125deg) rotateY(-125deg);
  }

  #space{
    width:200px;
    height:200px;
    margin:0 auto;
    transform-style: preserve-3d;
    transform:rotateX(325deg) rotateY(0deg);
    transition:1s;
    position:relative;
    .cube{
      width:100px;
      height:100px;
      left:50px;
      top:50px;
      margin:0 auto;
      position:absolute;
      cursor: pointer;
      border:1px solid white;
      background: $cube_color;
      }
      .cube.check_cube{
        background:rgba(0,0,0,.7)
      }
      a{
        position:absolute;
        width:100%;
        height:100%;
      }
      #front{//正面
         transform: rotateZ(0) rotateY(0) rotateZ(0) translateZ(-50px);
      }
      #right{//右面
       transform: rotateY(-90deg) translateZ(-50px);
       
      }
      #left{//左面
         transform: rotateY(90deg) translateZ(-50px);
      }
      #top{//上面
         transform: rotateX(-90deg) translateZ(-50px);
      }
      #bottom{//下面
          transform: rotateX(90deg) translateZ(-50px);
      }
      #back{ //後面
        transform: rotateY(180deg) translateZ(-50px);
      }
    
  }
}
@media screen and (max-width:500px) {
  #camera{
    transform:Scale(.5);
    bottom:-50px;
    right:-30px;
  }
}
</style>
