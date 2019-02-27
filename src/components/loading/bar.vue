<template>
    <v-transition name="fade">
        <div id="vui-loading-bar" v-if="show">
            <div class="bar" :class="barClass" :style="barStyle"></div>
        </div>
    </v-transition>
</template>
<script>
export default {
    name: "v-loading-bar",
    props: {
        // bar高度
        barHeight: {
            default: 2
        }
    },
    data() {
        return {
            loadingTimer: null,
            endTimer: null,
            failTImer: null,

            show: true,
            status: "loading",
            percent: 0,
            height: 0
        };
    },
    methods: {
        start() {
            this.show = true;
            this.status = "loading";
            this.percent = 0;
            this.height = this.barHeight;

            this.clearTimer();
            this.loadingTimer = setInterval(() => {
                this.percent += ((90 - this.percent) / 8) * Math.random();
                if (this.percent > 90) {
                    clearInterval(this.loadingTimer);
                }
            }, 500);
        },

        // 进度结束
        end() {
            this.height = this.barHeight;
            this.show = true;
            this.status = "success";
            this.percent = 100;

            this.clearTimer();
            this.endTimer = setTimeout(() => {
                this.show = false;
            }, 1000);
        },

        fail() {
            this.height = this.barHeight;
            this.show = true;
            this.status = "fail";
            this.percent = 100;
            this.clearTimer();
            this.failTimer = setTimeout(() => {
                this.show = false;
            }, 1500);
        },
        clearTimer() {
            clearInterval(this.loadingTimer);
            clearInterval(this.endTimer);
            clearInterval(this.failTimer);
        }
    },
    computed: {
        barStyle() {
            return {
                width: this.percent + "%",
                height: this.height + "px"
            };
        },
        barClass() {
            return {
                loading: this.status == "loading",
                success: this.status == "success",
                fail: this.status == "fail"
            };
        }
    },
    created() {}
};
</script>