<template>
    <div class="postWrap">
        <div class="postLeft">
            <div class="titleWrap">
                <h2>{{item.title}}</h2>
            </div>
            <div class="contentWrap">
                <p>{{item.content}}</p>
                <div class="dateWrap">
                    <span>{{DATE}}</span>
                    <span v-if="item.update">수정</span>
                    <span v-else>작성</span>
                </div>
            </div>
        </div>
        <div class="postRight">
            <button @click="onClickMain">이전</button>
            <div class="buttonWrap">
                <button @click="onClickEdit">수정</button>
                <button @click="onClickRemove">삭제</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useDate } from '@/composable/useDate'
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

        const onClickMain = () => {
            router.push('/')
        }
        const onClickEdit = () => {
            router.push(`/edit/${props.item.id}`)
        }
        const onClickRemove = () => {
            const result = confirm('노트를 삭제하시겠습니까?')
            if(result){
                store.commit('REMOVE_NOTE' , this.item.id)
                router.push('/')
            }
        }

        const DATE = computed(()=>{
            const result = useDate(props.item.date)
            return result
        })

        return {
            onClickMain, onClickEdit, onClickRemove , DATE
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/item/NotePost';
</style>