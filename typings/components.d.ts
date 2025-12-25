import type { LongButton } from '@long-ui/components'

declare module 'vue' {
    export interface GlobalComponents {
        LongButton: typeof LongButton
    }
}

export { }
