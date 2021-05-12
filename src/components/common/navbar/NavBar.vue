<template>
  <div class="Nav-bar">
      <div class="left"><slot  name="left"></slot></div>
      <div class="center"><slot  name="center">MOMO</slot></div>
      <div class="right"><slot  name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.Nav-bar{
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    /* background-color: rgb(255, 255, 255); */
    box-shadow: 0px 1px 2px rgba(139, 139, 139, 0.596)
}
.left,.right{
    flex: 1;
    /* background-color: red; */
}
.center{
    flex: 3;
    /* background-color: yellow; */
    text-align: center;

}
</style>