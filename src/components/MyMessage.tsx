
type messageType = {
  content: string,
  time : Date
}
const MyMessage = ({ content, time }: messageType) => {
  return (
      <div className="my_message">
          <div>
            <p>{content} </p>
        <p> {JSON.stringify(time)}</p>
          </div>
    </div>
  )
}

export default MyMessage