import { defineStore } from 'pinia'
import type { INav } from './types'

export const useBlogStore = defineStore('useBlogStore', {
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
    data: [{ title: 'blog', link: 'menu/blog' }]
  },
  { title: 'crypto', data: [{ title: 'Bright future of ICP', link: 'crypto/icp-bright-future' }] },
  { title: 'trading', data: [{ title: 'Entry after fall', link: 'trading/entry-after-fall' }] }]
