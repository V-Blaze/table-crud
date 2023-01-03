import React from 'react'

const TableData = ({user, setUpUpdate, handleDelete}) => {
  return (
    <tr className="grid grid-cols-7 gap-3 border border-collapse border-black">
        <td className='truncate'>{user.uId.substring(0, 7)}</td>
        <td>{user.fName}</td>
        <td>{user.lName}</td>
        <td>{user.subject}</td>
        <td>{user.totalScore}</td>
        <td>{user.grade}</td>
        <td className="flex flex-col">
            <button type="button" onClick={() => setUpUpdate(user.uId)} className=" text-green-500 underline font-bold ">Update</button>
            <button type="button" onClick={() => handleDelete(user.uId)} className=" text-red-500 underline font-bold ">Delete</button>
        </td>
    </tr>
  )
}

export default TableData