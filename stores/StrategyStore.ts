import { defineStore } from 'pinia'
import type { INav } from './types'

export const useStrategyStore = defineStore('StrategyStore', {
  state: () => ({ navigation, filter: '' }),
  getters: {
    filteredNavigation: (state) => {
      // return state.navigation.filter(nav => nav.toLowerCase().includes(state.filter.trim().toLowerCase()))
      const filtered:INav[] = []
      state.navigation.forEach((block) => {
        const subMenus = block.data.filter(subMenu => subMenu.title.toLowerCase().includes(state.filter.trim().toLowerCase()) ||
        subMenu.tags?.toString().toLowerCase().includes(state.filter.trim().toLowerCase()))
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
    title: 'меню',
    data: [{ title: 'стратегия', link: 'menu/strategy' }, { title: 'чек лист', link: 'menu/check-list', tags: ['check list'] }, { title: 'риски', link: 'menu/risk-management' }]
  },
  {
    title: 'основы',
    data: [{ title: 'тайм фрейм', link: 'basics/time-frame' }]
  },
  {
    title: 'уровни',
    data: [
      { title: 'Уровень', link: 'levels/level', tags: ['levels'] },
      { title: 'Трендовые линии', link: 'levels/trend-line', tags: ['trend'] }
    ]
  },
  {
    title: 'блоки',
    data: [{
      title: 'ордер',
      link: 'blocks/order-block'
    },
    { title: 'брейкер', link: 'blocks/breaker-block' },
    { title: 'митигейшн', link: 'blocks/mitigation-block' }]
  },
  {
    title: 'основные сигналы',
    data: [
      { title: 'Сужение - расширение', link: 'primary-signals/narrowing-expansion' },
      { title: 'V-образный разворот', link: 'primary-signals/false-breakout' },
      { title: 'Двойное дно / вершина', link: 'primary-signals/double-vertex-underworld' },
      { title: 'Дивергенция + реализация', link: 'primary-signals/divergence-realization' },
      { title: 'Касание + ступенька', link: 'primary-signals/touch-step' }
    ]
  },
  {
    title: 'стоп сигналы',
    data: [{
      title: 'Треугольник',
      link: 'stop-signals/triangle'
    },
    {
      title: 'Пробой',
      link: 'stop-signals/Breakdown'
    },
    {
      title: 'Останавливающий объём',
      link: 'stop-signals/stop-volume'
    }
    ]
  },
  {
    title: 'индикаторы',
    data: [
      {
        title: 'Дельта',
        link: 'indicators/delta'
      },
      {
        title: 'atr',
        link: 'indicators/atr'
      }
    ]
  }]
