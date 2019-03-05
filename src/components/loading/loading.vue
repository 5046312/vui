<template>
    <div class="vui-loading-icon" :style="styleObj">
        <span>
            <svg viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
        </span>
    </div>
</template>
<script>
export default {
    name: "v-loading",
    props: { 
        size: { default: '40' },
        color: String,
    },
    computed: {
        styleObj(){
            return {
                color: this.color,
                height: this.size + 'px',
                width: this.size + 'px'
            }
        }
    }
};
</script>