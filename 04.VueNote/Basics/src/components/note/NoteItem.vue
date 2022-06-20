<template>
    <li class="todoItem">
        <div class="contentWrap">
            <h3 class="contentWrapTitle">해야할 일의 제목입니다.</h3>
            <div class="contentWrapContent">
                <p>
                    해야할 일의 내용입니다. 해야할 일의 내용입니다. 해야할 일의 내용입니다.해야할 일의 내용입니다.해야할 일의 내용입니다.
                    해야할 일의 내용입니다. 해야할 일의 내용입니다. 해야할 일의 내용입니다.해야할 일의 내용입니다.해야할 일의 내용입니다.
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
            this.$router.push('/edit/1')
        },
        onClickRemoveItem(){
            alert('아이템을 삭제 하시겠습니까?')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/note/NoteItem';
</style>