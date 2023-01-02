import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TableData from './components/TableData';
import UserForm from './components/UserForm';

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
    <div className=" sm:-8 p-4 bg-[#4369B2] min-h-screen flex flex-col items-center">
      <h2 className="flex text-white font-extrabold self-center mb-6 ">TABLE CRUD</h2>
      <div className=" text-white self-center">
        <table className="border rounded-lg border-black">
          <thead className="border border-collapse border-black">
            <tr className="grid grid-cols-7 gap-3  py-4 font-bold border">              
              <td className="">U-ID</td>
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
              <TableData
                key={user.uId}
                user={user}
                handleDelete={handleDelete}
                setUpUpdate={setUpUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col w-3/4 mx-auto self-center absolute bottom-0 z-30">
        <h3 className="self-center text-gray-300 text-2xl font-bold italic mb-2">Create A New Student Record</h3>
        <UserForm
          handleSubmit={handleSubmit}
          setFormData={setFormData}
          formData={formData}
          className=" self-center"
        />
      </div>
  </div>
  );
};

export default App