# useTable 表格钩子

`useTable` 是 long-ui 针对企业级中台表格页面封装的核心 Hook，旨在通过逻辑复用极大地简化表格数据的请求、加载与分页同步逻辑。

## 基础用法

搭配 `long-table` 和 `long-pagination` 使用，实现自动化的状态流转。

<preview path="../demos/hooks/use-table-basic.vue" title="自动化表格逻辑" description="演示了 useTable 如何处理异步数据流与分页回溯。" />

## 核心能力
- **自动 Loading**: 请求发起时自动设置 `loading.value = true`，结束后自动重置。
- **分页同步**: 内置 `pagination` 响应式对象，支持 v-model 无缝对接。
- **自动回溯**: 当你在最后一页删除了所有数据（导致当前页为空但总数仍有余量）时，Hook 会自动执行翻页回退，确保存档数据始终可见。

## API 说明

### useTable 参数
```ts
const { ... } = useTable(api, options)
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| api | 异步数据获取方法 | `(params: any) => Promise<{ data: any[], total: number }>` | — |
| options | 配置项 | `UseTableOptions` | `{}` |

### options 配置
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| immediate | 是否在 mounted 后立即执行请求 | `boolean` | `true` |
| initialPagination | 初始分页参数 | `{ currentPage?: number, pageSize?: number }` | `{ currentPage: 1, pageSize: 10 }` |

### 返回值 (Destructuring)
| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| data | 表格数据源 | `Ref<any[]>` |
| loading | 加载状态 | `Ref<boolean>` |
| pagination | 分页对象 {total, currentPage, pageSize} | `ReactiveObject` |
| refresh | 手动刷新当前页数据 | `() => void` |
| search | 跳转到第一页并执行带参搜索 | `(params?: any) => void` |
| handlePageChange | 页码变更回调 | `(page: number) => void` |
| handleSizeChange | 每页大小变更回调 | `(size: number) => void` |
