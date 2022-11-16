import '../App.css';
import React from 'react';

const Header = ({data}) => {
  const { name, description, input, output } = data;

  return (
    <div className='header'>
      <h1><u>{ name }</u></h1>
      <div className='description' dangerouslySetInnerHTML={{__html: description}} />
    </div>
  );
}

export default React.memo(Header);
