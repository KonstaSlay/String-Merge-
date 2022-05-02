/* Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word.
 The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle.
 You can assume both words will contain the dividing letter.
 
 Examples

("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"*/


function stringMerge(string1, string2, letter){
    let firstString = string1;
    let secondString = string2;
    for (let i = 0; i < firstString.length; i++){
      if (firstString[i] == letter){
        firstString = firstString.slice(0, i+1);
      }
    }
    for (let i = 0; i < secondString.length; i++){
      if (secondString[i] == letter){
        secondString = secondString.slice(i+1);
        break;
      }
    }
    return firstString + secondString
}


/* Script from Codewars*/

/*let stringMerge = (string1, string2, letter) => string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));*/
