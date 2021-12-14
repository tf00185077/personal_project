<template>
<div>
  <div id='first_site'>
    <h1 id="title">讀想。<br>獨享</h1>
    <swiper ref="mySwiper" :options="swiperOptions" style='overflow:hidden'>
      <swiper-slide v-for="(slide,index) in slides" :key="index">
      <div align="center" class="slide_outline"><img :src="slide" alt="" class="slide"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  <div id="second_site">
    <p class="text">關於讀享，有些事情我們想讓你知道<br>
       閱讀，常是一個人的消遣。<br>
       但，可以不只如此
    </p>
    <span class="horizone"></span>
    <div id="total_three_card">
      <div class="card first_card">
        <img src="../assets/pic/open-book.png"/>
        <p>閱讀<br>沒有最好的方法<br>
           沒有最適合的書<br>
            閱讀，是我們和自己的<br>
            對話</p>
        <router-link to="/read">閱讀</router-link>
      </div>
      <div class="card second_card">
        <img src="../assets/pic/shared-folder.png"/>
        <p>閱讀是我們和自己的對話<br>
我們享受在其中<br>
而且，我們知道<br>
分享更是一種樂事</p>
        <router-link to="/share">分享</router-link>
      </div>
      <div class="card third_card">
        <img src="../assets/pic/juggler.png"/>
        <p>分享，總是想要當面<br>
對話不只是說與聽<br>
更是心靈上的交流<br>
見面 三分情</p>
        <router-link to="/event">活動</router-link>
      </div>
    </div>
  </div>
  <hr>
  <div id="third_site">
    <div class="left_site">
    <img src="../assets/pic/reading.jpg">
    </div>
    <div class="right_site">
    <ul>
    <li><router-link to="/">懸疑</router-link></li>
    <li><router-link to="/">驚悚</router-link></li>
    <li><router-link to="/">愛情</router-link></li>
    <li><router-link to="/">勵志</router-link></li>
    <li><router-link to="/">傳記</router-link></li>
    <li><router-link to="/">童話</router-link></li>
    <li><router-link to="/">知識</router-link></li>
    <li><router-link to="/">史實</router-link></li>
    </ul>
    </div>
  </div>
  <hr>
  <div id="forth_site">
    <div class="outline">
      <div class="join_us">
        <p>註冊會員<br>
不用任何的資格<br>
不收取任何的費用</p>
<router-link to="/">註冊</router-link>
      </div>
      <div class="descript" :style="backgroundImage">
        <p>透過活動，我們有了更多的機會，和彼此分享<br>
