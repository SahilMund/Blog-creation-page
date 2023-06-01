export const storeDataToLocalStorage = (key, value) => {
  let data = JSON.parse(localStorage.getItem(key));

  if (!data) {
    data = [];
    data[0] = value;
  } else {
    data.push(value);
  }

  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));
