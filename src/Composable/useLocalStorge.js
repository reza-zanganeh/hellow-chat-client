export default function () {
  const _saveOnLocalStorge = (key, value) => {
    if (!value) return;
    localStorage.setItem(key, JSON.stringify(value));
  };

  const _getFromLocalStorge = (key) => {
    const value = JSON.parse(localStorage.getItem(key));
    if (!value) return false;
    return value;
  };

  const saveAuthDataOnBrowserStorge = (authData) => {
    _saveOnLocalStorge(import.meta.env.VITE_TOKEN_KEY, authData);
  };

  const getAuthDataFromBrowserStorge = () => {
    return _getFromLocalStorge(import.meta.env.VITE_TOKEN_KEY);
  };

  return {
    saveAuthDataOnBrowserStorge,
    getAuthDataFromBrowserStorge,
  };
}
