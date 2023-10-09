// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const lettersFreq = {};
    const msgFreq = {};

    for(let char of letters){
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

    for(let char of msg){
        msgFreq[char] = ++msgFreq[char] || 1;
    }

    for(let char in msgFreq){
        if(!lettersFreq[char]){
            return false;
        }
        if (msgFreq[char] > lettersFreq[char]){
            return false;
        }
    }
    return true;
}
