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
                <button type="submit">저장</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            content:'',
        }
    },
    methods:{
        onClickMain(){
            this.$router.push('/')
        },
        onSubmitForm(){
            if(this.title.length && this.content.length){
                this.$store.commit('ADD_NOTE' , {
                    id:Date.now(),
                    title: this.title,
                    content: this.content,
                })
                this.onInitialForm()
                this.$router.push('/')
            }else{
                alert('다시 한번 확인해 주세요')
            }
        },
        onInitialForm(){
            this.title = ''
            this.content = ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/form/NoteCreate';
</style>