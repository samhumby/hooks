import '../App.css';
import React from 'react';

const Footer = ({data}) => {
  const { footer } = data;

  return (
    <div className='footer'>
      <ul>
        {
          footer.map((item, index) => <li key={`footer-key-item-${index}`}><div dangerouslySetInnerHTML={{__html: item}}/></li>)
        }
      </ul>
    </div>
  );
}

export default React.memo(Footer);
