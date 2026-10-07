import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState(null);
  const [st, setSt] = useState('');

  const checkPrime = (e) => {
    const val = e.target.value;
    setInput(val);

    if (val === '' || val === null) {
      setSt('');
      return;
    }

    const num = Number(val);

    if (num <= 1 || !Number.isInteger(num)) {
      setSt('Not Prime');
      return;
    }

    if (num === 2) {
      setSt('Prime');
      return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    setSt(isPrime ? 'Prime' : 'Not Prime');
  };

  return (
    <section className="h-screen w-screen bg-green-100 flex flex-col items-center justify-center gap-6">
      <input 
        type="number" 
        className="border h-12 rounded-lg outline-0 pl-3" 
        onChange={checkPrime} 
      />
      {st && (
        <p className="text-xl font-bold mt-4">{st}</p>
      )}
    </section>
  );
};

export default App;