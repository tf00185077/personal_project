<template>
    <div>
      <section id="first_site">
        <div class="left_site">
            <img src="../assets/pic/reading.jpg">        
        </div>
        <div class="right_site" :style="backgroundImage">
            <h1>關於<br>閱讀</h1>
            <p>書是世界寶貴財富，<br>
            是國家和歷史的優秀遺產。<br>
            <span>——梭羅</span>
            </p>
            <button><router-link to="">前去找一本喜歡的書</router-link></button>
        </div>
      </section>
        <section id="second_site">
            <div class="left_site">
                <h1>讀書是有門檻的？</h1>
                <p>許多人，將會讀書視成人上人，將讀書和其他的娛樂劃清界線
。<br>給了我們，讀書是一件有門檻的事情，是一個富含挑戰性的任務，不是適合一般人的活動
。<br>我承認，許多書籍是艱深的、許多書籍是難懂的
但，不代表讀書就是困難的
。<br>回想起你第一本感興趣的書籍
喜歡上的契機，可能是封面、可能是書名、更可能毫無理由
。<br>仔細想想，當時翻閱它，真的有任何困難嗎？
</p>
            </div>
            <div class="right_site">
                <img src="../assets/pic/readbook.jpg">
            </div>
        </section>
        <hr>
        <section id="third_site">
            <h1 class="title">推薦你</h1>
            <p>若你一時想不起來，畢竟真的太久以前的事了
<br>不妨，從我們私心推薦的幾本開始
<br>也許並不是你第一時間會想到的
<br>但，這些帶給我們的快樂，相信也會帶給你不同的感動</p>
<div class="book">
    <ul>
        <li><router-link to=""><img src="../assets/pic/book1.jpg" alt=""></router-link></li>
        <li><router-link to=""><img src="../assets/pic/book1.jpg" alt=""></router-link></li>
        <li><router-link to=""><img src="../assets/pic/book1.jpg" alt=""></router-link></li>
        <li><router-link to=""><img src="../assets/pic/book1.jpg" alt=""></router-link></li>
    </ul>
</div>
        </section>
    </div>
</template>
<script>
export default {
    name:"read",
    metaInfo:{
    title:"Read",
    meta:[
      {name:"description",content:"讀享-關於閱讀"},
      {name:"description",content:"關於讀書"},
    ]
  },
    data(){
        return {
            backgroundImage:{
            backgroundImage:"url("+require('../assets/pic/slide3.jpg')+")",
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover',
            backgroundPosition:'center'
        },
        }
    },
    mounted(){
        window.scrollTo(0, 0)
    },
    activated(){
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
#first_site{
    width:100%;
    // max-width:1200px;
    margin: 0px auto 50px;
    display:flex;
    // justify-content:center;
    // align-items:center;
    .left_site{
        width:400px;
        height:400px;
        margin:0;
        padding:0;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
    .right_site{
        flex:1;
        height:400px;
        margin:0;
        padding:0;
        display:flex;
        flex-direction:column;
        h1{
            width:100%;
            margin:0;
            padding:20px 40px;
            background:rgba(0,0,0,.4);
            color:white;
            font-size:40px;
            font-weight:400;
            display:flex;
            justify-content: flex-end;
        }
        p{
            padding:10px 20px;
            color:white;
            margin-top:50px;
            margin-left:50px;
            line-height:24px;
            span{
                // color:black;
                font-weight:900
            }
        }
        button{
            width:200px;
            height:50px;
            border-radius:5px;
            font-size:16px;
            margin-left:50px;
            background:$sup_color;
            cursor:pointer;
            border:none;
            border-right:1px solid white;
            border-bottom:1px solid white;
            box-shadow:inset -3px -3px 6px 3px rgba(0,0,0,.3);

            &:hover{
                background:$hover_color;
                font-weight:600;
                a{
                    color:#191919
                }
            }
            &:active{
                box-shadow:inset 3px 3px 6px 3px rgba(0,0,0,.3);
            }
            a{
                text-decoration: none;
                color:white;
            }
        }
    }
}
#second_site{
    width:100%;
    max-width:1200px;
    border-radius: 5px;
    overflow: hidden;
    margin:50px auto;
    display:flex;
    border-bottom:1px solid white;
    border-right:1px solid white;
    box-shadow:10px 10px 10px 5px rgba(0,0,0,.5);
    // align-items:center;
    .left_site{
        display:flex;
        // height:100%;
        flex:1;
        flex-direction:column;
        // justify-content:space-between;
        background:rgba(0,0,0,.5);
        h1{
            margin:0;
            padding:20px;
            background:rgba(0,0,0,.3);
            color:white;
            font-size:36px;
            font-weight:400;
        }
        p{
            padding:20px;
            color:white;
            line-height:32px;
        }
    }
    .right_site{
        width:450px;
        height:450px;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
}
#third_site{
    width:100%;
    max-width:1200px;
    margin:50px auto;
    display:flex;
    flex-direction: column;
    padding:20px 40px 50px;
    background:rgba(0,0,0,.5);
    border-radius: 5px;
    border-bottom:1px solid white;
    border-right:1px solid white;
    box-shadow:10px 10px 10px 5px rgba(0,0,0,.5);

    h1{
        border-bottom:2px solid white;
        width:200px;
        font-size:36px;
        color:white;
        font-weight:400;
    }
    p{
        color:white;
        line-height:24px;
        margin-bottom:50px;
    }
    ul{
        list-style:none;
        margin:0;
        padding:0;
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
        gap:20px;
        li{
            width:100%;
            height:400px;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
                cursor:pointer;
                // border-left:1px solid rgba(255,255,255,.5);
                // border-top:1px solid rgba(255,255,255,.5);
                border-radius:5px;
                overflow: hidden;
            }
        }
    }
}
</style>