import '../App.css';
import React from 'react';

// Forwarding the ref to the inner div
const BoxForward = ({text}, ref) => (
  <div className="refBox" ref={ref}>
    { text }
  </div>
);

export default React.forwardRef(BoxForward);
