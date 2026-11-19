import type { Component, ComputedRef, MaybeRefOrGetter } from 'vue'
import type { WujieTabsManager, WujieTabsState } from '@melt-js/libs-wujie2-tabs-core'

export { createWujieTabs } from '@melt-js/libs-wujie2-tabs-core'
export type {
  WujieTab,
  WujieTabsListener,
  WujieTabsManager,
  WujieTabsState,
} from '@melt-js/libs-wujie2-tabs-core'

export interface WujieTabBarSlot extends WujieTabsState {
  activate: WujieTabsManager['activate']
  close: WujieTabsManager['close']
  closeOthers: WujieTabsManager['closeOthers']
  closeAll: WujieTabsManager['closeAll']
}

/** 订阅页签状态，返回只读计算属性；依赖作用域销毁时自动退订。 */
export declare function useWujieTabs(manager: MaybeRefOrGetter<WujieTabsManager>): ComputedRef<WujieTabsState>

/** 无头组件：不渲染 DOM，通过默认插槽把状态与操作交给宿主自行绘制。 */
export declare const WujieTabBar: Component
