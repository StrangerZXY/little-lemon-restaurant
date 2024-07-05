// Unit Tests for API functions and Local Storage Functions

import { fetchAPI, submitAPI, readFromLocalStorage, writeToLocalStorage } from './api';

describe('API functions', () => {
  it('fetchAPI should return correct values based on seeded random', () => {
    const date = new Date('2024-07-05');
    const result = fetchAPI(date);
    expect(result).toEqual(expect.arrayContaining(['17:00', '17:30', '18:00']));
  });

  it('submitAPI should return true', () => {
    const formData = { firstName: 'John', lastName: 'Doe' };
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});

describe('LocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should write to local storage', () => {
    const mockData = { key: 'value' };
    writeToLocalStorage('formData', mockData);

    const storedData = localStorage.getItem('formData');
    expect(storedData).toEqual(JSON.stringify(mockData));
  });

  it('should read from local storage', () => {
    const mockData = { key: 'value' };
    localStorage.setItem('formData', JSON.stringify(mockData));

    const result = readFromLocalStorage('formData');
    expect(result).toEqual(mockData);
  });

  it('should return null if no data in local storage', () => {
    const result = readFromLocalStorage('nonexistentKey');
    expect(result).toBeNull();
  });
});
