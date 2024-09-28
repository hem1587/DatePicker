"use client"
import useDatePickerStore from '../stores/useDatePickerStore';
import { useState } from 'react';

const RecurrenceCustomization = () => {
  const { recurrenceType, recurrenceInterval, setRecurrenceInterval, setSpecificDaysOfWeek, setNthDayOfMonth } = useDatePickerStore();
  const [days, setDays] = useState([]);

  const handleDayChange = (day) => {
    const newDays = days.includes(day)
      ? days.filter((d) => d !== day)
      : [...days, day];
    setDays(newDays);
    setSpecificDaysOfWeek(newDays);
  };

  return (
    <div className="mb-4">
      <h3 className="text-md font-medium mb-2">Customize Recurrence:</h3>
      <div className="flex space-x-2 mb-4">
        <span>Every</span>
        <input
          type="number"
          value={recurrenceInterval}
          onChange={(e) => setRecurrenceInterval(Number(e.target.value))}
          className="w-16 p-2 border border-gray-300 rounded-md"
        />
        <span>{recurrenceType}</span>
      </div>

      {recurrenceType === 'weekly' && (
        <div className="mb-4">
          <h4 className="text-md mb-2">Days of the Week:</h4>
          <div className="flex space-x-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
              <button
                key={day}
                onClick={() => handleDayChange(idx)}
                className={`p-2 border ${days.includes(idx) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {recurrenceType === 'monthly' && (
        <div className="mb-4">
          <h4 className="text-md mb-2">Nth Day of the Month:</h4>
          <input
            type="number"
            onChange={(e) => setNthDayOfMonth(Number(e.target.value))}
            className="w-16 p-2 border border-gray-300 rounded-md"
            placeholder="e.g., 2 for 2nd day"
          />
        </div>
      )}
    </div>
  );
};

export default RecurrenceCustomization;
