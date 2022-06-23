<template>
    <div class="inputWrap">
        <div class="formWrap">
            <div class="titleWrap">
                <h2>{{item.title}}</h2>
                <!-- <label for="title">제목</label> -->
                <!-- <input id="title" type="text" :placeholder="item.title" v-model="title" ref="titleInput"> -->
            </div>
            <div class="contentWrap">
                <p>{{item.content}}</p>
                <!-- <label for="content">내용</label> -->
                <!-- <textarea id="content" :placeholder="item.content" v-model="content" ></textarea> -->
            </div>
        </div>
        <div class="postRight">
            <button>이전</button>
            <div class="buttonWrap">
                <button @click="onClickMain">수정</button>
                <button type="submit">삭제</button>
            </div>
        </div>
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
            const date = new Date(this.item.date)
            const daysArray = ['일', '월', '화', '수', '목', '금', '토']
            const year = date.getFullYear()
            const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
            const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
            const days = daysArray[date.getDay()]
            const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
            const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
            const result = `${year}-${month}-${day} ${hours}:${minutes} (${days})` 
            return result
        }
    },
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/item/NotePost';
</style>