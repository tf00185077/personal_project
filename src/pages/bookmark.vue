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
                <p class="total_prize" v-show="choose.length!=0">總金額 $ {{totalPirze}}NT</p>
            </div>
        </section>
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
            
        }
    },
    watch:{
        choose:{
            deep:true,
            handler: function(){
                
            }
        }
    },
    computed:{
        totalPirze(){
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
</style>