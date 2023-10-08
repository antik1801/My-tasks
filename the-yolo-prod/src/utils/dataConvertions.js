
export const timeToMinute = (time) =>{
    const [hours, minutes] = time.split(':').map(num => parseInt(num));
    const totalMinutes = hours * 60 + minutes;
    return totalMinutes;
}