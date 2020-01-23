<template>
    <div>
       <div class="box">
           <p><img src="a.png" ><span>总订单</span><i>102.400</i></p>
             <p><img src="b.png" ><span>总销售额</span><i>102.400</i></p>
               <p><img src="c.png" ><span>订单数</span><i>102.400</i></p>
                 <p><img src="d.png"><span>今日销售额</span><i>102.400</i></p>
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.box{
    display:flex;
     justify-content:space-between;
    p{
        display: inline-block;
        width: 200px;
        height: 100px;
        display:flex;
        span{
            display:display-block;
            width:80px;

        }
        
       img{
           width:50px;
           height: 50px;
       }

    }
}
</style>