import '../App.css';

const Header = ({data}) => {
  const { name, description, input, output } = data;

  return (
    <div className='header'>
      <h1><u>{ name }</u></h1>
      <div className='description' dangerouslySetInnerHTML={{__html: description}} />
    </div>
  );
}

export default Header;
