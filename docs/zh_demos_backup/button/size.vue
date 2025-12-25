<template>
  <div class="demo-spacing">
    <div class="demo-row">
      <long-button size="large">Large</long-button>
      <long-button>Default</long-button>
      <long-button size="small">Small</long-button>
    </div>
    <div class="demo-row">
      <long-button size="large" round>Large</long-button>
      <long-button round>Default</long-button>
      <long-button size="small" round>Small</long-button>
    </div>
    <div class="demo-row">
      <long-button size="large" circle icon="long-icon-search"></long-button>
      <long-button circle icon="long-icon-search"></long-button>
      <long-button size="small" circle icon="long-icon-search"></long-button>
    </div>
  </div>
</template>

<style scoped>
.demo-spacing {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
