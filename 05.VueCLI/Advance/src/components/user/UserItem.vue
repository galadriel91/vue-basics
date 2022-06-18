<template>
    <div>
        <div class="userWrap">
            <p class="xi-user-address"></p>
            <div class="userInfo">
                <h4>
                    <slot name="userName"></slot>
                </h4>
                <span>
                    <slot name="userTime"></slot>
                </span>
                <p>
                    <slot name="userPoints"></slot>
                </p>
            </div>
        </div>
        <div class="userDesc" v-if="item.about">
            <h3>About</h3>
            <div class="aboutWrap" v-html="item.about"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/user/UserItem';
</style>