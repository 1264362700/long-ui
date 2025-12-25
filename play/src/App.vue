<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const inputValue = ref('')
const selectValue = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Disabled Option', value: '4', disabled: true },
]

const switchValue = ref(false)
const radioValue = ref('1')
const radioGroupValue = ref('3')
const checkboxValue = ref(true)
const checkboxGroupValue = ref(['Option A'])
</script>

<template>
  <div class="playground">
    <h1>Long UI Playground</h1>
    <p class="description">组件开发调试环境</p>

    <section class="demo-section">
      <h2>Button 按钮</h2>

      <div class="demo-block">
        <h3>基础用法</h3>
        <div class="demo-row">
          <LongButton>Default</LongButton>
          <LongButton type="primary">Primary</LongButton>
          <LongButton type="success">Success</LongButton>
          <LongButton type="warning">Warning</LongButton>
          <LongButton type="danger">Danger</LongButton>
          <LongButton type="info">Info</LongButton>
          <LongButton type="text">Text</LongButton>
        </div>
      </div>

      <div class="demo-block">
        <h3>朴素按钮</h3>
        <div class="demo-row">
          <LongButton plain>Plain</LongButton>
          <LongButton type="primary" plain>Primary</LongButton>
          <LongButton type="success" plain>Success</LongButton>
          <LongButton type="warning" plain>Warning</LongButton>
          <LongButton type="danger" plain>Danger</LongButton>
          <LongButton type="info" plain>Info</LongButton>
        </div>
      </div>

      <div class="demo-block">
        <h3>圆角按钮</h3>
        <div class="demo-row">
          <LongButton round>Round</LongButton>
          <LongButton type="primary" round>Primary</LongButton>
          <LongButton type="success" round>Success</LongButton>
          <LongButton type="warning" round>Warning</LongButton>
          <LongButton type="danger" round>Danger</LongButton>
        </div>
      </div>

      <div class="demo-block">
        <h3>不同尺寸</h3>
        <div class="demo-row">
          <LongButton type="primary" size="large">Large</LongButton>
          <LongButton type="primary">Default</LongButton>
          <LongButton type="primary" size="small">Small</LongButton>
        </div>
      </div>

      <div class="demo-block">
        <h3>禁用状态</h3>
        <div class="demo-row">
          <LongButton disabled>Disabled</LongButton>
          <LongButton type="primary" disabled>Primary</LongButton>
          <LongButton type="success" disabled>Success</LongButton>
        </div>
      </div>

      <div class="demo-block">
        <h3>加载状态</h3>
        <div class="demo-row">
          <LongButton type="primary" :loading="loading" @click="handleClick">
            {{ loading ? '加载中...' : '点击加载' }}
          </LongButton>
          <LongButton type="primary" loading>Loading</LongButton>
        </div>
      </div>

      <div class="demo-block">
        <h3>块级按钮</h3>
        <div class="demo-row" style="flex-direction: column;">
          <LongButton type="primary" block>Block Button</LongButton>
          <LongButton type="success" block>Block Success</LongButton>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Input 输入框</h2>
      
      <div class="demo-block">
        <h3>基础用法</h3>
        <div class="demo-row">
          <LongInput v-model="inputValue" placeholder="请输入内容" />
        </div>
      </div>

      <div class="demo-block">
        <h3>禁用状态</h3>
        <div class="demo-row">
          <LongInput v-model="inputValue" disabled placeholder="禁用状态" />
        </div>
      </div>

      <div class="demo-block">
        <h3>可清空</h3>
        <div class="demo-row">
          <LongInput v-model="inputValue" clearable placeholder="请输入内容" />
        </div>
      </div>

      <div class="demo-block">
        <h3>不同尺寸</h3>
        <div class="demo-row">
          <LongInput v-model="inputValue" size="large" placeholder="Large Input" />
          <LongInput v-model="inputValue" placeholder="Default Input" />
          <LongInput v-model="inputValue" size="small" placeholder="Small Input" />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Select 选择器</h2>
      
      <div class="demo-block">
        <h3>基础用法</h3>
        <div class="demo-row">
          <LongSelect v-model="selectValue" :options="options" placeholder="请选择" />
        </div>
      </div>

      <div class="demo-block">
        <h3>禁用状态</h3>
        <div class="demo-row">
          <LongSelect v-model="selectValue" :options="options" disabled placeholder="请选择" />
        </div>
      </div>

      <div class="demo-block">
        <h3>可清空</h3>
        <div class="demo-row">
          <LongSelect v-model="selectValue" :options="options" clearable placeholder="请选择" />
        </div>
      </div>

      <div class="demo-block">
        <h3>不同尺寸</h3>
        <div class="demo-row">
          <LongSelect v-model="selectValue" :options="options" size="large" placeholder="Large Select" />
          <LongSelect v-model="selectValue" :options="options" placeholder="Default Select" />
          <LongSelect v-model="selectValue" :options="options" size="small" placeholder="Small Select" />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Switch 开关</h2>
      <div class="demo-block">
        <h3>基础用法</h3>
        <div class="demo-row">
          <LongSwitch v-model="switchValue" />
          <LongSwitch v-model="switchValue" active-text="按月付费" inactive-text="按年付费" />
        </div>
      </div>
      <div class="demo-block">
        <h3>禁用状态</h3>
        <div class="demo-row">
          <LongSwitch v-model="switchValue" disabled />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Radio 单选框</h2>
      <div class="demo-block">
        <h3>基础用法</h3>
        <div class="demo-row">
          <LongRadio v-model="radioValue" label="1">Option 1</LongRadio>
          <LongRadio v-model="radioValue" label="2">Option 2</LongRadio>
        </div>
      </div>
      <div class="demo-block">
        <h3>单选框组</h3>
        <div class="demo-row">
          <LongRadioGroup v-model="radioGroupValue">
            <LongRadio label="3">Option A</LongRadio>
            <LongRadio label="6">Option B</LongRadio>
            <LongRadio label="9">Option C</LongRadio>
          </LongRadioGroup>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2>Checkbox 多选框</h2>
      <div class="demo-block">
        <h3>基础用法</h3>
        <div class="demo-row">
          <LongCheckbox v-model="checkboxValue">Option 1</LongCheckbox>
        </div>
      </div>
      <div class="demo-block">
        <h3>多选框组</h3>
        <div class="demo-row">
          <LongCheckboxGroup v-model="checkboxGroupValue">
            <LongCheckbox label="Option A" />
            <LongCheckbox label="Option B" />
            <LongCheckbox label="Option C" />
          </LongCheckboxGroup>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.playground {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: var(--long-font-family);

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: var(--long-color-text-primary);
    margin: 0 0 8px 0;
  }

  .description {
    color: var(--long-color-text-secondary);
    margin: 0 0 40px 0;
  }
}

.demo-section {
  h2 {
    font-size: 24px;
    font-weight: 500;
    color: var(--long-color-text-primary);
    margin: 0 0 24px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--long-color-border-light);
  }
}

.demo-block {
  margin-bottom: 32px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--long-color-text-regular);
    margin: 0 0 16px 0;
  }
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
