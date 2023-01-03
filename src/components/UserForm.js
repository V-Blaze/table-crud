import React from 'react'

const UserForm = ({handleSubmit, setFormData, formData}) => {
  return (
    <form className="flex flex-col gap-2 w-3/5 mx-auto border p-6 rounded-xl bg-[#4369B2]" onSubmit={handleSubmit}>
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
          <button type="submit" className="border w-40 mt-2 self-center bg-green-600 text-whitex rounded-lg hover:bg-black hover:text-white">Add</button>
        </form>
  )
}

export default UserForm