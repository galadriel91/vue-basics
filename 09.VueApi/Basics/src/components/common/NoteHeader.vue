<template>
    <header>
        <div class="headerWrap">
            <h1>
                <RouterLink to="/"><span>Vue Note</span></RouterLink>
            </h1>
            <nav :class="{ open: isCheck }">
                <ul>
                    <li @click="onClickOffBar">
                        <RouterLink to="/"><span>Notes</span></RouterLink
                        >>
                    </li>
                    <li @click="onClickOffBar">
                        <RouterLink to="/"><span>Create</span></RouterLink
                        >>
                    </li>
                </ul>
            </nav>
            <button
                :class="{ 'xi-close': isCheck, 'xi-bars': !isCheck }"
                @click="onClickBars"
            ></button>
        </div>
    </header>
</template>

<script>
import { ref, computed } from 'vue';
export default {
    setup() {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteHeader';
</style>
