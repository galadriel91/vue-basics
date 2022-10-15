<template>
    <header>
        <div class="headerWrap">
            <h1><RouterLink to="/">VueApi</RouterLink></h1>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="/news"><span>News</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/ask"><span>Ask</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/jobs"><span>Jobs</span></RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/CommonNav';
</style>
