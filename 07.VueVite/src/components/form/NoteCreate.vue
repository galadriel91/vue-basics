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
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted , ref } from 'vue'
export default {
    setup(){
        const router = useRouter()
        const store = useStore()
        const title = ref('')
        const content = ref('')
        const titleInput = ref('')

        const onSubmitForm = () => {
            if(title.value.length && content.value.length){
                store.commit('ADD_NOTE' , {
                    id:Date.now(),
                    title: title.value,
                    content: content.value,
                    date: new Date(),
                    update: false
                })
                onInitialForm()
                router.push('/')
            }else{
                alert('다시 한번 확인해 주세요')
            }
        }

        const onClickMain = () => {
            router.push('/')
        }

        const onInitialForm = () => {
            title.value = ''
            content.value = ''
        }

        onMounted(()=>{
            titleInput.value.focus()
        })

        return{
            title , content , titleInput, onSubmitForm, onClickMain , onInitialForm
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/form/NoteCreate';
</style>