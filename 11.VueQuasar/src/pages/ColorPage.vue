<template>
    <q-page class="q-pa-xl">
        <section>
            <div class="text-h4">Color</div>
            <q-separator class="q-my-md"/>
            <div class="q-gutter-sm">
                <div class="rounded-borders q-pa-sm bg-primary">Primary</div>
                <div class="rounded-borders q-pa-sm bg-secondary">Secondary</div>
                <div class="rounded-borders q-pa-sm bg-accent">Accent</div>
                <div class="rounded-borders q-pa-sm bg-dark text-white">Dark</div>
                <div class="rounded-borders q-pa-sm bg-positive">Positive</div>
                <div class="rounded-borders q-pa-sm bg-negative">Negative</div>
                <div class="rounded-borders q-pa-sm bg-info">Info</div>
                <div class="rounded-borders q-pa-sm bg-warning">Warning</div>
                <div class="rounded-borders q-pa-sm bg-pink-4">Pink-4</div>
                <div class="rounded-borders q-pa-sm bg-purple-6">Purple-6</div>
                <div class="rounded-borders q-pa-sm bg-error text-white">Error</div>
            </div>
        </section>
        <q-separator class="q-my-md"/>
        <section>
            <div class="text-h4">Btns</div>
            <q-separator class="q-my-md"/>
            <div class="q-gutter-sm">
                <q-btn color="white" text-color="black" label="Standard" />
                <q-btn color="primary" label="Primary" />
                <q-btn color="secondary" label="Secondary" />
                <q-btn color="amber" glossy label="Amber" />
                <q-btn color="brown-5" label="Brown 5" />
                <q-btn color="deep-orange" glossy label="Deep Orange" />
                <q-btn color="purple" label="Purple" />
                <q-btn color="black" label="Black" />
            </div>
        </section>
    </q-page>>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style>
    /* 임의로 칼라 추가 가능 */
    .text-error{
        color:crimson !important;
    }
    .bg-error{
        background:crimson !important;
    }
</style>