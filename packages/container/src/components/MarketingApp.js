import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/Marketing';

export const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current)
  });
  console.log(ref.current)
  return (
    <div ref={ref}></div>
  )
}