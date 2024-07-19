import { Button } from '@mui/material';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { StyledInput } from '../QuantityRange';

interface QuantityPickerProps {
  minValue?: number;
  maxValue?: number;
}

export default function QuantityPicker({ minValue = 3, maxValue = 10 }: QuantityPickerProps) {
  const [count, setCount] = useState(minValue);
  const [inputValue, setInputValue] = useState(minValue);

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount((prev) => prev + 1);
      setInputValue((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minValue) {
      setCount((prev) => prev - 1);
      setInputValue((prev) => prev - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.currentTarget.value);
    if (!isNaN(newValue) && newValue >= minValue && newValue <= maxValue) {
      setCount(newValue);
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="" onClick={handleDecrement}>
          <RemoveIcon fontSize="small" />
        </div>
        <div className="">
          <input type="text" value={inputValue} onInput={(e) => console.log(e.currentTarget.value)} />
          <StyledInput defaultValue={inputValue} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="" onClick={handleIncrement}>
          <AddIcon fontSize="small" />
        </div>
      </div>
    </>
  );
}
