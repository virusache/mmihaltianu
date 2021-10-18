'use strict';
//kata 1

function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length === 10) {
        let pos = [0, 0];
        for (let step of walk) {
            switch (step) {
                case 'n': pos[0] = pos[0] + 1;
                    break;
                case 's': pos[0] = pos[0] - 1;
                    break;
                case 'e': pos[1] += 1;
                    break;
                case 'w': pos[1] -= 1;
                    break;
            }
            // console.log(`move to ${step} . change pos to ${pos.join()}`);
        }
        return pos[0] === 0 && pos[1] === 0 ? true : false;
    }
}

console.log(isValidWalk(['n', 's', 'w', 'e', 'e', 'e', 'n', 's', 'w', 'w']));


// kata 2

function createPhoneNumber(numbers) {
    let nrToStr = [];
    for (let i = 0; i < numbers.length; i++) {
        switch (i) {
            case 0:
                nrToStr.push('(');

                break;
            case 3:
                nrToStr.push(')');
                nrToStr.push(' ');

                break;
            case 6:
                nrToStr.push('-');

        }
        nrToStr.push(numbers[i]);
    }

    return nrToStr.join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//kata 3

console.log("------------------------");
function pigIt(str) {

    let gigel = str.split(' ');
    let gigelFinal = [];



    for (let word of gigel) {

        word.split('').includes()
        let wordArr = word.split('');
        // console.log(wordArr);
        for (let chr of wordArr) {
            // console.log(`asta e chr ${chr}`);
            if (chr == '.' || chr == '!' || chr == '?' || chr == ',') {
                gigelFinal.push([wordArr].join(''));
            }
        }
        //continue;
        let initial = wordArr.shift();
        gigelFinal.push([...wordArr, initial, 'ay'].join(""));

    }

    return gigelFinal.join(' ');

}
console.log(pigIt("Raluca are fanta"));
console.log(pigIt("Pig ! Latin is cool"));
// thiiiiiiiiiiiiiiiiiiiiiiiiiiiis one worked for test, did not work for production. 
// function pigIt(str) {
//     let gigelFinal = [];
//     let gigel = str.split(' ');
//     for (let word of gigel) {
//         let wordArr = word.split('');
//         let initial = wordArr.shift();
//         gigelFinal.push([...wordArr, initial, 'ay'].join(""));
//     }
//     return gigelFinal.join(' ');
// }


console.log(pigIt("Pig ! Latin is cool"));
// console.log(pigIt("O so ! fuck ."));
