<template>
    <div class="main-contain">
        <div class="buttonWrap">
            <v-button>Default</v-button>
            <v-button type="cancel">Cancel</v-button>
            <v-button type="disable">Disable</v-button>
            <v-button type="primary">Primary</v-button>
            <v-button type="info">Info</v-button>
            <v-button type="danger">Danger</v-button>
            <v-button type="warning">Warning</v-button>
            <v-button type="success">Success</v-button>
            <v-button type="error">Error</v-button>
        </div>

        <div style="background: #ccc;padding: 10px;">
            <div>empty</div>
            <v-button empty>Default</v-button>
            <v-button empty type="cancel">Cancel</v-button>
            <v-button empty type="disable">Disable</v-button>
            <v-button empty type="primary">Primary</v-button>
            <v-button empty type="info">Info</v-button>
            <v-button empty type="danger">Danger</v-button>
            <v-button empty type="warning">Warning</v-button>
            <v-button empty type="success">Success</v-button>
            <v-button empty type="error">Error</v-button>
        </div>
        

        <div class="buttonWrap">
            <v-button type="primary" size="12">12 Size</v-button>
            <v-button type="primary">Default 15</v-button>
            <v-button type="primary" size="20">20 Size</v-button>
            <v-button type="primary" size="30">30 Size</v-button>
        </div>

        <div style="padding: 10px;">
            <div>block</div>
            <v-button block>Default</v-button>
            <v-button block type="cancel">Cancel</v-button>
            <v-button block type="disable">Disable</v-button>
            <v-button block type="primary">Primary</v-button>
            <v-button block type="info">Info</v-button>
            <v-button block type="danger">Danger</v-button>
            <v-button block type="warning">Warning</v-button>
            <v-button block type="success">Success</v-button>
            <v-button block type="error">Error</v-button>
        </div>

        <div style="padding: 10px;">
            <div @click="loading = !loading">loading</div>
            <v-button :loading="loading" @click="loading = !loading">Default</v-button>
            <v-button :loading="loading" type="warning">Cancel</v-button>
            <v-button :loading="loading" type="primary">Disable</v-button>
        </div>

        <div style="padding: 10px;">
            <div>group</div>
            <v-group>
                <v-button type="primary">Primary</v-button>
                <v-button type="danger">Danger</v-button>
                <v-button type="warning">Warning</v-button>
            </v-group>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false
        };
    }
};
</script>