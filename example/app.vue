<template>
    <div>
        <div>
            <router-link to="/button" tag="button">button</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            router: []
        }
    }
}
</script>