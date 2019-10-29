<template>
  <div class="page_top" v-scroll-to="'body'">
    <a href="#">⬆︎</a>
  </div>
</template>


<style scoped>
.page_top {
  padding: 18px 23px;
  background-color: #b5c87c;
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px -2px gray;
  position: fixed;
  bottom: 80px;
  right: 50px;
}

.page_top:hover {
  background-color: #bec4ae;
}

.page_top a {
  color: white;
  font-size: 20px;
}
</style>