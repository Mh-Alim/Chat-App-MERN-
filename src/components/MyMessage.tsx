
type messageType = {
  content: string,
  time : Date
}
const MyMessage = ({ content, time }: messageType) => {

  const setTime = (time: Date) => {
    const dateObj = new Date(time);
    const getHour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();

    const currDateObj = new Date(Date.now());
    const currYear = currDateObj.getFullYear();
    const currMonth = currDateObj.getMonth();
    const currDate = currDateObj.getDate();

    if (currYear === year && currMonth === month && date === currDate) {
      return `${getHour}:${minutes}`;
    } 
    else if (currYear === year && currMonth === month && currDate - date === 1) {
      return "yesterday";
    }
    
    return `${date}/${month}/${year}`;
  }


  return (
      <div className="my_message">
          <div>
            <p>{content} </p>
        <p> {setTime(time)}</p>
          </div>
    </div>
  )
}

export default MyMessage