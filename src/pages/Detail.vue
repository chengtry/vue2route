<template>
    <div>
      <h3>消息ID：{{id}}</h3>
      <h3>消息标题：{{title}}</h3>
    </div>
</template>

<script>
  export default {
    name:'Detail',
    props:['id','title']
  }
</script>

<style>

</style>