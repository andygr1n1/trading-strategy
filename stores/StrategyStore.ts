import { defineStore } from 'pinia'
import type { INav } from './types'

export const useStrategyStore = defineStore('StrategyStore', {
  state: () => ({ navigation, filter: '' }),
  getters: {
    filteredNavigation: (state) => {
      // return state.navigation.filter(nav => nav.toLowerCase().includes(state.filter.trim().toLowerCase()))
      const filtered:INav[] = []
      state.navigation.forEach((block) => {
        const subMenus = block.data.filter(subMenu => subMenu.title.toLowerCase().includes(state.filter.trim().toLowerCase()))
        if (subMenus.length) { filtered.push({ title: block.title, data: subMenus }) }
      })

      return filtered
    }
  },

  actions: {
    onChangeFilter (payload: Event) {
      const target = (<HTMLInputElement>payload.target)
      this.filter = target.value
    }
  }
})

const navigation: INav[] = [
  {
    title: 'menu',
    data: [{ title: 'strategy', link: 'menu/strategy' }, { title: 'check-list', link: 'menu/check-list' }, { title: 'risk-management', link: 'menu/risk-management' }]
  },
  {
    title: 'blocks',
    data: [{
      title: 'order-block',
      link: 'blocks/order-block'
    },
    { title: 'breaker-block', link: 'blocks/breaker-block' },
    { title: 'mitigation-block', link: 'blocks/mitigation-block' }]
  },
  {
    title: 'primary signals',
    data: [
      { title: 'Narrowing + expansion', link: 'primary-signals/narrowing-expansion' },
      { title: 'False breakout + false takeaway', link: 'primary-signals/false-breakout' },
      { title: 'Double vertex / underworld', link: 'primary-signals/double-vertex-underworld' },
      { title: 'Divergence + realization', link: 'primary-signals/divergence-realization' },
      { title: 'Touch + step', link: 'primary-signals/touch-step' }
    ]
  }]
