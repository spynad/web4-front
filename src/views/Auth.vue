<template>
    <div class="content">
        <form class="content__form">
            <div class="login">
            <label>Enter username
                <input type="text" required placeholder="Login" v-model.trim="username"/>
            </label>
            </div>
            <div class="password">
            <label>Enter password
                <input type="password" required placeholder="Password" v-model.trim="password"/>
            </label>
            </div>
            <button label="Login" @click="login">Login</button>
            <button label="Register" @click="register">Register</button>
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
                localStorage.setItem("userDetails", JSON.stringify({userId: response.data.userId, accessToken: response.data.accessToken}));
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
            }).then(() => {
                alert("Successful");
            }).catch(error => {
                alert(error.response.data);
            })
        }
    }
}
</script>

<style scoped>
.content {
    border: 5px solid #c5e29a;
    background-color: #c5e29a;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.login {
    margin: 5px 5px 5px 5px;
}

.password {
    margin: 5px 5px 5px 5px;
}
</style>