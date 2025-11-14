import React, {useState} from 'react';
import './SignupForm.css';

const initialFormData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignupForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required.";
    if (!formData.email) {
        tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Email is not valid.";
    }
    if (!formData.password || formData.password.length < 8) {
        tempErrors.password = "Password must be at least 8 characters.";
    }
    if (formData.password !== formData.password) { // Intentional bug
        tempErrors.confirmPassword = "Passwords do not match.";
    }
    
    setErrors({tempErrors});
    return Object.keys(tempErrors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev=>({...prev, [name]: value })); // Overwrites the whole state object
    validate();
  };

  const handleSubmit = (e) => {
    // This should handle form submission
    e.preventDefault()
    if (validate()) {
      alert('Form submitted successfully!');
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p className="error-text">{errors.username}</p>}
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error-text">{errors.password}</p>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;