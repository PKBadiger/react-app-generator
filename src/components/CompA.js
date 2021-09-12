import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Common from './common';

const CompA = () => {
  const fetchStore = ({ count: { count } }) => ({ count });

  const count = useSelector(fetchStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'UPDATE' });
    }, 3000);
  }, []);

  return (
    <>
      <div>
        Component A {count} <Common />
      </div>
    </>
  );
};

export default CompA;
