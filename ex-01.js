function confirmEnding(text, letter){
    let reverseText = text.split('');
    reverseText = reverseText.reverse();
    console.log(reverseText);
    return (reverseText[0] === letter);
}





confirmEnding("Bastian", "n"); // true
confirmEnding("Hold on", "o"); // false