"use client"

import React from 'react';
import { format, addDays, startOfMonth } from 'date-fns';
import useDatePickerStore from '../stores/useDatePickerStore';

const DatePreview = () => {
  const { startDate, recurrenceType, recurrenceInterval } = useDatePickerStore();
  
  // Dummy logic for recurring dates preview (can be improved)
  const previewDates = [];
  let current = startDate;

  for (let i = 0; i < 5; i++) {
    previewDates.push(current);
    current = addDays(current, recurrenceInterval); // Modify for weekly, monthly, etc.
  }

  return (
    <div className="border p-4 mt-4">
      <h4 className="font-medium mb-2">Preview:</h4>
      <div className="grid grid-cols-3 gap-2">
        {previewDates.map((date, idx) => (
          <div key={idx} className="border p-2 text-center">
            {format(date, 'MMM d, yyyy')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePreview;

