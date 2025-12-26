# ProFormTable 综合场景演示

高度集成的业务组合范例，展示了查询、列表、分页与高阶 Hooks 的协同工作。

## 基础业务模型
包含“查询过滤区”与“数据列表区”。

<script setup>
import Demo from '../demos/pro-table/basic.vue'
</script>

<div class="demo-block">
  <Demo />
</div>

## 核心价值
- **逻辑高度内聚**：集成 `useTable` 进行自动分页与搜索。
- **状态全自动化**：`useForm` 自动处理 Loading 与重置。
- **高级交互预置**：`LongDescriptions` 自带复制与高亮反馈。

::: tip 建议
开发者可以根据此 Demos 快速复用至实际的业务中台页面。
:::
