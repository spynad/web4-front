<template>
    <div class="content">
        <form class="content__form">
            <label> Логин введи
                <input type="text" required placeholder="Login" v-model.trim="username"/>
            </label>
            <label> Пароль введи
                <input type="text" required placeholder="Password" v-model.trim="password"/>
            </label>
            <button label="Войти" @click="login">Войти</button>
            <button label="Зарегаться" @click="register">Зарегаться</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Auth",
    data() {
        return {
            username: "",
            password: ""
        };
    },

    methods: {
        login(event) {
            event.preventDefault();
            this.axios.post("http://localhost:8081/user/login", {
                username: this.username,
                password: this.password
            }).then(response => {
                console.log(response.data.accessToken);
                localStorage.setItem("jwtToken", response.data.accessToken);
                this.$router.push({name: 'app'})
            }).catch(error => {
                alert(error.response.data);
            })
        },
        register(event) {
            event.preventDefault();
            this.axios.post("http://localhost:8081/user/register", {
                username: this.username,
                password: this.password
            }).then(response => {
                alert(response.data);
                alert("Successful");
            }).catch(error => {
                alert(error.response.data);
            })
        }
    }
}
</script>