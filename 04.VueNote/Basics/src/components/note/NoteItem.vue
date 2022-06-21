<template>
    <li class="todoItem">
        <div class="contentWrap">
            <h3 class="contentWrapTitle">{{item.title}}</h3>
            <div class="contentWrapContent">
                <p>
                    {{item.content}}
                </p>
            </div>
        </div>
        <div class="contentInfoWrap">
            <span>2022 - 05 - 26</span>
            <button class="xi-pen-o" @click="onClickEditPage"></button>
            <button class="xi-minus-square-o" @click="onClickRemoveItem"></button>
        </div>
    </li>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:false
        }
    },
    methods:{
        onClickEditPage(){
            this.$router.push(`/edit/${this.item.id}`)
        },
        onClickRemoveItem(){
            this.$store.commit('REMOVE_NOTE' , this.item.id)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/note/NoteItem';
</style>