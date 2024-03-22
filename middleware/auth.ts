export default defineNuxtRouteMiddleware((to, from) => {
    //contoh
    const auth = false;
    if(!auth) {
        return abortNavigation()
    }
})