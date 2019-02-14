<template>
    <v-layout>
        <div style="padding: 50px;">
            <v-demo :code="code.base">
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
            </v-demo>
        </div>
    </v-layout>
</template>
<script>
import code from "@/codes/page";
export default {
    components: {},
    data() {
        return {
            code,
            page: 1
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
