const FloatingDiv = ({id}) => {
    return (
        // Fixed vs Absolute has different effect
        <div id={id} style={{position: 'fixed', left: `0px`, top: `0px`, opacity: 0, zIndex: 1, userSelect: 'none', pointerEvents: 'none'}}>
            Hi
        </div>
    );
};
  
  export default FloatingDiv;
  