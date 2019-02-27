<template>
    <div>
        <div>
            <div>v-input</div>
            <div style="width: 200px;">
                <v-input v-model="val" placeholder="请输入一些文字吧"></v-input>
            </div>
        </div>

        <div>
            <div>clear</div>
            <div style="width: 200px;">
                <v-input v-model="val" placeholder="请输入一些文字吧" clear></v-input>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            val: ""
        };
    }
};
</script>
