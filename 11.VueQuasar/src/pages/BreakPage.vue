<template>
    <q-page class="q-pa-md q-pa-md-xl">
        <section>
            <div class="text-h4">Break Point</div>
            <q-separator class="q-my-md" />
            <div class="paint flex flex-center">
                <span class="text-h3">{{ $q.screen.name }}</span>
            </div>
        </section>
        <q-separator class="q-my-md" />
        <section>
            <div class="text-h4">$q.screen</div>
            <q-separator class="q-my-md" />
            <ul>
                <li v-for="(value, key) in $q.screen" :key="key">
                    <span>{{ key }}</span>
                    -
                    <span>{{
                        isFunction(value as string) ? '함수!' : value
                    }}</span>
                </li>
            </ul>
        </section>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const isFunction = (value: string) => typeof value === 'function';
        return {
            isFunction,
        };
    },
});
</script>

<style lang="scss" scoped>
body {
    &.screen--xs {
        .paint {
            background: $accent;
        }
    }
}
.paint {
    height: 200px;
    background: $primary;
}
</style>
