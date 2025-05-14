export const getFromLocalStorage = <T>(key: string): T | null => {
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      return JSON.parse(saved) as T;
    } catch (e) {
      console.error(`Error parsing ${key} from localStorage:`, e);
    }
  }
  return null;
};

export const setToLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error setting ${key} in localStorage:`, e);
  }
};
