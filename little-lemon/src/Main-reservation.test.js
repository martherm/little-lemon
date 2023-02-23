import { initializeTimes, updateTimes } from './BookingForm';

describe('initializeTimes', () => {
  test('returns an array with 6 time strings', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBe(6);
    expect(typeof times[0]).toBe('string');
  });
});

describe('updateTimes', () => {
  test('returns an object with date and times properties', () => {
    const testDate = '2022-12-31';
    const action = updateTimes(testDate);
    expect(action).toHaveProperty('date', testDate);
    expect(action).toHaveProperty('times');
  });

  test('returns an object with times matching the input state', () => {
    const testDate = '2022-12-31';
    const testTimes = ['17:00', '18:00', '19:00'];
    const action = updateTimes(testDate, testTimes);
    expect(action).toHaveProperty('date', testDate);
    expect(action).toHaveProperty('times', testTimes);
  });
});