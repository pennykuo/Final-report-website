'use client'
function ScrollButton() {
    const scrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      };
 
    return (
      <button onClick={scrollDown} style={{ fontSize: '5em' }}>↓</button>
    );
  }
  
  export default ScrollButton;