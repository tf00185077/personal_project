<template>
    <div>
        <section id="bookmark">
            <div class="left">
                <h1>書籤專區</h1>
                <p>在閱讀的歷程上<br>擁最好的足跡</p>
            </div>
            <div class="right">
                <div class="good_outline" v-for="(bookmark,index) in bookmarks" :key="index">
                    <div class="img_outline">
                        <img :src="bookmark.img" alt="">
                    </div>
                    <p class="price" @click="buy(bookmark)">$ {{bookmark.price}}NT</p>
                </div>
            </div>
        </section>
        <section id="choose_bookmark">
            <h1>商品車</h1>
            <div class="choose">
                <div class="choose_outline" v-for="(item,index2) in choose" :key="index2">
                    <div class="choose_img_outline">
                        <img :src="item.img" alt="">
                    </div>
                    <p class="choose_name">{{item.name}}</p>
                    <p class="choose_price">單價 {{item.price}}NT</p>
                    <div class="choose_num">
                        <button @click="minus(index2)">-</button>
                        <p>{{item.num}}</p>
                        <button @click="plus(index2)">+</button>
                    </div>
                    <p>金額 $ {{parseInt(item.num*item.price)}}NT</p>
                    <img src="../assets/pic/trash_icon.svg" alt="" class="trash" @click="deleteItem(item)">
                </div>
                
                <hr class="horizone" v-show="choose.length!=0">
                <p class="total_prize" v-show="choose.length!=0">總金額 $ {{totalPrize}}NT</p>
                <button v-show="choose.length!=0" id="confirm_buy" @click="shoppingCartOpen=true">確定購買</button>
            </div>
        </section>
        <div id="shopping_cart" :class='{"open":shoppingCartOpen}'>
            <img @click="shoppingCartOpen=false" src="../assets/pic/cancel.png" alt="" class="cancel">
            <div id="good_info">
                <!-- <div class="good_info_outline" v-for="(choose,choose_index) in choose" :key="choose_index">
                    <p>{{choose.name}}</p>
                    <p>數量{{choose.num}}</p>
                    <p>金額 {{choose.num*choose.price}}</p>
                </div> -->
                <!-- <div class="good_info_outline">
                    
                    <p>總金額 {{totalPrize}}</p>
                </div> -->
            </div>
            <div id="user_info">
                <h1>付款資訊</h1>
                <div class="user_info user_name">
                    <label for="user_name">請輸入名稱</label>
                    <input v-model="user_name" type="text" placeholder="您的姓名" id="user_name">
                </div>
                <div class="user_info user_address">
                    <label for="user_address">請輸入送貨地址</label>
                    <textarea v-model="user_address" name="" id="user_address" cols="30" rows="10"></textarea>
                </div>
                <div class="user_info user_account">
                    <label for="user_card_num">請輸入信用卡號碼</label>
                    <div class="card">
                        <input v-model="user_card1" id="user_card_num" type="text" maxlength="4" class="card_num" oninput = "value=value.replace(/[^\d]/g,'')">
                        <input v-model="user_card2" type="text" maxlength="4" class="card_num" oninput = "value=value.replace(/[^\d]/g,'')">
                        <input v-model="user_card3" type="text" maxlength="4" class="card_num" oninput = "value=value.replace(/[^\d]/g,'')">
                        <input v-model="user_card4" type="text" maxlength="4" class="card_num" oninput = "value=value.replace(/[^\d]/g,'')">
                    </div>
                </div>
                <div class="user_info user_account">
                    <label for="user_secret_num">請輸入安全碼</label>
                    <input v-model="user_security" id="user_secret_num" type="text" maxlength="3" oninput = "value=value.replace(/[^\d]/g,'')" class="card_num">
                </div>
            <button @click="overBuy">資料送出</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"bookmark",
    metaInfo:{
    title:"Bookmark",
    meta:[
      {name:"description",content:"商品頁"},
      {name:"description",content:"書籤販售"},
    ]
  },
    data(){
        return{
            bookmarks:[{
                img:require("../assets/pic/bookmark1.jpg"),
                price:150,
                name:"動物書籤三合一"
            },{
                img:require("../assets/pic/bookmark2.jpg"),
                price:100,
                name:"自由奔放書籤"
            },{
                img:require("../assets/pic/bookmark3.jpg"),
                price:120,
                name:"文藝書籤二入組"
            }],
            choose:[],
            shoppingCartOpen:false,
            user_name:"",
            user_address:"",
            user_card1:"",
            user_card2:"",
            user_card3:"",
            user_card4:"",
            user_security:"",
        }
    },
    mounted(){
        window.scrollTo(0, 0)
    },
    methods:{
        buy(item){
            let that = this;
            if(!that.choose.includes(item)){
                
                item.num=1;
                this.choose.push(item)
            }
        },
        plus(index){
            this.choose[index].num++
            this.$set(this.choose,index,this.choose[index])
        },
        minus(index){
            if(this.choose[index].num>1){

                this.choose[index].num--
            }
            this.$set(this.choose,index,this.choose[index])
        },
        deleteItem(item2){
            let check = confirm("確定要取消該商品嗎?")
            if(check){
                
                this.choose = this.choose.filter(item=>item!==item2)
                }
            
        },
        overBuy(){
            if(this.user_name!=""&&this.user_address!=""&&this.user_card1!=""&&this.user_card2!=""&&this.user_card3!=""&&this.user_card4!=""&&this.user_security!=""){
                alert(`您已完成購買!\r此次消費總金額為${this.totalPrize}`)
                this.choose=[];
                this.user_name="";
                this.user_address="";
                this.user_card1="";
                this.user_card2="";
                this.user_card3="";
                this.user_card4="";
                this.user_card4="";
                this.user_security="";
                this.shoppingCartOpen=false;
            }else{
                alert("資料未填完整喔")
            }
        },
    },
    watch:{
        choose:{
            deep:true,
            handler: function(){
                
            }
        }
    },
    computed:{
        totalPrize(){
            let total=0;
            this.choose.map((item)=>{
                total += parseInt((item.num*item.price))
            })
            return total
        }
    },
    activated(){
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
#bookmark{
    padding:20px;
    width:100%;
    max-width: 1200px;
    margin:50px auto;
    background: rgba(0,0,0,.4);
    border-radius:5px;
    box-shadow:$shadow;
    display:flex;
    justify-content: space-between;
    .left{
        flex-shrink: 0;
        display:flex;
        flex-direction: column;
        color:white;
        h1{
            font-size:40px;
        }
    }
}
.right{
    margin-left:20px;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    gap:20px;
    .good_outline{
        // border:1px solid white;
        display:flex;
        flex-direction: column;
        .img_outline{
            flex:1;
            img{
                width:100%;
                height:100%;
                object-fit: cover;
            }
        }
        p{
            background: rgba(0,0,0,.5);
            margin:0;
            color:white;
            display:flex;
            justify-content: flex-end;
            padding:10px 10px;
            cursor:pointer;
            &:hover{
                background: $hover_color;
                color:#151515;
                text-decoration: underline;
            }
        }
    }
}
#choose_bookmark{
    display:flex;
    justify-content: space-between;
    width:100%;
    max-width:1200px;
    margin:50px auto;
    box-shadow: $shadow;
    border-radius: 5px;
    background: rgba(0,0,0,.4);
    padding:20px;
    h1{
        color:white;
        font-size:40px;
        font-weight:400;
        flex-shrink: 0;
        margin:0;
    }
}
.choose{
    flex:1;
    display:flex;
    flex-direction: column;
    margin-left:20px;
    gap:50px;
    .choose_outline{
        display:flex;
        justify-content: space-between;
        align-items: center;
        .choose_img_outline{
            width:150px;
            height:150px;
            img{
                width:100%;
                height:100%;
                object-fit: cover;
            }
        }
        p{
            margin:0;
            color:white;
        }
        .choose_num{
            display:flex;
            align-items: flex-start;
            width:200px;
            height:25px;
            background:white;
            border-radius: 5px;
            p{
                flex:1;
                height:100%;
                margin:0;
                color:#151515;
                display:flex;
                justify-content: center;
                align-items: center;
                border-right:1px solid black;
                border-left:1px solid black;
            }
            button{
                border:none;
                height:100%;
                width:40px;
                font-size:20px;
                display:flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                &:active{
                    box-shadow: inset 3px 3px 5px rgba(0,0,0,.4);
                }
            }
            button:nth-child(1){
                background: $hover_color;
                border-radius: 5px 0 0 5px;
            }
            button:nth-child(3){
                background: $sup_color;
                border-radius: 0 5px 5px 0;
            }
        }
    }
}
.horizone{
    // height:5px;
    width:100%;
    border:1px solid black;
}
p.total_prize{
    align-self: flex-end;
    margin-top:-50px;
    color:white;
    font-size:24px;
}
.trash{
    display:inline-block;
    width:30px;
    height:30px;
    cursor: pointer;
}
#confirm_buy{
    background: $sup_color;
    border:none;
    border-radius:10px;
    padding:10px;
    font-size:18px;
    cursor: pointer;
    color:white;
    box-shadow: $shadow;
    &:hover{
        background: $hover_color;
        color:#151515;
        text-decoration: underline;
    }
    &:active{
        box-shadow:inset $shadow,;
    }
}
@media screen and (max-width:500px) {
    #bookmark{
        flex-direction: column;
    }
    .right{
        margin:0;
    }
    #choose_bookmark{
        flex-direction: column;
        .choose{
            margin:0;
            .choose_outline{
                flex-direction: column;
                // align-items: flex-start;
                position:relative;
                gap:5px;
                flex-wrap:wrap;
                .trash{
                    position:absolute;
                    top:20%;
                    right:10px;
                }
            }
        }
    }
    .choose .choose_outline .choose_img_outline{
        width:100%;
        img{
            object-fit: contain;
        }
    }
}
#shopping_cart{
    padding-top:50px;
    width:100%;
    height:100vh;
    position:fixed;
    left:0;
    top:0;
    z-index:9999;
    background:rgba(255,255,255,.3);
    backdrop-filter: blur(5px);
    transform:translateY(-100%);
    transition:.5s;
    display:flex;
    flex-direction: column;
    img{
        position:absolute;
        right:20px;
        top:20px;
        cursor:pointer
    }
}
#shopping_cart.open{
    transform:translateY(0)
}
#good_info{
    display:flex;
    gap:20px;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .good_info_outline{
        display:grid;
        // grid-template-columns: 1fr 1fr 1fr;
        min-width:280px;
        width:100%;
        justify-content: space-evenly;
        gap:20px;
        border:1px solid black;
        border-radius: 5px;
        background:rgba(0,0,0,.5);
        border-radius:10px;
        p{
            color:white;
            font-size:18px;
            margin:0;
            padding:20px 5px;
            border-right:1px solid white;
        }
    }
}
#user_info{
    border-top:1px solid white;
    border-left:1px solid white;
    box-shadow: 3px 3px 5px 5px rgba(0,0,0,.5);
    backdrop-filter: blur(10px);
    display:flex;
    min-width:280px;
    background:rgba(0,0,0,.4);
    border-radius: 10px;
    color:white;
    gap:20px;
    flex-direction: column;
    padding:10px;
    margin:30px auto;
    .user_info{
        display:flex;
        flex-direction: column;
        gap:5px;
        font-size:20px;
        input{
            background:white;
            width:100px;
            font-size:18px;
            border:1px solid white;
            border-radius: 5px;
        }
        input.card_num{
            width:50px;
        }
        textarea{
            background:white;
            border-radius: 5px;
            width:50%;
            min-width:280px;
            resize:none;
            font-size:18px;
            height:50px;
            border:1px solid white;
        }
    }
    button{
        background:$sup_color;
        font-size:24px;
        padding:10px;
        // border:1px solid black;
        cursor:pointer;
    }
}
@media screen and (max-width:500px) {
    #user_info .user_info textarea{
        width:100%;
        min-width:0;
        height:150px;
    }
    #shopping_cart img{
        width:30px;
        height:30px;
    }
    #good_info .good_info_outline p{
        padding:0;
    }
}
</style>