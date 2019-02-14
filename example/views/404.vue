<template>
    <div>
        <div class='notfound'>404 not found</div>
        <div class='btn'>
            <v-button @click="$router.go(-1)">返回上一页</v-button>
            <v-button @click="$router.push('/')">回到首页</v-button>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.notfound{
    height: 500px;
    font-size: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

