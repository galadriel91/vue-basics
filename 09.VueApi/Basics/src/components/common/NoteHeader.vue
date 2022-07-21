<template>
    <header>
        <div class="headerWrap">
            <h1><RouterLink to="/">Vue Note</RouterLink></h1>
            <div>
                <nav :class="{ showing: isActive }">
                    <ul>
                        <li @click="onClickRemove">
                            <RouterLink to="/"><span>Note</span></RouterLink>
                        </li>
                        <li @click="onClickRemove">
                            <RouterLink to="/about"
                                ><span>Create</span></RouterLink
                            >
                        </li>
                    </ul>
                </nav>
                <a
                    href="javascript:void(0)"
                    class="wholeBtn"
                    @click="onToggleActive"
                >
                    <span :class="{ active: isActive }">&nbsp;</span>
                </a>
            </div>
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
