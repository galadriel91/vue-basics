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
import { defineDate } from 'Utils/aboutDate'
export default {
    props:{
        item:{
            type:Object,
            required:false
        }
    },
    methods:{
        onClickMain(){
            this.$router.push('/')
        },
        onClickEdit(){
            this.$router.push(`/edit/${this.item.id}`)
        },
        onClickRemove(){
            const result = confirm('노트를 삭제하시겠습니까?')
            if(result){
                this.$store.commit('REMOVE_NOTE' , this.item.id)
                this.$router.push('/')
            }
        }
    },
    computed:{
        DATE(){
            const result = defineDate(this.item.date)
            return result
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/item/NotePost';
</style>