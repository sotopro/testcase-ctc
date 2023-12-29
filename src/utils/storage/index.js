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
  console.warn({ window });
  if (typeof window !== "undefined") {
    try {
      if (localStorage.getItem(key) !== null) {
        const item = JSON.parse(localStorage.getItem(key));
        const newItem = JSON.stringify([...item, value]);
        window.localStorage.setItem(key, newItem);
        return newItem;
      }

      console.warn({ setStorage: value });

      const newValue = JSON.stringify(value);
      window.localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }
};

export const removeStorage = (key, id) => {
  if (typeof window !== "undefined") {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      const newItem = item.filter((task) => task.id !== id);
      window.localStorage.setItem(key, JSON.stringify(newItem));
      return newItem;
    } catch (error) {
      console.error(`Error removing localStorage key “${key}”:`, error);
    }
  }
};

export const updateStorage = (key, id, value) => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      const newItem = item.map((task) => {
        if (task.id === id) {
          return { ...task, ...value };
        }
        return task;
      });
      window.localStorage.setItem(key, JSON.stringify(newItem));
      return newItem;
    } catch (error) {
      console.error(`Error updating localStorage key “${key}”:`, error);
    }
  }
};
