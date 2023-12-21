const FloatingDiv = ({id, content}) => {
    return (
        // Fixed vs Absolute has different effect
        <div id={id} style={{position: 'fixed', left: `0px`, top: `0px`, opacity: 0, zIndex: 10, userSelect: 'none', pointerEvents: 'none'}}>
            <img src={content} alt='FloatingDivFloatingDiv'></img>
        </div>
    );
};
  
  export default FloatingDiv;
  