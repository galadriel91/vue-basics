<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />

                <q-toolbar-title> Quasar App </q-toolbar-title>

                <div>
                    <q-btn
                        flat
                        round
                        dense
                        :icon="isDark"
                        @click="darkToggle"
                    />
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <q-item-label header>
                    <q-avatar size="lg" class="q-mr-sm">
                        <img src="/logo.ico" />
                    </q-avatar>
                    Quasar v{{ $q.version }}
                </q-item-label>

                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
    {
        title: 'Typo',
        caption: 'quasar.dev',
        icon: 'school',
        to: '/typo',
    },
    {
        title: 'Color',
        caption: 'quasar.dev',
        icon: 'school',
        to: '/color',
    },
    {
        title: 'Space',
        caption: 'quasar.dev',
        icon: 'school',
        to: '/space',
    },
    {
        title: 'Break',
        caption: 'quasar.dev',
        icon: 'school',
        to: '/break',
    },
    {
        title: 'Helper',
        caption: 'quasar.dev',
        icon: 'school',
        to: '/helper',
    },
    {
        title: 'Grid',
        caption: 'quasar.dev',
        icon: 'school',
        to: '/grid',
    },
];

import { useQuasar } from 'quasar';
import { computed } from 'vue';
export default defineComponent({
    name: 'MainLayout',

    components: {
        EssentialLink,
    },

    setup() {
        const $q = useQuasar();
        const leftDrawerOpen = ref(false);

        const darkToggle = () => {
            $q.dark.toggle();
            $q.localStorage.set('isDark', $q.dark.isActive);
        };

        const isDark = computed(() => {
            return $q.dark.isActive ? 'light_mode' : 'dark_mode';
        });

        return {
            essentialLinks: linksList,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
            darkToggle,
            isDark,
        };
    },
});
</script>
