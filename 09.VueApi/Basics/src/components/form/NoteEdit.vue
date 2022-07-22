<template>
    <div class="inputWrap">
        <form @submit.prevent="onSubmitForm">
            <div class="formWrap">
                <div>
                    <label for="title">제목</label>
                    <input
                        id="title"
                        type="text"
                        :placeholder="item.title"
                        v-model="title"
                        ref="titleInput"
                    />
                </div>
                <div>
                    <label for="content">내용</label>
                    <textarea
                        id="content"
                        :placeholder="item.content"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <!-- <div class="infoWrap" :class="{ noUpdate: !item.update }">
                <div class="dateWrap" v-if="item.update">
                    <span>최근 수정일:</span>
                    <span>{{ DATE }}</span>
                </div>
                <div class="buttonWrap">
                    <button @click="onClickMain">취소</button>
                    <button type="submit">수정</button>
                </div>
            </div> -->
        </form>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/NoteEdit';
</style>
<!-- <template>
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
import { defineDate } from 'Utils/aboutDate'
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
        },
        onSubmitForm(){
            if(this.title.length && this.content.length){
                this.$store.commit('UPDATE_NOTE' , {
                id:this.item.id,
                title:this.title,
                content:this.content,
                date: new Date(),
                update: true
            })
                this.$router.push('/')
            }else{
                alert('다시 한번 확인해 주세요')
                this.$refs.titleInput.focus()
            }
        }
    },
    computed:{
        DATE(){
            const result = defineDate(this.item.date)
            return result
        }
    },
    mounted(){
        this.$refs.titleInput.focus()
    }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/form/NoteEdit';
</style> -->
