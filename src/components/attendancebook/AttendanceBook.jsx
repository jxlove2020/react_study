import React from 'react';
const students =[
  {
    id: 1,
    name: 'joseph',
  },
  {
    id: 2,
    name: 'david',
  },
  {
    id: 3,
    name: 'jacob',
  },
]
function AttendanceBook(props) {
  return (
      <ul>
        {students.map((student) => {
          return <li key={`student-${student.id}`}>{student.name}</li>
        })}
      </ul>
  );
}

export default AttendanceBook;