import '../App.css';

const Footer = ({data}) => {
  const { footer } = data;

  return (
    <div className='footer'>
      <ul>
        {
          footer.map(item => <li><div dangerouslySetInnerHTML={{__html: item}}/></li>)
        }
      </ul>
    </div>
  );
}

export default Footer;
