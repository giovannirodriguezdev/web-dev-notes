
function echo (string) {
    // creating new string 
    let echoStr = string.toUpperCase() + ' ... ' + string + ' ... ' + string.toLowerCase();
    // calling new string 
    console.log(echoStr);
    // prints new string 
    return echoStr;
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
