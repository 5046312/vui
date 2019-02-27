<template>
    <div>
        <div>
            <div slot="desc">Tip 提示 共12种place情况</div>
            <div>
                <div class='top'>
                    <v-tip content="top left place" place="top left"> <v-button>上左</v-button> </v-tip> 
                    <v-tip content="top place" place="top"> <v-button>&nbsp;&nbsp;上&nbsp;&nbsp;</v-button> </v-tip> 
                    <v-tip content="top right place" place="top right"> <v-button>上右</v-button> </v-tip> 
                </div>
                <div class="center">
                    <div class="left">
                        <v-tip content="left top place<br>new line" place="left top"> <v-button>左上</v-button> </v-tip>
                        <v-tip content="left place<br>new line" place="left"> <v-button>&nbsp;&nbsp;左&nbsp;&nbsp;</v-button> </v-tip>
                        <v-tip content="left bottom place<br>new line" place="left bottom"> <v-button>左下</v-button> </v-tip>
                    </div>
                    <div class="right">
                        <v-tip content="right top place<br>new line<br>new line" place="right top"> <v-button>右上</v-button> </v-tip>
                        <v-tip content="right place<br>new line<br>new line" place="right"> <v-button>&nbsp; 右 &nbsp;</v-button> </v-tip>
                        <v-tip content="right bottom place<br>new line<br>new line" place="right bottom"> <v-button>右下</v-button> </v-tip>
                    </div>
                </div>
                <div class='bottom'>
                    <v-tip content="bottom left place" place="bottom left"> <v-button>下左</v-button> </v-tip>
                    <v-tip content="bottom place" place="bottom"> <v-button>&nbsp;&nbsp;下&nbsp;&nbsp;</v-button> </v-tip>
                    <v-tip content="bottom right place" place="bottom right"> <v-button>下右</v-button> </v-tip>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            code: {},
            msg: '这是一个普通的tip提示'
        };
    },
    methods: {
        showToast() {
            this.$toast.show("弹出一个Toast");
        },
        showTime(){
            this.$toast.show("弹出一个Toast", 5000);
        }
    }
};
</script>
<style lang="scss" scoped>
.top,.bottom{
    display: flex;
    justify-content: space-between;
    padding: 0 120px;
}
.center{
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    height: 120px;
    &>.left,&>.right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>
