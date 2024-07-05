const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

export function fetchAPI(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
}

export function submitAPI(formData) {
  return true;
}

// For Unit Tests
// New function to read from local storage
export function readFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

// New function to write to local storage
export function writeToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}