import { initializeTimes, updateTimes } from './bookingUtils';
import { fetchAPI } from './api';

// Mock fetchAPI
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn()
}));

describe('initializeTimes', () => {
  test('returns correct times from fetchAPI for given date', () => {
    const mockDate = new Date('2023-06-28');
    const mockTimes = ['17:00', '18:00'];
    fetchAPI.mockReturnValueOnce(mockTimes);

    const result = initializeTimes(mockDate);
    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(result).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  test('returns new available times from fetchAPI for given date', () => {
    const prevTimes = ['17:00'];
    const newDate = new Date('2023-06-29');
    const updatedTimes = ['19:00', '20:00'];

    fetchAPI.mockReturnValueOnce(updatedTimes);

    const result = updateTimes(prevTimes, newDate);
    expect(fetchAPI).toHaveBeenCalledWith(newDate);
    expect(result).toEqual(updatedTimes);
  });
});