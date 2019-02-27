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

        <div class="buttonWrap">
            <v-button type="primary" size="10">10 Size</v-button>
            <v-button type="primary">Default Size</v-button>
            <v-button type="primary" size="20">20 Size</v-button>
            <v-button type="primary" size="30">30 Size</v-button>
        </div>

        <div>
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
        return {};
    }
};
</script>