import React from 'react';
import './Stepper.css';
function Stepper({ value, onValueChange, min, max, step }) {
const handleIncrement = () => {
// This should increase the value
onValueChange(value + step);
};
const handleDecrement = () => {
// This should decrease the value
const newValue = value - step;
onValueChange(newValue);
};
const handleChange = (e) => {
const inputValue = e.target.value;
};
return (
<div className="stepper-container">
<button className="stepper-btn" onClick={handleDecrement} disabled={value === min}>
-
</button>
<input
type="number"
className="stepper-input"
value={value}
onChange={handleChange}
/>
<button className="stepper-btn" onClick={handleIncrement} disabled={value === max}>
+
</button>
</div>
);
}
export default Stepper;