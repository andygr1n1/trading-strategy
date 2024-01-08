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
    data: [{ title: 'blog', link: 'blog' }]
  },
  { title: 'crypto', data: [{ title: 'icp-bright-future', link: 'icp-bright-future' }] }]
