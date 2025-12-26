# Tabs 标签页

分隔内容上有关联但属于不同类别的部分。

## 基础用法
默认样式的页签。

<div class="demo-block">
  <LongTabs v-model="activeName">
    <LongTabPane label="用户管理" name="first">用户管理内容</LongTabPane>
    <LongTabPane label="配置管理" name="second">配置管理内容</LongTabPane>
    <LongTabPane label="角色管理" name="third">角色管理内容</LongTabPane>
  </LongTabs>
</div>

<script setup>
import { ref } from 'vue'
const activeName = ref('first')
</script>

## 选项卡样式
设置 `type="card"` 可以展示卡片风格。

<div class="demo-block">
  <LongTabs v-model="activeCard" type="card">
    <LongTabPane label="实时数据" name="1">实时监控面板</LongTabPane>
    <LongTabPane label="历史查询" name="2">历史日志记录</LongTabPane>
  </LongTabs>
</div>

<script setup>
const activeCard = ref('1')
</script>

## Tabs 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值，选中选项卡的 name | string / number | — | 第一个选项卡的 name |
| type | 风格类型 | string | card / border-card | — |
| tab-position | 选项卡位置 | string | top / right / bottom / left | top |

## TabPane 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 选项卡标题 | string | — | — |
| name | 标识符，对应 v-model | string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
