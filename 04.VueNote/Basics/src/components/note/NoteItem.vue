<template>
    <li class="noteItem">
        <div class="contentWrap">
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
    },
    computed:{
        DATE(){
            const date = new Date(this.item.date)
            const daysArray = ['일', '월', '화', '수', '목', '금', '토']
            const year = date.getFullYear()
            const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
            const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
            const days = daysArray[date.getDay()]
            const result = `${year}-${month}-${day} (${days})` 
            return result
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/note/NoteItem';
</style>