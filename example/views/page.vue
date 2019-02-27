<template>
    <div>
        <div style="padding: 50px;">
            <div :code="code.base">
                <div slot="desc">分页 Page</div>
                <div>
                    <v-page v-model="page" :total="15"></v-page>
                    <br>
                    <v-page v-model="page" :total="15" border></v-page>
                    <br>

                    
                    <v-page v-model="page" :total="5"></v-page>
                    <br>
                    <v-page v-model="page" :total="5" border></v-page>
                    <br>
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
            page: 1
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
