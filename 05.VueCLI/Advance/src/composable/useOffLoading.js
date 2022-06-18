import { onMounted } from 'vue'
import { useStore } from 'vuex'

export const useOffLoading = () => {
    const store = useStore()
    onMounted(()=>{
        store.commit('OFF_LOADING')
    })
}