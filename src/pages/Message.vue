<template>
<div>
  <ul>
    <li v-for="m in message" :key=m.id>
      <router-link :to="{
        name: 'detailMessage',
        query:{
          id: m.id,
          title: m.title
        }
        }">
        {{m.title}}
      </router-link>&nbsp;&nbsp;
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name:'Message',
    data() {
      return {
        message:[
          {id:'001',title:'这是messge1'},
          {id:'002',title:'这是messge2'},
          {id:'003',title:'这是messge3'},
          {id:'004',title:'这是messge4'}
        ]
      }
    },
  }
</script>

<style>

</style>