<template>
<div id="forWidth">
  <div id="outline">
    <h1>讀享→</h1>
    <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6292252092685!2d121.51342031537972!3d25.114409441216484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae8d21e7650f%3A0x7930bdb76b706c86!2z55-z54mM56uZ!5e0!3m2!1szh-TW!2stw!4v1637480906578!5m2!1szh-TW!2stw" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="about">
        <div class="contact">
        <p>活動空間:<br>台北市北投區石牌路</p>
        <p>連絡電話:<br>02-12345678</p>
        </div>
        <div class="connect">
            <p>其他連結</p>
            <ul>
                <li><router-link to="/">Facebook</router-link></li>
                <li><router-link to="/">Twitter</router-link></li>
                <li><router-link to="/">Line</router-link></li>
                <li><router-link to="/">Linkin</router-link></li>
            </ul>
        </div>
    </div>
  </div>
  </div>
</template>
<script>

export default {
  name: "myfooter",
  
};
</script>
<style lang="scss" scoped>
#forWidth{
    width:100%;
    margin:0;
    padding:50px;
    background:#8FA6B5;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:980;
}
#outline{
    display:flex;
    width:100%;
    max-width:1200px;
    justify-content:space-between;
    align-items:center;
    h1{
        align-self:flex-start;
        border-bottom:2px solid #515151;
        padding:0px 5px 0 50px;
        // margin-right:10px;
        margin-top:0;
    }
    #map{
        width:400px;
        height:400px;
        padding:30px;
        box-shadow:3px 3px 10px 5px rgba(0,0,0,.5);
        border-radius:5px;
        border-top:1px solid white;
        border-left:1px solid white;
    }
    .about{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-left:50px;
        .contact{
            width:100%;
            p{
                margin:0 0 10px;
                padding:0;
                color:white;
            }
        }
        .connect{
            display:flex;
            flex-direction:column;
            width:100%;
            p{
                color:white;
                margin-top:40px;
            }
            ul{
                list-style:none;
                margin:0;
                padding:0;
                display:flex;
                width:100%;
                flex-wrap:wrap;
                gap:5px;
                li{
                    width:calc(50% - 10px);
                    text-align:center;
                    a{
                        color:white;
                        text-decoration:none;
                        cursor:pointer;
                        width:100%;
                        display:inline-block;
                        padding:10px;
                        border-radius:5px;
                        background:$sup_color;
                        z-index:1000;
                        &:hover{
                            background:#CDF5AB;
                            color:#515151;
                        }
                    }
                }
            }
        }
    }
}
</style>