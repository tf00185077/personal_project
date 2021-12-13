<template>
  <div id="forWidth">
    <div id="header_bar">
      <p class="title" @click="sendTitle('red')"><router-link to="/">讀。享</router-link></p>
      <ul class="select_page">
        <li :class="{'color':color=='blue'}" @click="sendTitle('blue')"><router-link to="/read" >閱讀</router-link></li>
        <li :class="{'color':color=='green'}" @click="sendTitle('green')"><router-link to="/share" >分享</router-link></li>
        <li :class="{'color':color=='pink'}" @click="sendTitle('pink')"><router-link to="/event" >活動</router-link></li>
        <li :class="{'color':color=='yellow'}" @click="sendTitle('yellow')"><router-link to="/" >書籤</router-link></li>
      </ul>
      <p class="assign">登入</p>
    </div>
  </div>
</template>
<script>

export default {
  name: "myheader",
  props:['color'],
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
</style>