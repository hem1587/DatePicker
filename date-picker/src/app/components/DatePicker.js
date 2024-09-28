"use client"

import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import DatePreview from './DatePreview';

const DatePicker = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Select Recurring Dates</h2>
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <DatePreview />
    </div>
  );
};

export default DatePicker;
