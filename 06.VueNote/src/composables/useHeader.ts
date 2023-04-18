import { useRoute } from 'vue-router';
import { computed } from 'vue';

export const useHeader = () => {
    const route = useRoute();
    const headerName = computed(() => {
        const name = route.meta.title;
        if (name === 'Main') {
            return 'Todo Note';
        } else if (name === 'Create') {
            return 'Create Page';
        } else if (name === 'Edit') {
            return 'Edit Page';
        } else if (name === 'Note') {
            return 'Note Page';
        } else {
            return 'Search Page';
        }
    });
    return headerName;
};
