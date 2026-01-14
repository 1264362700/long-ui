import { withInstall, withNoopInstall } from '@long-ui/utils'

import Timeline from './src/timeline.vue'
import TimelineItem from './src/timeline-item.vue'

export const LongTimeline = withInstall(Timeline, {
    TimelineItem,
})
export const LongTimelineItem = withNoopInstall(TimelineItem)

export default LongTimeline

export * from './src/timeline'
