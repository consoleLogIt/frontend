const Store = {
  key: "history_data",

  getHistory() {
    const item = localStorage.getItem(this.key);
    return item ? JSON.parse(item) : [];
  },

  setHistory(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  },

  clearHistory() {
    localStorage.removeItem(this.key);
  },
};


export default Store;