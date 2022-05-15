import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => ({
    showBio: true,
  }),
  actions: {
    toggleShowBio() {
      this.showBio = !this.showBio;
    }
  }
});