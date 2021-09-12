import React from 'react';
import { useSelector } from 'react-redux';

const CompB = () => {
  // const name = useSelector((state) => state.count.name);
  const name = useSelector((state) => state.name.name);

  return (
    <>
      <div>Component B</div>
      <div>Name {name}</div>
    </>
  );
};

export default CompB;
