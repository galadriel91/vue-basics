<template>
    <q-page class="q-pa-xl">
        <section>
            <div class="text-h4">Flex Gutter</div>
            <q-separator spaced />
            <div class="row q-col-gutter-x-md">
                <div v-for="n in 4" :key="n" class="col-3">
                    <q-card class="my-card">
                        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                            <div
                                class="absolute-bottom text-subtitle2 text-center"
                            >
                                Title
                            </div>
                        </q-img>
                    </q-card>
                </div>
            </div>
        </section>
        <q-separator spaced />
        <section>
            <div class="text-h4">ToolBar</div>
            <q-separator spaced />
            <div
                class="row bg-secondary items-center justify-between q-pa-md"
                style="height: 60px"
            >
                <div class="row items-center">
                    <q-btn flat round dense icon="menu" class="q-mr-sm" />
                    <span>Quasar Framework</span>
                </div>
                <div><q-btn flat round dense icon="dark_mode" /></div>
            </div>
        </section>
        <q-separator spaced />
        <section>
            <div class="text-h4">FlexBox - Row</div>
            <q-separator spaced />
            <div class="row bg-accent inline">
                <div v-for="n in 5" :key="n" class="square flex flex-center">
                    {{ n }}
                </div>
            </div>
            <q-separator spaced />
            <div class="row bg-accent inline reverse">
                <div v-for="n in 5" :key="n" class="square flex flex-center">
                    {{ n }}
                </div>
            </div>
            <q-separator spaced />
            <div class="row bg-accent inline wrap">
                <div v-for="n in 20" :key="n" class="square flex flex-center">
                    {{ n }}
                </div>
            </div>
        </section>
        <q-separator spaced />
        <section>
            <div class="text-h4">FlexBox - Column</div>
            <q-separator spaced />
            <div class="column bg-accent inline">
                <div v-for="n in 5" :key="n" class="square flex flex-center">
                    {{ n }}
                </div>
            </div>
        </section>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
.square {
    width: 100px;
    height: 100px;
    background: $primary;
}
</style>
