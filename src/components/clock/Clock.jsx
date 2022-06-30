import React from 'react';

function Clock(props) {
  return (
    <div>
      <h2>현재 일자 : {new Date().toLocaleDateString()}</h2>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
      <h2>현재 시간 : {new Date().toLocaleTimeString({timeZone: "UTC"},'en-US')}</h2>
      <h2>현재 시간 : { new Date().getTimezoneOffset({timeZone: "UTC"},'en-US')}</h2>
    </div>
  );
}

export default Clock;
