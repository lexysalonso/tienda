const Storage = () => {
  const Keys = {
    auth: "sdfsf877328947c2384sdfs/*23r2ec*dasdasd/*232/e2*as/d32837",
    refresh:
      "sdfsf877328947c2384sdfs/*23r2ec*dasdasd/*232/e2*as/d32837/refresh",
  };

  const load = (Key) => JSON.parse(localStorage.getItem(Key));

  const save = (Key, value) => localStorage.setItem(Key, JSON.stringify(value));

  const remove = (Key) => localStorage.removeItem(Key);

  return {
    load,
    save,
    remove,
    Keys,
  };
};

export default Storage;
