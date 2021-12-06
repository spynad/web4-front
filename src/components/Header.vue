<template>
    <div class="main_header">
        <div class="left_head">
            <h1>{{fullName}}, {{group}}</h1>
        </div>
        <div class="right_head">
            <h1>Var. №: {{variant}}</h1>
        </div>
    </div>
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

.main_header{
    background-color: #B79AE2;
    overflow: hidden;
    width: 100%;
}

.left_head{
    width: 50%;
    float: left;
    padding: 1%;

}

.right_head{
    width: 43%;
    float: right;
    text-align: right;
    padding: 1%;
}

</style>