<template>
  <div>
    <section id="first_site">
      <div class="img_outline">
        <img src="../assets/pic/children2.jpg" alt="">
      </div>
      <h1>偶爾<br />聚聚</h1>
      <p>
        智慧、友愛，<br />這是照亮我們的黑夜的惟一光亮。<br /><span>
          —— 羅曼羅蘭</span
        >
      </p>
    </section>
    <section id="second_site">
      <h1 class="title">凡走過必留下痕跡</h1>
      <p>我們能夠不只是網友<br />我們能夠靜著看書<br />不代表只能夠靜著看書</p>
      <div class="three_event">
        <div class="event_outline">
          <img src="../assets/pic/event1.jpg" alt="" />
          <h1>第一次活動</h1>
        </div>
        <div class="event_outline">
          <img src="../assets/pic/event2.jpg" alt="" />
          <h1>第二次活動</h1>
        </div>
        <div class="event_outline">
          <img src="../assets/pic/event3.jpg" alt="" />
          <h1>第三次活動</h1>
        </div>
      </div>
    </section>
    <section id="third_site">
      <div class="up_site">
        <div class="left_site">
          <h1>參與我們</h1>
          <p>
            沒有參與到之前的活動<br />紀錄中少了你<br />是不是覺得有點遺憾<br />現在，考慮參加哪一次的聚會呢？
          </p>
        </div>
        <div class="right_site">
          <div class="join_event_outline">
            <p>介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹</p>
            <button>暸解詳細</button>
          </div>
          <div class="join_event_outline">
            <p>介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹</p>
            <button>暸解詳細</button>
          </div>
          <div class="join_event_outline">
            <p>介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹介紹活動介紹活動介紹</p>
            <button>暸解詳細</button>
          </div>
        </div>
      </div>
      <div class="down_site">
          <router-link to="/">查看所有活動</router-link>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "event",
  metaInfo:{
    title:"Event",
    meta:[
      {name:"description",content:"舉辦活動"},
      {name:"description",content:"活動相關"},
    ]
  },
  data() {
    return {
      test:[],
    };
  },
  methods: {
    callAPI(){
      axios({
      url:"https://mocki.io/v1/2ac8e922-c9bd-4c0a-917b-413d535ec336",
      method:"GET",
      headers:{
		 'Content-Type': 'application/json'
		,'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Cache-Control,access_token, x-xsrf-token'
		,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
		,'Access-Control-Allow-Origin': '*'
	  }
    }).then((res)=>{
      console.log(res.data)
      this.test = res.data
    }).catch((err)=>{
      console.log(err)
    })
    }
  },
  mounted(){
    window.scrollTo(0, 0)
    this.callAPI()
  },
  activated(){
    window.scrollTo(0, 0)
  }
};
</script>
<style lang="scss" scoped>
#first_site{
  height:400px;
  width:100%;
  display:flex;
  position:relative;
  flex-direction: column;
  justify-content: space-around;
  .img_outline{
    position:absolute;
    width:100%;
    height:100%;
    z-index:1;
    img{
      width:100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h1{
    position:relative;
    z-index:1;
    padding:10px 40px;
    font-size:40px;
    background:rgba(0,0,0,.4);
    color:white;
  }
  p{
    position:relative;
    z-index:1;
    color:white;
    align-self: flex-end;
    padding-right:50px;
  }
}
#second_site{
  box-shadow:8px 8px 10px rgba(0,0,0,.2);
  max-width:1200px;
  width:100%;
  margin:0 auto;
  margin-top:50px;
  border-radius:5px;
  background:rgba(0,0,0,.5);
  padding:20px 40px 50px;
  .title{
    font-size:40px;
    font-weight:400;
    color:white;
  }
  p{
    color:white;
  }
  .three_event{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    gap:20px;
  }
}
.event_outline{
  position:relative;
  display:flex;
  flex-direction: column;
  height:300px;
  img{
    width:100%;
    height:100%;
    object-fit: cover;
    position:absolute;
  }
  h1{
    position:relative;
    width:100%;
    background:rgba(0,0,0,.8);
    color:white;
    padding:15px 20px;
    margin:0;
    font-size:24px;
    font-weight:400;
    cursor: pointer;
  }
}
#third_site{
  width:100%;
  max-width: 1200px;
  margin:70px auto;
  background:rgba(0,0,0,.4);
  border-radius:5px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding:20px;
  box-shadow:8px 8px 10px rgba(0,0,0,.2);
  .up_site{
    display:flex;
    justify-content: space-between;
    color:white;
    .left_site{
      display:flex;
      flex-direction: column;
      h1{
        margin:0;
        font-weight:400;
        font-size:40px;
      }
      p{
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
        padding:10px;
        box-shadow:3px 3px 5px rgba(0,0,0,.5);
        border-top:1px solid white;
        border-left:1px solid white;
        border-radius: 5px;
      }
    }
    .right_site{
      flex:1;
      margin-left:20px;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      gap:20px;
    }
  }
  .down_site{
      a{
        width:100%;
        display:inline-block;
        text-align:center;
        padding:15px;
        margin-top: 50px;
        background: $sup_color;
        border-radius: 5px;
        color:white;
        text-decoration: none;
        font-size:24px;
        box-shadow:3px 3px 5px rgba(0,0,0,.4);
        &:hover{
          text-decoration: underline;
          background: $hover_color;
          color:#151515;
          font-weight:600;
        }
        &:active{
          box-shadow:inset 3px 3px 5px rgba(0,0,0,.4);
        }
      }
  }
}
.join_event_outline{
  display:flex;
  justify-content: space-between;
  gap:10px;
  p{
    padding:5px 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 30px;
    // text-overflow: ellipsis;
    margin:0;
    background: $sup_color;
    border-radius:5px;
    box-shadow: 3px 3px 5px rgba(0,0,0,.4);
  }
  button{
    border:none;
    box-shadow: 3px 3px 5px rgba(0,0,0,.4);
    width:200px;
    border-radius:5px;
    background:$sup_color;
    cursor: pointer;
    font-size:16px;
    font-weight:600;
    &:hover{
       background: $hover_color;
      text-decoration: underline;
    }
    &:active{
         box-shadow:inset 3px 3px 5px rgba(0,0,0,.4);

    }
  }
}
@media screen and (max-width:730px) {
  .join_event_outline{
    flex-direction: column;
    button{
      width:100%;
    }
  }
}
@media screen and (max-width:500px) {
  #third_site .up_site{
    flex-direction: column;
  }
  #third_site .up_site .right_site{
    margin:0;
  }
}
</style>