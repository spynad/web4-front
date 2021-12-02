<template>
    <header class="header-block">
        <p class="header-text">Web4 - {{fullName}}, {{group}}, Вар.{{variant}}</p>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        variant: String,
        group: String,
        firstName: String,
        lastName: String
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
}
</script>

<style scoped>
.header-block {
    border-bottom: 1px solid;
}

.header-text {
    text-align: center;
}
</style>