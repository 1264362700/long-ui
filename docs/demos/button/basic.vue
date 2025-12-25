<template>
  <div class="demo-row">
    <long-button>Default</long-button>
    <long-button type="primary">Primary</long-button>
    <long-button type="success">Success</long-button>
    <long-button type="info">Info</long-button>
    <long-button type="warning">Warning</long-button>
    <long-button type="danger">Danger</long-button>
  </div>

  <div class="demo-row">
    <long-button plain>Plain</long-button>
    <long-button type="primary" plain>Primary</long-button>
    <long-button type="success" plain>Success</long-button>
    <long-button type="info" plain>Info</long-button>
    <long-button type="warning" plain>Warning</long-button>
    <long-button type="danger" plain>Danger</long-button>
  </div>

  <div class="demo-row">
    <long-button round>Round</long-button>
    <long-button type="primary" round>Primary</long-button>
    <long-button type="success" round>Success</long-button>
    <long-button type="info" round>Info</long-button>
    <long-button type="warning" round>Warning</long-button>
    <long-button type="danger" round>Danger</long-button>
  </div>

  <div class="demo-row">
    <long-button circle icon="long-icon-search"></long-button>
    <long-button type="primary" circle icon="long-icon-edit"></long-button>
    <long-button type="success" circle icon="long-icon-check"></long-button>
    <long-button type="info" circle icon="long-icon-message"></long-button>
    <long-button type="warning" circle icon="long-icon-star"></long-button>
    <long-button type="danger" circle icon="long-icon-delete"></long-button>
  </div>
</template>

<style scoped>
.demo-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
