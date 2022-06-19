<template>
    <li class="todoItem">
        <!-- <div class="checkWrap">
            <button class="xi-checkbox-blank"></button>
        </div> -->
        <div class="contentWrap">
            <h3 class="contentWrapTitle">해야할 일의 제목입니다.</h3>
            <div class="contentWrapContent">
                <p>
                    해야할 일의 내용입니다. 해야할 일의 내용입니다. 해야할 일의 내용입니다.해야할 일의 내용입니다.해야할 일의 내용입니다.
                    해야할 일의 내용입니다. 해야할 일의 내용입니다. 해야할 일의 내용입니다.해야할 일의 내용입니다.해야할 일의 내용입니다.
                </p>
            </div>
        </div>
        <div class="contentInfoWrap">
            <span>2022 - 05 - 26</span>
            <button class="xi-pen-o"></button>
            <button class="xi-minus-square-o"></button>
        </div>
        <!-- <div class="checkWrap">
            <button class="xi-checkbox-blank" v-if="!item.isCheck" @click="onClickCheck"></button>
            <button class="xi-check-square-o" v-else @click="onClickCheck"></button>
        </div> -->
        <!-- <div class="contentWrap">
            <strong v-if="!isUpdate" :class="{complete:item.isCheck}" @dblclick="onClickUpdate">{{item.content}}</strong>
            <input v-else class="titleInput" type="text" ref="updateInput" :placeholder="item.content" v-model="updateValue" @blur="onClickBlur" @keydown.enter="onSubmitUpdate">
        </div>-->
        <!-- <div class="removeWrap">
            <button type="button" class="xi-close" @click="onClickDelete"></button>
        </div> -->
    </li>
</template>

<script>
export default {
    // props:{
    //     item:{
    //         type:Object,
    //         required:true
    //     }
    // },
    // methods:{
    //     onClickDelete(){
    //         this.$store.commit('DELETE_TODO' , this.item.id)
    //     }
    // }
    // setup(props){
    //     const store = useStore()
    //     const isUpdate = ref(false)
    //     const updateInput = ref(null)
    //     const updateValue = ref('')

    //     const onClickDelete = () => {
    //         store.dispatch('DELETE_TODO' , props.item.id)
    //     }

    //     const onClickCheck = () => {
    //         store.dispatch('CHECK_TODO' ,  {
    //             id:props.item.id,
    //             isCheck:!props.item.isCheck
    //         })
    //     }
        
    //     const onClickUpdate = async () => {
    //         if(props.item.isCheck){
    //             return
    //         }else{
    //             isUpdate.value = true
    //             await nextTick()
    //             updateInput.value.focus()
    //         }
    //     }
        
    //     const onClickBlur = () => {
    //         isUpdate.value = false
    //         updateValue.value = ''
    //     }

    //     const onSubmitUpdate = () => {
    //         store.dispatch('UPDATE_TODO' , {
    //             id:props.item.id,
    //             content:updateValue.value
    //         })
    //         updateValue.value = ''
    //         isUpdate.value = false
    //     }
    //     return{
    //         onClickDelete, onClickCheck, onClickUpdate, onSubmitUpdate, onClickBlur, isUpdate, updateInput, updateValue
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    @import 'Style/components/note/NoteItem';
</style>