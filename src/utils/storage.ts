export const getStoragedVideoIds = () => {
  return JSON.parse(localStorage.getItem("favorites"));
};

export const addInStorage = (id: number) => {
  let storagedVideoIds: number[] | null = getStoragedVideoIds();
  if (!storagedVideoIds) {
    storagedVideoIds = [];
  }

  const idInArray = storagedVideoIds.filter((i) => i === id);
  if (idInArray.length > 0) {
    return;
  }
  storagedVideoIds.push(id);
  localStorage.setItem("favorites", JSON.stringify(storagedVideoIds));
};

export const deleteFromStorage = (id: number) => {
  const storagedVideoIds: number[] | null = getStoragedVideoIds();
  if (!storagedVideoIds || storagedVideoIds.length === 0) {
    return;
  }

  const filteredIds = storagedVideoIds.filter((i) => i !== id);
  localStorage.setItem("favorites", JSON.stringify(filteredIds));
};

export const checkIsInStorage = (id: number): boolean => {
  const storagedVideoIds: number[] | null = getStoragedVideoIds();
  if (!storagedVideoIds || storagedVideoIds.length === 0) {
    return false;
  }

  return storagedVideoIds.some((i) => i === id);
};
