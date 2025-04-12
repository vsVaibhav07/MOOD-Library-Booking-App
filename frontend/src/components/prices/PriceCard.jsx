const PriceCard = ({ title, options }) => (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold bg-yellow-100 px-2 py-1 rounded">{title}</h3>
      <ul className="mt-2 space-y-1">
        {options.map((item, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{item.label}</span>
            <span>₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default PriceCard;
  