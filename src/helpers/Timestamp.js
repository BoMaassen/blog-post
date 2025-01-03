
function Timestamp(time){
   const newtime = new Date(time);
   const nlTime = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    const nlTimeStamp = newtime.toLocaleDateString('nl-Nl', nlTime)
    return nlTimeStamp

}

export default Timestamp;