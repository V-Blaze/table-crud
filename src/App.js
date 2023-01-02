import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    subject: '',
    totalScore: 0,
    grade: '',
  });

  const [isEditingId, setIsEditingId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditingId === '') {
      setUsersData([...usersData, {...formData, uId: uuidv4()}]);
    } else {
      setUsersData(usersData.map((user) => {
        if(isEditingId === user.uId) {
            return {
              ...formData,
              uId: isEditingId
            }
        } 
        return user
    }))
    }

    setFormData({
        fName: '',
        lName: '',
        subject: '',
        totalScore: 0,
        grade: '',
      });

      setIsEditingId('')
  };

  const handleDelete = (uId) => {
    setUsersData(
      [...usersData.filter((data) => {
          return data.uId !== uId
      })]
  )};

  const setUpUpdate = (uId) => {
    const user = usersData.filter((item) => item.uId === uId);

    const itemToUpdate = user[0]
    
    setFormData({ 
      fName: itemToUpdate.fName,
      lName: itemToUpdate.lName,
      subject: itemToUpdate.subject,
      totalScore: itemToUpdate.totalScore,
      grade: itemToUpdate.grade,
    });

    setIsEditingId(uId)
  }

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
            {usersData.map((user) => (
              <tr key={user.uId}>
                <td>{user.uId}</td>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.subject}</td>
                <td>{user.totalScore}</td>
                <td>{user.grade}</td>
                <td>
                  <button type="button" onClick={() => setUpUpdate(user.uId)}>Update</button>
                  <button type="button" onClick={() => handleDelete(user.uId)}>Delete</button>
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
          <input type="number" name='total-score' placeholder='Enter Your Total Score Min - 0 | Max - 100' min={0} max="100" required
            value={formData.totalScore}
            onChange={(e) => setFormData({...formData, totalScore: e.target.value})}
          />
          <input type="text" name='grade' placeholder='Enter Your Grade A | B | C' required
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