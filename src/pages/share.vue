<template>
  <div>
    <section id="first_site">
      <div class="left_site">
        <img src="../assets/pic/reading.jpg" />
      </div>
      <div class="right_site" :style="backgroundImage">
        <h1>關於<br />分享</h1>
        <p>
          看書，最大的樂趣<br />
          莫過於<br />
          找到知己
        </p>
      </div>
    </section>
    <section id="second_site">
      <h1>想了解別人的想法嗎</h1>
      <div class="showMessage">
        <p class="about">總有點什麼想說<br />你的想法<br />我們聽到了</p>
        <div class="message_outline">
          <div class="card_outline" v-for="(test, index) in 3" :key="index">
            <div class="ribon">
              <img :src="ribon[index]" alt="" />
            </div>
            <div class="card">
              <div class="textarea">
                <p class="name">王小涵</p>
                <p class="content">
                  詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button><router-link to="message">查看所有留言</router-link></button>
    </section>
    <hr>
    <section id="third_site">
        <h1>你也想說點什麼嗎</h1>
        <p>對於勇於分享的你，我們不限定內容，從書的外觀、包裝、標題
乃至於書序、內文、結論。<br>當然，還有你的心得。<br>我們歡迎所有有話想說的你。</p>
    <button><router-link to="message">前往留言板</router-link></button>
    </section>
  </div>
</template>
<script>
export default {
  name: "share",
  metaInfo:{
    title:"Share",
    meta:[
      {name:"description",content:"讀享分享區"},
      {name:"description",content:"留言頁面導覽"},
    ]
  },
  data() {
    return {
      backgroundImage: {
        backgroundImage: "url(" + require("../assets/pic/share.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      ribon: [
        require("../assets/pic/ribon1.png"),
        require("../assets/pic/ribon2.png"),
        require("../assets/pic/ribon3.png"),
      ],
    };
  },
  mounted(){
    window.scrollTo(0, 0)
  },
  activated(){
    window.scrollTo(0, 0)
    this.$emit('changeColor',"green")
  }
};
</script>
<style lang="scss" scoped>
#first_site {
  width: 100%;
  // max-width:1200px;
  margin: 0px auto 50px;
  display: flex;
  // justify-content:center;
  // align-items:center;
  .left_site {
    width: 400px;
    height: 400px;
    margin: 0;
    padding: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right_site {
    flex: 1;
    min-width:180px;
    height: 400px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      width: 100%;
      margin: 0;
      padding: 20px 40px;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      font-size: 40px;
      font-weight: 400;
      display: flex;
      // justify-content: flex-end;
    }
    p {
      padding: 10px 20px;
      color: white;
      margin-top: 50px;
      margin-left: 50px;
      line-height: 24px;
    }
  }
}
#second_site {
  width: 100%;
  max-width: 1200px;
  margin: 100px auto 50px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: $shadow;
  background:rgba(0,0,0,.4);
  h1 {
    font-size: 36px;
    margin: 0;
    padding: 0;
    color: white;
    // background:rgba(255,255,255,.5)
  }
  div.showMessage {
    display: flex;
    align-items: center;
    p.about {
      color: white;
      font-size:18px;
      line-height:28px;
    }
    div.message_outline {
      margin-top: 100px;
      flex: 1;
      display: flex;
      justify-content: space-evenly;
    }
  }
  button {
    width: 200px;
    margin-top: 50px;
    align-self: flex-end;
    height: 50px;
    border:none;
    padding:0;
    border-radius:10px;
    background:$sup_color;
    a{
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    background:$sup_color;
    box-shadow:inset -5px -5px 5px rgba(0,0,0,.4);
    border-radius: 10px;
    &:hover{
        background:$hover_color;
        color:#191919;
        text-decoration:underline #191919;
    }
    &:active{
        box-shadow:inset 2px 2px 5px 1px rgba(0,0,0,.5)
    }
    }
    
  }
}
div.card_outline {
    position:relative;
  .ribon {
    position: absolute;
    z-index:2;
    width: 100px;
    height: 30px;
    left: 55%;
    top: -20px;
    transform: translateX(-50%) rotate(110deg);
    &:after{
        content:'';
        display:inline-block;
        width:12px;
        height:12px;
        position:absolute;
        background:#9CB6C8;
        box-shadow:inset 0 0 2px rgba(0,0,0,.6);
        right:15px;
        top:50%;
        transform:translateY(-50%);
        border-radius:50%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  div.card {
    position: relative;
    height: 400px;
    width: 200px;
    display: flex;
    padding: 10px;
    border-radius: 5px;
    background: $sup_color;
    animation: shake 3s linear 0s infinite;
    transform-origin:top center;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    .textarea {
      display: flex;
      margin: 10px;
      width: 100%;
      p.name {
        align-self: flex-end;
        writing-mode: vertical-rl;
        margin: 0;
        padding: 0;
        color: white;
      }
      p.content {
        flex: 1;
        writing-mode: vertical-rl;
        margin: 0;
        padding: 30px 0 0 20px;
        color: white;
      }
    }
  }
}
#third_site{
    width:100%;
    max-width:1200px;
    margin:50px auto ;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background:rgba(0,0,0,.4);
    border-radius:5px;
    box-shadow: $shadow;
    padding:20px 20px 40px;
    h1{
        font-size:36px;
        color:white;
    }
    p{
        color:white;
    }
    button{
        // height:40px;
        margin-top:20px;
        border:none;
        padding:0;
        border-radius: 10px;
        a{
            display:flex;
            justify-content: center;
            align-items:center;
            padding:20px;
            border-radius:5px;
            background:$sup_color;
            font-size:24px;
            width:100%;
            height:100%;
            color:white;
            text-decoration: none;
            box-shadow:inset -5px -5px 10px rgba(0,0,0,.5);
            &:hover{
                background:$hover_color;
                color:#191919;
                font-weight:600;
                text-decoration:underline ;
            }
            &:active{
                box-shadow:inset 5px 5px 10px rgba(0,0,0,.5);
            }
            
        }
    }
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(00deg);
  }
}
@keyframes shakeRibon {
  0% {
    // left:50%;
    // top:-20px;
    transform: rotate(110deg) translateX(-50%);
  }
  25% {
    // left:50%;
    // top:-20px;
    transform: rotate(120deg) translateX(-50%);
  }
  50% {
    // left:50%;
    // top:-20px;
    transform: rotate(110deg) translateX(-50%);
  }
  75% {
    // left:50%;
    // top:-20px;
    transform: rotate(100deg) translateX(-50%);
  }
  100% {
    // left:50%;
    // top:-20px;
    transform: rotate(110deg) translateX(-50%);
  }
}
@media screen and (max-width:798px) {
  #second_site{
    overflow: hidden;
  }
  #second_site div.showMessage{
    flex-direction: column;
    
  }
  #second_site div.showMessage div.message_outline{
    flex-wrap:wrap;
    gap:20px;
  }
}
@media screen and (max-width:500px) {
  #first_site .left_site{
    display:none;
  }
  #second_site button{
    align-self: center;
  }
}
</style>