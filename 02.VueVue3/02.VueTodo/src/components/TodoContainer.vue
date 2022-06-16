<template>
    <ul>

    </ul>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    export default {
        
        setup(){
            const store = useStore()
            const getItem = () => {
                store.commit('GET_TODO')
            }
            getItem()
            const TODOS = computed(()=>{
                return store.state.todos
            })

            return{
                TODOS
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Style/components/TodoContainer';
</style>