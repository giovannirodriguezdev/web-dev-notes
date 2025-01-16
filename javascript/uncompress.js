
function uncompress(str) {

    const uncompress = [];

    for(let x = 0; x < str.length; x += 2) {

        let char = str[x];
        let num = Number(str[x + 1]);

        let temArr = Array(num);

        temArr.fill(char, 0)

        // console.log(temArr);

        uncompress.push(...temArr)
    }
    return uncompress.join('');
}

console.log(uncompress('x3y4z2'));
