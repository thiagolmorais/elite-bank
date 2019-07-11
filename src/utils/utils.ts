// import { Injectable } from '@angular/core';

// @Injectable()
// export class Utils {
//     static generateRandom(minValue: number, maxValue: number, notValidNumbers: Array<number>): number {
//         let random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
//         return notValidNumbers.includes(random) ? this.generateRandom(minValue, maxValue, notValidNumbers) : random;
//     }
// }

export const generateRandomNumber = (minValue: number, maxValue: number, notValidNumbers?: Array<number>): number => {
    let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    if (!notValidNumbers) {
        return randomNumber;
    }
    return notValidNumbers.includes(randomNumber) ? generateRandomNumber(minValue, maxValue, notValidNumbers) : randomNumber;
};

export const generateKeyboardNumbers = (minValue: number, maxValue: number): Array<any> => {
    let arrayReturn = [];
    let notValidNumbers = [];
    let keyboardLength = 5;

    for (let x = 0; x < keyboardLength; x++) {
        let first = generateRandomNumber(minValue, maxValue, notValidNumbers);
        notValidNumbers.push(first);
        let second = generateRandomNumber(minValue, maxValue, notValidNumbers);
        notValidNumbers.push(second);

        arrayReturn.push({
            first,
            second
        });
    }

    return arrayReturn;
}