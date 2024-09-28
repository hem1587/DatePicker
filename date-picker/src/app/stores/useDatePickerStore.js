import { create } from 'zustand';

const useDatePickerStore = create((set) => ({
  startDate: new Date(),
  endDate: null,
  recurrenceType: 'daily', // 'daily', 'weekly', 'monthly', 'yearly'
  recurrenceInterval: 1,
  specificDaysOfWeek: [],
  nthDayOfMonth: null,

  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  setSpecificDaysOfWeek: (days) => set({ specificDaysOfWeek: days }),
  setNthDayOfMonth: (nthDay) => set({ nthDayOfMonth: nthDay }),
}));
export default useDatePickerStore;
