import { defineStore } from 'pinia'

export const useStrategyStore = defineStore('StrategyStore', {
  state: () => ({ navigation, filter: '' }),
  getters: {
    filteredNavigation: (state) => {
      return state.navigation.filter(nav => nav.toLowerCase().includes(state.filter.trim().toLowerCase()))
    }
  },

  actions: {
    onChangeFilter (payload: Event) {
      const target = (<HTMLInputElement>payload.target)
      this.filter = target.value
    }
  }
})

const navigation:string[] = ['order-block', 'breaker-block', 'mitigation-block']
