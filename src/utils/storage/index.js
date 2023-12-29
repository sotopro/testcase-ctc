export const getStorage = (key, initialValue) => {
  if (typeof window !== "undefined" && window.localStorage !== "undefined") {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error getting localStorage key “${key}”:`, error);
      return initialValue;
    }
  }
};

export const setStorage = (key, value) => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      if (localStorage.getItem(key) !== null) {
        const item = JSON.parse(localStorage.getItem(key));
        const newItem = JSON.stringify([...item, value]);
        window.localStorage.setItem(key, newItem);
        return newItem;
      }

      const newValue = JSON.stringify(value);
      window.localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }
};
