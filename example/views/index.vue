<template>
    <div class='index' @click="$router.push('/intro')">
        <div class='title'>
            <div style="font-size: 100px;">Vui</div>
            <div>成长源于内心</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.index{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .title{
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

}
</style>
