<template>
  <div id="forWidth">
    <div id="header_bar">
      <p class="title" @click="sendTitle('red')"><router-link to="/">讀。享</router-link></p>
      <ul class="select_page">
        <li :class="{'color':color=='blue'}" @click="sendTitle('blue')"><router-link to="/read" >閱讀</router-link></li>
        <li :class="{'color':color=='green'}" @click="sendTitle('green')"><router-link to="/share" >分享</router-link></li>
        <li :class="{'color':color=='pink'}" @click="sendTitle('pink')"><router-link to="/event" >活動</router-link></li>
        <li :class="{'color':color=='yellow'}" @click="sendTitle('yellow')"><router-link to="/bookmark" >書籤</router-link></li>
      </ul>
      <img @click="open=open?false:true" src="../assets/pic/menu.png" alt="" class="hamburger">
    </div>
    <div id="RWDPage" :class='{"open":open}'>
      <ul id="rwd_select_page">
        <li :class="{'color':color=='blue'}" @click="sendTitle('blue');open=false"><router-link to="/read" >閱讀</router-link></li>
        <li :class="{'color':color=='green'}" @click="sendTitle('green');open=false"><router-link to="/share" >分享</router-link></li>
        <li :class="{'color':color=='pink'}" @click="sendTitle('pink');open=false"><router-link to="/event" >活動</router-link></li>
        <li :class="{'color':color=='yellow'}" @click="sendTitle('yellow');open=false"><router-link to="/bookmark" >書籤</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: "myheader",
  props:['color'],
  data(){
    return{
      open:false
    }
  },
  methods: {
    sendTitle(color){
      this.$emit('changeColor',color)
    }
  },
};
</script>
<style lang="scss" scoped>
#forWidth {
  width: 100%;
  height:58px;
  margin: 0;
  padding: 0;
  background: rgba(233,233,233,1);
  display: flex;
  position:sticky;
  top:0px;
  justify-content: center;
  align-items: center;
  z-index:999;
  box-shadow:$shadow;
}
#header_bar {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  
  justify-content: space-between;
  p.title {
    cursor: pointer;
    color: #515151;
    margin: 0;
    font-size: 32px;
    padding: 5px;
    a{
      color:#515151;
      text-decoration:none;
    }
    
  }
  ul {
    // flex:1;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      margin: 0 20px;
      background: linear-gradient(90deg, pink, purple);
      background-size: 0% 2px;
      background-repeat: no-repeat;
      background-position: left bottom;
      transition: 0.2s;
      &:hover {
        background-size: 100% 2px;
      }
      a {
        padding: 5px 10px;
        position: relative;
        border-radius: 5px;
        cursor: pointer;
        color: #515151;
        text-decoration: none;
      }
    }
      li.color{
      background-size: 100% 2px;
    }
  }
  p.assign {
    display: flex;
    justify-content: flex-end;
    color: #515151;
    border-radius: 5px;
    padding:5px 5px 0 5px;
    cursor: pointer;
    background: linear-gradient(90deg, pink, purple);
    background-size: 0% 2px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: 0.2s;
    &:hover {
      background-size: 100% 2px;
    }
  }
}
.hamburger{
  display:none;
}
@media screen and (max-width:500px) {
  
  #header_bar{
    ul{
      display:none;
    }
    .hamburger{
      display:inline-block;
      width:40px;
      height:40px;
      cursor:pointer;
      z-index:999;
    }
  }
  #RWDPage.open{
    transition:transform .5s;
    transform:translateY(0%);
    
  }
}
#RWDPage{
  position:fixed;
  transform:translateY(-100%);
  left:0;
  top:0;
  z-index:10;
  display:flex;
  background: rgba(0,0,0,.5);
  backdrop-filter: blur(10px);
  width:100%;
  height:100vh;
  transition:transform 1s;
  transform:translateY(-100%);
  #rwd_select_page{
      display:flex;
      flex-direction: column;
      list-style: none;
      width:100%;
      margin:80px 0 0 0;
      padding:0;
      text-align: center;
      li{
        border-bottom:1px dashed white;
        width:100%;
        a{
          font-size:28px;
          color:white;
          text-decoration: none;
          width:100%;
          display:inline-block;
          padding:20px;
          &:hover{
            background:rgba(0,0,0,.6);
            text-decoration: underline;
          }
        }
      }
    }
}
</style>