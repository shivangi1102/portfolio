

import { useEffect, useState } from 'react';
import AnimatedBox from './Component/AnimationBox';
import React from 'react';
import Portfolio from './Component/Portfolio';



const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {/* {showAnimation &&<div className='loading'> <AnimatedBox/></div>} */}
      {!showAnimation && <Portfolio/>}
    </div>
  );
};

export default App;
