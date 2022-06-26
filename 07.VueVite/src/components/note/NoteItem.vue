<template>
    <li class="noteItem">
        <div class="contentWrap" @click="onClickGetItem">
            <h3 class="contentWrapTitle">{{item.title}}</h3>
            <div class="contentWrapContent">
                <p>
                    {{item.content}}
                </p>
            </div>
        </div>
        <div class="contentInfoWrap">
            <div class="dateWrap">
                <span>{{DATE}}</span>
                <span v-if="item.update">최근 수정</span>
            </div>
            <div class="btnWrap">
                <button class="xi-pen-o" @click="onClickEditPage"></button>
                <button class="xi-minus-square-o" @click="onClickRemoveItem"></button>
            </div>
        </div>
    </li>
</template>

<script>
import { useDate } from '@/composable/useDate'
import { useRouter , useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    props:{
        item:{
            type:Object,
            required:false
        }
    },
    setup(props){
        const store = useStore();
        const router = useRouter();
        const route = useRoute()
    
        const DATE = computed(()=>{
            const result = useDate(props.item.date , route.name)
            return result
        })

        const onClickEditPage = () => {
            router.push(`/edit/${props.item.id}`)
        }
        const onClickRemoveItem = () => {
            store.commit('REMOVE_NOTE' , props.item.id)
        }
        const onClickGetItem = () => {
            router.push(`/item/${props.item.id}`)
        }
        return{
            onClickEditPage , onClickRemoveItem , onClickGetItem , DATE
        }
    },  
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/note/NoteItem';
</style>