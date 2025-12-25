# useForm 表单钩子

`useForm` 用于简化表单的状态管理、校验与重置逻辑。

## 基础用法

<preview path="../demos/hooks/use-form-basic.vue" title="基础表单管理" description="通过 useForm 统筹管理表单字段与重置操作。" />

## API 说明

### useForm 参数
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 配置项 | `UseFormOptions` | — |

### options 配置
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initialValues | 表单初始值 | `Record<string, any>` | `{}` |
| rules | 校验规则 (Plan) | `any` | — |

### 返回值
| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| formModel | 响应式表单数据 | `ReactiveObject` |
| resetFields | 重置所有字段到初始值 | `() => void` |
| validate | 触发全表单校验 (Plan) | `() => Promise<boolean>` |
| formRef | 用于绑定 Form 组件的 Ref | `Ref` |
