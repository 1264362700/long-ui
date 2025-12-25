<template>
  <div class="demo-row">
    <long-button disabled>Default</long-button>
    <long-button type="primary" disabled>Primary</long-button>
    <long-button type="success" disabled>Success</long-button>
    <long-button type="info" disabled>Info</long-button>
    <long-button type="warning" disabled>Warning</long-button>
    <long-button type="danger" disabled>Danger</long-button>
  </div>

  <div class="demo-row" style="margin-top: 20px">
    <long-button plain disabled>Plain</long-button>
    <long-button type="primary" plain disabled>Primary</long-button>
    <long-button type="success" plain disabled>Success</long-button>
    <long-button type="info" plain disabled>Info</long-button>
    <long-button type="warning" plain disabled>Warning</long-button>
    <long-button type="danger" plain disabled>Danger</long-button>
  </div>
</template>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
