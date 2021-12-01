<template>
    <header>
        <p>Web4 - {{fullName}}, {{group}}, Вар.{{variant}}</p>
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
