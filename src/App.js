import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    subject: '',
    totalScore: 0,
    grade: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="relative sm:-8 p-4 bg-[#4369B2] min-h-screen flex flex-row">
      <h2>Hello</h2>

      <div>
        <h3>Create A New Student Record</h3>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input type="text" name='first-name' placeholder='Enter Your First Name' required
            value={formData.fName}
            onChange={(e) => setFormData({...formData, fName: e.target.value})}
          />
          <input type="text" name='last-name' placeholder='Enter Your Last Name' required
            value={formData.lName}
            onChange={(e) => setFormData({...formData, lName: e.target.value})}
          />
          <input type="text" name='subject' placeholder='Enter Your Favourite Subject' required
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
          />
          <input type="number" name='total-score' placeholder='Enter Your Total Score' required
            value={formData.totalScore}
            onChange={(e) => setFormData({...formData, totalScore: e.target.value})}
          />
          <input type="text" name='grade' placeholder='Enter Your Grade' required
            value={formData.grade}
            onChange={(e) => setFormData({...formData, grade: e.target.value})}
          />
          <button type="submit">Add</button>
        </form>
      </div>
  </div>
  );
};

export default App