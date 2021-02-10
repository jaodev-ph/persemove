import Api from './Api'
import Csrf from './Csrf'
export default {
    async register(data) {
        await Csrf.getCookie();
        return Api.post("/register", data)
    },
    async login(data) {
        await Csrf.getCookie();
        return Api.post("/login", data)
    },
    async logout() {
        await Csrf.getCookie();
        return Api.post("/logout")
    },
    async auth() {
        await Csrf.getCookie();
        return Api.get("/user")
    }
}