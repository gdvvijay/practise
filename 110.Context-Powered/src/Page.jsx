import React from 'react';
import Header from './Header';
import Section from './Section';

function Page() {
  // This component acts as a pass-through
  return (
    <div className="page">
      <Header />
      <Section />
    </div>
  );
}

export default Page;