//solution 3

let inputs = {
    "values" : [
        1,12,2,3,
        1,1,2,3,
        1,3,4,3,
        1,5,0,3,
        2,1,10,19,
        1,19,5,23,
        2,23,9,27,
        1,5,27,31,
        1,9,31,35,
        1,35,10,39,
        2,13,39,43,
        1,43,9,47,
        1,47,9,51,
        1,6,51,55,
        1,13,55,59,
        1,59,13,63,
        1,13,63,67,
        1,6,67,71,
        1,71,13,75,
        2,10,75,79,
        1,13,79,83,
        1,83,10,87,
        2,9,87,91,
        1,6,91,95,
        1,9,95,99,
        2,99,10,103,
        1,103,5,107,
        2,6,107,111,
        1,111,6,115,
        1,9,115,119,
        1,9,119,123,
        2,10,123,127,
        1,127,5,131,
        2,6,131,135,
        1,135,5,139,
        1,9,139,143,
        2,143,13,147,
        1,9,147,151,
        1,151,2,155,
        1,9,155,0,
        99,2,0,14,0
    ]
}

inputs.values.every((val, indx) => {
    if (indx === 0 || indx % 4 === 0) {
        if (val === 1 ) {
            let addpos1 = inputs.values[indx + 1];
            let addval1 = inputs.values[addpos1];
            let addpos2 =  inputs.values[indx + 2];
            let addval2 = inputs.values[addpos2];
            let addsum =  addval1 + addval2;
            let addput = inputs.values[indx + 3];
            inputs.values[addput] = addsum;
            return true;
        }
        if (val === 2) {
            let pos1 = inputs.values[indx + 1];
            let val1 = inputs.values[pos1];
            let pos2 =  inputs.values[indx + 2];
            let val2 = inputs.values[pos2];
            let mul = val1 * val2;
            let put = inputs.values[indx + 3];
            inputs.values[put] = mul;
            return true;
        }
        if (val === 99) {
            console.log('noop', inputs.values[0]);
            return false;
        }
    }
    return true;
    
});




