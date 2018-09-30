module.exports = function check(str, bracketsConfig) {
    let bracketsSet = new Set();
    bracketsSet.add("(").add(")");
    bracketsSet.add("[").add("]");
    bracketsSet.add("{").add("}");
    bracketsSet.add("|");
    let prevStrLength = 0;
    while (prevStrLength !== str.length && str.length > 0) {
        prevStrLength = str.length;
        for (let i = 0; i < bracketsConfig.length; i++) {
            let trueBrackets = '';
            let brackets = bracketsConfig[i];
            if (bracketsSet.has(brackets[0])) {
                trueBrackets +=  brackets[0];
            }
            if (bracketsSet.has(brackets[1])) {
                trueBrackets += brackets[1];
            }
            str = str.replace(trueBrackets, '');
        }
    }
    return str.length === 0;
}
