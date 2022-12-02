<template>
    <q-page class="q-pa-xl">
        <section>
            <div class="text-h4">Shaodw</div>
            <q-separator class="q-my-md" />
            <div class="flex q-gutter-x-md">
                <div
                    class="shadow-1 flex flex-center rounded-borders"
                    style="width: 100px; height: 100px"
                >
                    shaodw-1
                </div>
                <div
                    class="shadow-7 flex flex-center rounded-borders"
                    style="width: 100px; height: 100px"
                >
                    shaodw-7
                </div>
                <div
                    class="shadow-24 flex flex-center rounded-borders"
                    style="width: 100px; height: 100px"
                >
                    shaodw-24
                </div>
            </div>
        </section>
        <q-separator class="q-my-md" />
        <section>
            <div class="text-h4">Visibility</div>
            <q-separator class="q-my-md" />
            <p class="ellipsis" style="width: 500px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor
                sit amet consectetur adipisicing elit. sit amet consectetur
                adipisicing elit.
            </p>
            <p class="ellipsis-2-lines" style="width: 500px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor
                sit amet consectetur adipisicing elit.sit amet consectetur
                adipisicing elit.
            </p>
            <p class="ellipsis-3-lines" style="width: 500px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor
                sit amet consectetur adipisicing elit.sit amet consectetur
                adipisicing elit. sit amet consectetur adipisicing elit.sit amet
                consectetur sit amet consectetur adipisicing elit.sit amet
                consectetur
            </p>
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

<style scoped></style>
