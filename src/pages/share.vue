<template>
    <div>
        <section id="first_site">
        <div class="left_site">
            <img src="../assets/pic/reading.jpg">        
        </div>
        <div class="right_site" :style="backgroundImage">
            <h1>關於<br>分享</h1>
            <p>看書，最大的樂趣<br>
莫過於<br>
找到知己
            </p>
        </div>
      </section>
    </div>
</template>
<script>
export default {
    name:"share",
    data(){
        return {
            backgroundImage:{
            backgroundImage:"url("+require('../assets/pic/share.jpg')+")",
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover',
            backgroundPosition:'center'
        },
        }
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
        justify-content: space-between;
        h1{
            width:100%;
            margin:0;
            padding:20px 40px;
            background:rgba(0,0,0,.7);
            color:white;
            font-size:40px;
            font-weight:400;
            display:flex;
            // justify-content: flex-end;
        }
        p{
            padding:10px 20px;
            color:white;
            margin-top:50px;
            margin-left:50px;
            line-height:24px;
        }
    }
}
</style>