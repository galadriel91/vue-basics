<template>
    <div>
        <q-page class="q-pa-xl">
            <section>
                <div class="text-h4">Spacing</div>
                <q-separator class="q-my-md" />
                <div class="q-pa-xs q-my-sm bg-dark text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="q-pa-sm q-my-sm bg-dark text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="q-pa-md q-my-sm bg-dark text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="q-pa-lg q-my-sm bg-dark text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div class="q-pa-xl q-my-sm bg-dark text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </section>
            <q-separator class="q-my-md" />
            <section>
                <div class="text-h4">Flex</div>
                <q-separator class="q-my-md" />
                <div
                    class="flex flex-center bg-primary"
                    style="width: 500px; height: 300px"
                >
                    <div class="target bg-secondary flex flex-center">Flex</div>
                </div>
            </section>
        </q-page>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped>
.target {
    width: 100px;
    height: 100px;
}
</style>
