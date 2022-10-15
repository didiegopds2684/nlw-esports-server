/**
 * It receives a string in the format "HH:MM" and returns the number of minutes that string represents
 * @param {string} hourString - string
 * @returns the minutesMount variable.
 */
export function convertHourStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number);
    const minutesMount = (hours * 60) + minutes;

    return minutesMount;
}