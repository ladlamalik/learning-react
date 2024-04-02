import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="w-full min-h-screen duration-200 flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap left-12 inset-x-0 px-2 justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor('red')}
            className="outline-none px-4 rounded-full text-white"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className="outline-none px-4 rounded-full text-white"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
            className="outline-none px-4 rounded-full text-white"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('purple')}
            className="outline-none px-4 rounded-full text-white"
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor('orange')}
            className="outline-none px-4 rounded-full text-white"
            style={{ backgroundColor: 'orange' }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor('teal')}
            className="outline-none px-4 rounded-full text-white"
            style={{ backgroundColor: 'teal' }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor('black')}
            className="outline-none px-4 rounded-full text-white"
            style={{ backgroundColor: 'black' }}
          >
            Black
          </button>
          <button
            onClick={() => setColor('white')}
            className="outline-none px-4 rounded-full text-black"
            style={{ backgroundColor: 'white' }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
