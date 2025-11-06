import React, { useState } from 'react';
import './MultiStepForm.css';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev=>({...prev, [name]: value }));
  };

  const handleNext = () => {
    // This should advance to the next step
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      {/* Step 1: Personal Info */}
      {currentStep === 1 && (
        <div className="form-step">
          <h2>Step 1: Personal Information</h2>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        </div>
      )}

      {/* Step 2: Account Info */}
      {currentStep === 2 && (
        <div className="form-step">
          <h2>Step 2: Account Details</h2>
          <label>Username</label>
          <input name="username" value={formData.username} onChange={handleChange} placeholder="Choose a username" />
        </div>
      )}

      {/* Step 3: Confirmation */}
      {currentStep === 3 && (
        <div className="form-step">
          <h2>Step 3: Confirm Your Details</h2>
          <p><strong>Name:</strong>{formData.name}</p>
          <p><strong>Email:</strong>{formData.email}</p>
          <p><strong>Username:</strong>{formData.username}</p>
        </div>
      )}

      <div className="navigation-buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={()=>{
            if(currentStep <=2){
                handleNext()
            }else{
                handleSubmit()
            }
        }}>{currentStep ===3 ? 'Submit' : 'Next'}</button>
      </div>
    </div>
  );
}

export default MultiStepForm;