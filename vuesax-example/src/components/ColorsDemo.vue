<template lang="html">
  <div class="con-colors">
    <ul>
      <li class="primary">
        primary
      </li>
      <li class="success">
        success
      </li>
      <li class="danger">
        danger
      </li>
      <li class="warning">
        warning
      </li>
      <li class="dark">
        dark
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ColorsDemo'
  };
</script>

<style lang="css">
  .con-colors ul{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .con-colors li{
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    background: rgb(155, 250, 149);
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    cursor: default;
  }
  .primary {
    background: rgb(var(--primary)) !important;
    box-shadow: 0px 15px 40px -10px rgba(var(--primary),.9);
  }
  .success {
    background: rgb(var(--success)) !important;
    box-shadow: 0px 15px 40px -10px rgba(var(--success),.9);
  }
  .danger {
    background: rgb(var(--danger)) !important;
    box-shadow: 0px 15px 40px -10px rgba(var(--danger),.9);
  }
  .warning {
    background: rgb(var(--warning)) !important;
    box-shadow: 0px 15px 40px -10px rgba(var(--warning),.9);
  }
  .dark {
    background: rgb(var(--dark)) !important;
    box-shadow: 0px 15px 40px -10px rgba(var(--dark),.9);
  }
</style>
