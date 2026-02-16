import { useState } from 'react';
import Button from './Button';

function Counter({ initialValue = 0, onCountChange = null }) {
  const [count, setCount] = useState(initialValue);

  // Update count and notify parent component if callback provided
  const updateCount = (newCount) => {
    setCount(newCount);
    if (onCountChange) {
      onCountChange(newCount);
    }
  };

  return (
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Counter: {count}</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={() => updateCount(count - 1)} variant="secondary">
          Decrement
        </Button>
        <Button onClick={() => updateCount(count + 1)}>
          Increment
        </Button>
        <Button onClick={() => updateCount(0)} variant="danger">
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Counter;