<template>
  <div>
    <section class="total_message">
      
        <h1>留言板</h1>
        <div class="textarea_outline">
          <p class="descript">大家的想法<br />匯聚在此處</p>
          <div class="message">
            <div class="card_outline" :class="{new_card_outline1:newCardClass[(Math.floor(Math.random()*2))],new_card_outline2:newCardClass[(Math.floor(Math.random()*2))],new_card_outline3:newCardClass[(Math.floor(Math.random()*2))]}" v-for="(test, index) in 6" :key="index">
              <div class="ribon">
                <img :src="require('../assets/pic/ribon'+(Math.floor(Math.random()*4))+'.png')" alt="" />
              </div>
              <div class="card" :style="{background:'rgb('+(Math.floor(Math.random()*255))+','+(Math.floor(Math.random()*255))+','+(Math.floor(Math.random()*255))+')'}">
                <div class="textarea">
                  <p class="name">王小涵</p>
                  <p class="content">
                    詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容詩籤內容
                  </p>
                </div>
              </div>
            </div>
<!-- 以下為新增書籤 -->
            <div class="card_outline" :class="{new_card_outline1:newCardClass[(Math.floor(Math.random()*2))],new_card_outline2:newCardClass[(Math.floor(Math.random()*2))],new_card_outline3:newCardClass[(Math.floor(Math.random()*2))]}" v-for="(test, index) in newBookMark" :key="index">
              <div class="ribon">
                <img :src="require('../assets/pic/ribon'+test.ribonNumber+'.png')" alt="" />
              </div>
              <div class="card" :style="{background:test.color}">
                <div class="textarea">
                  <p class="name">{{test.name}}</p>
                  <p class="content">
                    {{test.text}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
    <section id="write_message">
        <div class="left_site">
            <h1>現在，換你了</h1>
            <p>大聲的<br>把你的想法<br>分享出來吧</p>
        </div>
        <div class="middle_site">
            <div class="card_outline" :style="{background:changeColor}">
              <div class="ribon">
                <img :src="require('../assets/pic/ribon'+changeRibon+'.png')" alt="" />
              </div>
              <div class="card">
                <div class="textarea">
                  <p class="name" >{{name}}</p>
                  <p class="content">{{text}}</p>
                </div>
              </div>
            </div>
        </div>
        <div class="right_site">
            <div class="choose_ribon">
              <div class="img_outline" v-for="(test,index) in 4" :key="index">
                <img :src="require('../assets/pic/ribon'+index+'.png')" alt="" @click="changeRibon=index">
              </div>
              <!-- <div class="img_outline">
                <img src="../assets/pic/ribon1.png" alt="" @click="changeRibon=1">
              </div>
              <div class="img_outline">
                <img src="../assets/pic/ribon2.png" alt="" @click="changeRibon=2">
              </div>
              <div class="img_outline">
                <img src="../assets/pic/ribon3.png" alt="" @click="changeRibon=3">
              </div> -->
                
            </div>
            <div class="choose_color">
                <div class="for_choose" :style="{background:'#9CB6C8'}" @click="changeColor='#9CB6C8'"></div>
                <div class="for_choose" :style="{background:'#4CC1A9'}" @click="changeColor='#4CC1A9'"></div>
                <div class="for_choose" :style="{background:'#689B4B'}" @click="changeColor='#689B4B'"></div>
                <div class="for_choose" :style="{background:'#4D4392'}" @click="changeColor='#4D4392'"></div>
            </div>
            <div class="write_area">
              <textarea name="" id="" cols="30" rows="10" placeholder="請填入你想寫上的話" v-model.lazy="text"></textarea>
              <input type="text" placeholder="留名" v-model.lazy="name">
              <button @click="writeNewBookMark">掛上書籤</button>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "message",
  data() {
    return {
      changeColor:'#4D4392',
      changeRibon:0,
      name:'',
      text:'',
      newBookMark:[],
      newCardClass:[0,1],
    };
  },
  methods:{
    writeNewBookMark(){
      let bookMark = {
        name:this.name,
        text:this.text,
        ribonNumber:this.changeRibon,
        color:this.changeColor
      };
      this.newBookMark.push(bookMark);
      this.name='';
      this.text='';
      this.changeRibon=0;
    }
  },
};
</script>
<style lang="scss" scoped>
section.total_message{
    width:100%;
    max-width: 1200px;
    margin:100px auto 100px;
    display:flex;
    flex-direction: column;
    border-radius:5px;
    box-shadow:$shadow;
    background:rgba(0,0,0,.4);
    padding:20px 20px 50px;
    h1{
        margin:0;
        font-size:36px;
        color:white;
        // background:rgba(0,0,0,.5);
        padding:20px;
    }
    .textarea_outline{
        display:flex;
        // align-items:center;
        padding:20px;
        p.descript{
            color:white;
            margin-top:40px;
            font-size:18px;
            line-height:28px;
        }
    }
}
.message {
  margin-top: 40px;
  margin-left:20px;
  flex: 1;
  display: grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px 8px;
  padding:10px;
  div.card_outline {
    position: relative;
    margin:0 auto;
    .ribon {
      position: absolute;
      z-index: 2;
      width: 100px;
      height: 30px;
      left: 55%;
      top: -20px;
      transform: translateX(-50%) rotate(110deg);
      &:after {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        position: absolute;
        background: #9cb6c8;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.6);
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
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
      width: 190px;
      display: flex;
      padding: 10px;
      border-radius: 5px;
      background: $sup_color;
      // animation: shake1 3s linear 0s;
      // transform-origin:top center;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
      transform-origin: top center;
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
  div.new_card_outline1 {
    position: relative;
    margin:0 auto;
    .ribon {
      position: absolute;
      z-index: 2;
      width: 100px;
      height: 30px;
      left: 55%;
      top: -20px;
      transform: translateX(-50%) rotate(110deg);
      &:after {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        position: absolute;
        background: #9cb6c8;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.6);
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
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
      width: 190px;
      display: flex;
      padding: 10px;
      border-radius: 5px;
      background: $sup_color;
      animation: shake1 3s linear 0s;
      transform-origin:top center;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
      transform-origin: top center;
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
  div.new_card_outline2 {
    position: relative;
    margin:0 auto;
    .ribon {
      position: absolute;
      z-index: 2;
      width: 100px;
      height: 30px;
      left: 55%;
      top: -20px;
      transform: translateX(-50%) rotate(110deg);
      &:after {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        position: absolute;
        background: #9cb6c8;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.6);
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
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
      width: 190px;
      display: flex;
      padding: 10px;
      border-radius: 5px;
      background: $sup_color;
      animation: shake2 3s linear 0s;
      transform-origin:top center;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
      transform-origin: top center;
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
  div.new_card_outline3 {
    position: relative;
    margin:0 auto;
    .ribon {
      position: absolute;
      z-index: 2;
      width: 100px;
      height: 30px;
      left: 55%;
      top: -20px;
      transform: translateX(-50%) rotate(110deg);
      &:after {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        position: absolute;
        background: #9cb6c8;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.6);
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
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
      width: 190px;
      display: flex;
      padding: 10px;
      border-radius: 5px;
      background: $sup_color;
      animation: shake3 3s linear 0s;
      transform-origin:top center;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
      transform-origin: top center;
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
}
#write_message{
    display:flex;
    width:100%;
    max-width:1200px;
    margin:70px auto;
    background:rgba(0,0,0,.4);
    border-radius:5px;
    padding:30px 10px;
}
.left_site{
    display:flex;
    flex-direction:column;
    margin-right:30px;
    h1{
        font-size:36px;
        color:white;
        margin:0;
        padding:20px;
    }
    p{
        color:white;
        margin-top:50px;
        padding:20px;
        font-size:18px;
    }
}
.middle_site{
    display:flex;
    justify-content: center;
    align-items:center;
    .card_outline{
        display:flex;
        position:relative;
        height:600px;
        border-radius: 10px;
        .ribon{
            position:absolute;
            width:200px;
            height:40px;
            transform: translateX(-50%) rotate(90deg);
            left:50%;
            top:-20px;
            &:after{
                content:'';
                display:inline-block;
                width:12px;
                height:12px;
                position:absolute;
                background:#9CB6C8;
                box-shadow:inset 0 0 2px rgba(0,0,0,.6);
                right:40px;
                top:50%;
                transform:translateY(-50%);
                border-radius:50%;
            }
            img{
                height:100%;
                width:100%;
                object-fit:contain;
            }
        }
        .card{
            display:flex;
            align-items:center;
            border-radius: 5px;
            .textarea{
                height:100%;
                display:flex;
                width:300px;
                padding:30px;
                p{
                    writing-mode: vertical-rl;
                    display:flex;
                    width:40px;
                    margin:0;
                    padding:0;
                    color:white;
                    font-size:18px;
                }
                .name{
                    align-self: flex-end;
                }
                .content{
                    flex:1;
                    padding:100px 30px 20px;
                }
            }
        }
    }
    
}
.right_site{
    flex:1;
    margin-left:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    gap:20px;
    .choose_ribon{
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
        gap:10px;
        .img_outline{
          width:100%;
            overflow: hidden;
            display:inline-block;
            img{
              width:100%;
              height:100%;
              object-fit: contain;
              cursor: pointer;
            }
        }
    }
    .choose_color{
      display:grid;
      grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
      gap:10px;
      .for_choose{
        width:100%;
        height:100px;
        cursor: pointer;
      }
    }
  .write_area{
    display:flex;
    flex-direction: column;
    textarea{
      resize:none;
      background:rgba(255,255,255,1);
      border-radius:5px;
      border:none;
    }
    input{
      background:rgba(255,255,255,1);
      border-radius:3px;
      width:20%;
      height:30px;
      margin-top:20px;
      border:none;
    }
    button{
      width:100%;
      justify-items:flex-end;
      margin-top:20px;
      height:50px;
      border-radius:5px;
      font-size:20px;
      font-weight: 600;
      background:$sup_color;
      border:none;
      box-shadow:inset -5px -5px 5px rgba(0,0,0,.5);
      cursor:pointer;
      &:hover{
        background:$hover_color;
        text-decoration: underline;
      }
      &:active{
        box-shadow:inset 5px 5px 5px rgba(0,0,0,.5)
      }
    }
  }
}
@keyframes shake3 {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  65% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes shake2 {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(30deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(00deg);
  }
}
@keyframes shake1 {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(00deg);
  }
}
</style>