import Navbar from '../components/common/Navbar';
import PriceCard from '../components/prices/PriceCard';
import PriceSelector from '../components/prices/PriceSelector';

const Prices = () => {
  const hourly = [
    { label: '3 hour', price: 200 },
    { label: '6 hour', price: 400 },
    { label: '9 hour', price: 600 },
  ];
  const weekly = [
    { label: 'Half Day', price: 200 },
    { label: 'Full Day', price: 400 },
    { label: 'Full Day (Reserved)', price: 600 },
  ];
  const monthly = [
    { label: '3 hour', price: 200 },
    { label: '6 hour', price: 400 },
    { label: '9 hour', price: 600 },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col lg:flex-row justify-center gap-10">

<PriceSelector />

<div className="space-y-4">
  <PriceCard title="Hourly" options={hourly} />
  <PriceCard title="Weekly" options={weekly} />
  <PriceCard title="Monthly" options={monthly} />
</div>
</div></>
    
  );
};

export default Prices;
