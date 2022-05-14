const getCurrentDate = (a) => {
  let newDate = new Date(a.date);
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  var dater, month;
  
  
  if (date_raw<10)  {  
    dater ="0"+date_raw.toString();
  } else {  
    dater =date_raw.toString();
  }
  
  if (month_raw<10)  { 
    month ="0"+month_raw.toString();
  } else {  
    month =month_raw.toString();
  }
  
  return (
    <div>{dater} / {month} / {year}</div>
  );
}



const getCurrentDateConcert = (a) => {
  let newDate = new Date(a.date_concert);
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  var dater, month;


  if (date_raw<10)  {  
    dater ="0"+date_raw.toString();
  } else {  
    dater =date_raw.toString();
  }

  if (month_raw<10)  { 
    month ="0"+month_raw.toString();
  } else {  
    month =month_raw.toString();
  }

  return (
    <div>{dater} / {month} / {year}</div>
  );
}



export { getCurrentDate, getCurrentDateConcert };
