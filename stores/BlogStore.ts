import { defineStore } from 'pinia'

export const useBlogStore = defineStore('useBlogStore', {
  state: () => ({ navigation, filter: '' }),
  getters: {
    filteredNavigation: (state) => {
      // return state.navigation.filter(nav => nav.toLowerCase().includes(state.filter.trim().toLowerCase()))
      const filtered:{title:string, data: string[]}[] = []
      state.navigation.forEach((block) => {
        const subMenus = block.data.filter(subMenu => subMenu.toLowerCase().includes(state.filter.trim().toLowerCase()))
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

const navigation: {title:string, data: string[]}[] = [
  {
    title: 'menu',
    data: ['blog']
  },
  { title: 'crypto', data: ['icp-bright-future'] }]
