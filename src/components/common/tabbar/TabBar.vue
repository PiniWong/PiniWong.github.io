<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#tab-bar{
    display: flex;
    background-color: aliceblue;
    box-shadow: 0 -2px 5px rgba(red, rgba(87, 87, 87, 0.301), blue, alpha);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}

</style>