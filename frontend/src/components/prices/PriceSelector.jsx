import { useState } from 'react';
import TimeSlotButtons from './TimeSlotButtons';

const priceOptions = {
  hourly: { morning: 200, afternoon: 400, evening: 600 },
  weekly: { morning: 200, afternoon: 400, evening: 600 },
  monthly: { morning: 200, afternoon: 400, evening: 600 },
};

const PriceSelector = () => {
  const [duration, setDuration] = useState('hourly');
  const [selectedSlot, setSelectedSlot] = useState('afternoon');

  const amount = priceOptions[duration][selectedSlot];

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h2 className="font-semibold mb-2">Select Price</h2>
      <div className="flex gap-3 mb-4">
        {['hourly', 'weekly', 'monthly'].map((d) => (
          <select
            key={d}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
          </select>
        ))}
      </div>

      <h3 className="mb-1">Select Price</h3>
      <TimeSlotButtons selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} />

      <div className="mt-4 font-semibold">Payable Amount: ₹{amount}</div>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Proceed To Payment
      </button>
    </div>
  );
};

export default PriceSelector;
