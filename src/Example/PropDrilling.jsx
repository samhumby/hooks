import '../App.css';


const PropDrilling = ({theme}) => {
  return (
    <div className="propDrillingWrapper">
      <h2>Prop Drilling</h2>
      <div>In order for <strong>component E</strong> to use data originating in <strong>component A</strong>, it is needed to be passed down through the long chain of parent components</div>
      <div className={theme}>
        <div className="propDrillingA">{`<A prop={value}>`}</div>
        <div className="propDrillingB">{`<B prop={value}>`}</div>
        <div className="propDrillingC">{`<C prop={value}>`}</div>
        <div className="propDrillingD">{`<D prop={value}>`}</div>
        <div className="propDrillingE">{`<E prop={value}>`}</div>
        <div className="propDrillingF">{`{... logic with prop ...}`}</div>
        <div className="propDrillingE">{`</E>`}</div>
        <div className="propDrillingD">{`</D>`}</div>
        <div className="propDrillingC">{`</C>`}</div>
        <div className="propDrillingB">{`</B>`}</div>
        <div className="propDrillingA">{`</A>`}</div>
      </div>
    </div>
  );
}

export default PropDrilling;
