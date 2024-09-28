"use client"

import useDatePickerStore from '../stores/useDatePickerStore';

const RecurrenceOptions = () => {
  const { recurrenceType, setRecurrenceType } = useDatePickerStore();

  return (
    <div className="mb-4">
      <h3 className="text-md font-medium mb-2">Recurrence Pattern:</h3>
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
