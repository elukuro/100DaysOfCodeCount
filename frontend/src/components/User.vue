<template>
    <div>
        <h1>ini untuk user  {{fetchDataValue.user[0].name}}</h1>
    </div>
</template>

<script>
export default {
    name:'User',
    props:['fetchDataValue'],
    data(){
        return{

        }
    }
}
</script>

