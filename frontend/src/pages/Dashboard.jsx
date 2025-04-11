import React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import SubmitDetail from '../components/SubmitDetail';

function Dashboard() {
  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <SubmitDetail />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
