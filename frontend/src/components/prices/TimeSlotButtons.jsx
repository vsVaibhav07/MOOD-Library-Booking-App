const TimeSlotButtons = ({ selectedSlot, setSelectedSlot }) => {
    const slots = [
      { label: 'Morning (8.00AM - 12.30PM)', value: 'morning' },
      { label: 'Afternoon (12.30PM - 6.30PM)', value: 'afternoon' },
      { label: 'Evening (6.30PM - 10.00PM)', value: 'evening' },
    ];
  
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {slots.map((slot) => (
          <button
            key={slot.value}
            onClick={() => setSelectedSlot(slot.value)}
            className={`border px-3 py-2 rounded ${
              selectedSlot === slot.value ? 'border-blue-600 text-blue-600' : 'border-gray-300'
            }`}
          >
            {slot.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default TimeSlotButtons;
  