書、興趣、生活<br>
亦或<br>
任何美好的</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  metaInfo:{
    title:"HOME",
    meta: [
      { name: 'description', content: '讀享首頁' },
      { name: 'description', content: '讀享資訊頁' },
    ]
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
         autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        loop:true,
      },
      slides :[
                require('../assets/pic/slide1.jpg'),
                require('../assets/pic/slide2.jpg'),
                require('../assets/pic/slide3.jpg'),
                require('../assets/pic/slide4.jpg'),
                require('../assets/pic/slide5.jpg'),  
            ],
      backgroundImage:{
        backgroundImage:"url("+require('../assets/pic/children.jpg')+")",
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover',
        backgroundPosition:'center'
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    
  },
  mounted() {
    window.scrollTo(0, 0)
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(5,2000, true)
  },
  activated(){
    window.scrollTo(0, 0)
  }
};
</script>
<style lang="scss" scoped>
#first_site{
  position:relative;
  #title{
    position:absolute;
    bottom:5px;
    right:0;
    z-index:997;
    width:100%;
    background:rgba(0,0,0,.5);
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:white;
    padding-right:100px;
    font-size:50px;
  }
  .slide_outline{
    width:100%;
    height:700px;
    margin:0 auto;
    .slide{
      display:inline-block;
      margin:0 auto;
      width:100%;
      height:100%;
      object-fit:cover;
    }
  }
}
#second_site{
  width:100%;
  max-width:1200px;
  margin:0 auto 50px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  p.text{
    text-align:center;
    font-size:18px;
    font-weight:900;
    padding:20px 20px 10px;
    margin-bottom:0;
  }
  #total_three_card{
    width:100%;
    max-width:1200px;
    margin:20px auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:50px 0;
    .card{
      height:100%;
      margin:auto;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
      border-radius:5px;
      border-left:1px solid white;
      border-top:1px solid white;
      box-shadow:8px 8px 10px rgba(0,0,0,.2);
      background:#83B4C7;
      img{
        margin-top:20px;
        margin-bottom:20px;
        width:80px;
        height:80px;
        object-fit:contain;
      }
      p{
        margin:0;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        padding:20px;
        width:230px;
        line-height:24px;
        color:white;
      }
      a{
        margin:10px;
        padding:5px;
        text-decoration:none;
        width:100%;
        text-align:center;
        color:white;
        background:rgba(0,0,0,0);
        transition:.3s;
        border-top:1px solid black;
        border-bottom:1px solid black;
        &:hover{
          background:rgba(0,0,0,.7)
        }
      }
    }
  }
}
#third_site{
  width:100%;
  max-width:1200px;
  margin:50px auto 50px;
  display:flex;
  .left_site{
    width:400px;
    border-radius:10px;
    overflow:hidden;
    box-shadow:$shadow;
    // flex:1;
    img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
  }
  .right_site{
    flex:1;
    height:100%;
    ul{
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      list-style:none;
      margin:0;
      padding:0;
      li{
        height:calc(100%/8);
        display:flex;
        align-items:center;
        border-bottom:1px solid rgba(255,255,255,.5);
        // border-radius:50px 0 0 50px;
        color:white;
        cursor:pointer;
        background: linear-gradient(90deg,rgba(171,245,186,0)10%, rgba(171,245,186,.7) 40%,rgba(171,245,186,0) );
      background-size: 0% 100%;
      background-repeat: no-repeat;
      background-position: center;
      transition: .5s;
      text-align:center;
      &:hover {
        background-size: 100% 100%;
        
        a{
          color:black;
          font-weight:800
        }
      }
      a{
        width:100%;
        color:white;
        text-decoration:none;
        padding:15px;
      }
      }
    }
  }
}
#forth_site{
  width:100%;
  max-width:1200px;
  margin:100px auto 100px;
  .outline{
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    justify-content:flex-end;
    .join_us{
      height:300px;
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:center;
      position:relative;
      z-index:2;
      transform:translate(50px,120px);
      background:$sup_color;
      border-radius:5px;
      box-shadow:$shadow,$shadow;
      border-top:1px solid white;
      border-left:1px solid white;
      p{
        padding:20px;
        color:white;
        white-space:nowrap;
      }
      a{
        width:100%;
        padding:5px;
        text-align:center;
        text-decoration:none;
        color:white;
        border-top:1px solid black;
        border-bottom:1px solid black;
        background:rgba(0,0,0,.3);
        transition:.2s;
        &:hover{
          background:rgba(0,0,0,.6)
        }
      }
    }
  .descript{
      width:80%;
      position:relative;
      display:flex;
      p{
        margin-top:400px;
        margin-bottom:0;
        display:flex;
        align-items:center;
        justify-content:center;
        background:rgba(0,0,0,.5);
        width:100%;
        color:white;
        padding:20px 0 ;
        // margin:0;
      }
    }
  }
}
@media screen and (max-width:500px) {
  #third_site{
    flex-direction: column;
    align-items: center;
    .left_site{
      width:100%;
      padding:5px;
    }
    .right_site{
      width:100%;
      ul{
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: flex-start;
        align-items:center;
        li{ 
          flex:1;
          border:1px dashed rgba(255,255,255,.4);
          background: linear-gradient(180deg,rgba(171,245,186,.7) 100%);
          background-size: 100% 0%;
          background-repeat: no-repeat;
          background-position: center;
          transition: .5s;
        }
      }
    }
  }
  #forth_site .outline{
    flex-direction: column;
    padding:10px;
    .join_us{
      transform:none;
      width:100%;
      margin:0 auto;
    }
    .descript{
      width:100%;
    }
  }
}
</style>