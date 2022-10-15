/**
 * It takes a number of minutes and returns a string of hours and minutes
 * @param {number} minutesAmount - number - The amount of minutes to convert to hours.
 * @returns A string with the hours and minutes.
 */

export function convertMinutesStringToHours(minutesAmount: number){
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
}