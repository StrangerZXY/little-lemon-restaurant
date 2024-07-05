import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from './api';

jest.mock('./api');

describe('BookingPage', () => {
  it('initializeTimes should return the expected value from fetchAPI', () => {
    const date = new Date();
    const mockFetchAPIResult = ['17:00', '18:00'];
    fetchAPI.mockReturnValue(mockFetchAPIResult);

    const result = initializeTimes(date);

    expect(result).toEqual(mockFetchAPIResult);
  });

  it('updateTimes should return the same value as fetchAPI', () => {
    const date = new Date();
    const mockFetchAPIResult = ['17:00', '18:00'];
    fetchAPI.mockReturnValue(mockFetchAPIResult);

    const result = updateTimes(date);

    expect(result).toEqual(mockFetchAPIResult);
  });
});
