<template>
    <div class="inputWrap">
        <form @submit.prevent="onSubmitForm">
            <div class="formWrap">
                <div>
                    <label for="title">제목</label>
                    <input id="title" type="text" placeholder="제목을 입력해 주세요" v-model="title" ref="titleInput">
                </div>
                <div>
                    <label for="content">내용</label>
                    <textarea id="content" placeholder="내용을 입력해 주세요" v-model="content" ></textarea>
                </div>
            </div>
            <div class="buttonWrap">
                <button @click="onClickMain">취소</button>
                <button type="submit">수정</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            required:false
        }
    },
    data(){
        return{
            title:'',
            content:'',
        }
    },
    methods:{
        onClickMain(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/form/NoteEdit';
</style>