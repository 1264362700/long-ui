<template>
  <LongSpace direction="vertical" style="width: 100%">
    <LongCard title="基础卡片">
      这里是卡片的内容区域，支持任意自定义内容。
    </LongCard>

    <LongCard title="带额外操作的卡片">
      <template #extra>
        <LongButton type="text">查看更多</LongButton>
      </template>
      用于展示较为复杂的业务块。
    </LongCard>
  </LongSpace>
</template>
