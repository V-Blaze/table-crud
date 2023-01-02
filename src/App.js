import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    subject: '',
    totalScore: 0,
    grade: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, {...formData, uId: uuidv4()}]);
    console.log(userData);

    setFormData({
        fName: '',
        lName: '',
        subject: '',
        totalScore: 0,
        grade: '',
      });
  };

  return (
    <div className="relative sm:-8 p-4 bg-[#4369B2] min-h-screen flex flex-col">
      <h2>TABLE CRUD</h2>
      <div>
        <table>
          <thead>
            <tr>              
              <td>U-ID</td>
              <td>First Name </td>
              <td>Last Name</td>
              <td>Subject</td>
              <td>Score</td>
              <td>Grade</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.uId}>
                <td>{user.uId}</td>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.subject}</td>
                <td>{user.totalScore}</td>
                <td>{user.grade}</td>
                <td>
                  <button type="button">Update</button>
                  <button type="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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