<template>
    <li>
        <div class="itemWrap">
            <div class="checkWrap">
                <button class="xi-checkbox-blank" v-if="!item.isCheck" @click="onClickCheck"></button>
                <button class="xi-check-square-o" v-else @click="onClickCheck"></button>
            </div>
            <!-- <div class="titleWrap">
                <h4 :class="{complete:item.isCheck}" v-if="!isUpdate">{{item.content}}</h4>
                <form v-else @submit.prevent="onSubmitUpdate">
                    <input type="text" :placeholder="item.content" ref="update" v-model="value" @blur.self="onClickBlur">
                    <button type="submit" class="xi-check-min" @mousedown="onSubmitUpdate"></button>
                </form>
                <button class="xi-pen updateBtn" @click="onClickUpdate" v-if="!isUpdate"></button>
            </div>
            <div class="buttonWrap">
                <button class="xi-minus-square-o" @click="onClickRemove"></button>
            </div> -->
        </div>
    </li>
</template>

<script>
    import { useStore } from 'vuex'
    export default {
        props:{
            item:{
                type:Object,
                required:true
            }
        },
        setup(props){
            const store = useStore()
            const onClickCheck = () => {
                store.commit('CHECK_TODO' , props.item.id)
            }
            
            return{
                onClickCheck
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoItem';
</style>