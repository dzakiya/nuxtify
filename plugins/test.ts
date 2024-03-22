export default defineNuxtPlugin((nuxt) => {
    const loading = useState('loading', () =>  false)

    const $loading = {
        show:() => loading.value = true,
        hide:() => loading.value = false,
        state: computed(() => loading.value)
    }
    return {
        provide :{
            loading : $loading
        }
    }
    //state bisa diakses dimanapun 
    //kita definisikan 1 
})