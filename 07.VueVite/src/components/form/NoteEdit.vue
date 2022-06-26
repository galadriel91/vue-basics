<template>
    <div class="inputWrap">
        <form @submit.prevent="onSubmitForm">
            <div class="formWrap">
                <div>
                    <label for="title">제목</label>
                    <input id="title" type="text" :placeholder="item.title" v-model="title" ref="titleInput">
                </div>
                <div>
                    <label for="content">내용</label>
                    <textarea id="content" :placeholder="item.content" v-model="content" ></textarea>
                </div>
            </div>
            <div class="infoWrap" :class="{noUpdate : !item.update}">
                <div class="dateWrap" v-if="item.update">
                    <span>최근 수정일:</span>
                    <span>{{DATE}}</span>
                </div>
                <div class="buttonWrap">
                    <button @click="onClickMain">취소</button>
                    <button type="submit">수정</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed , ref , onMounted} from 'vue' 
// import { defineDate } from 'Utils/aboutDate'
export default {
    props:{
        item:{
            type:Object,
            required:false
        }
    },
    setup(props){
        const router = useRouter()
        const store = useStore()
        const title = ref('')
        const content = ref('')
        const titleInput = ref('')

        const DATE = computed(()=>{
            const result = defineDate(props.item.date)
            return result
        })

        const onSubmitForm = () => {
            if(title.value.length && content.value.length){
                store.commit('UPDATE_NOTE' , {
                    id:props.item.id,
                    title:title.value,
                    content:content.value,
                    date: new Date(),
                    update: true
            })
                router.push('/')
            }else{
                alert('다시 한번 확인해 주세요')
                titleInput.value.focus()
            }
        }

        const onClickMain = () => {
            router.push('/')
        }

        onMounted(()=>{
            titleInput.value.focus()
        })

        return{
            title, content, titleInput , onClickMain , onSubmitForm
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/form/NoteEdit';
</style>