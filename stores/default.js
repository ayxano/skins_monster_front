import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'default',
  state: () => ({
    modals: [],
    types: {}
  })
})
