function hackerSpeak(str) {
    return str
        .replace(/e/g, "3")
        .replace(/i/g, "1")
        .replace(/a/g, "4")
        .replace(/o/g, "0")
        .replace(/s/g, "5");
}

console.log (hackerSpeak("javascript is cool"));
console.log (hackerSpeak("programming is fun"));
console.log (hackerSpeak("become a coder"));