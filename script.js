var palinResult = document.getElementById('palin');

function palindrome(findPal){

    var removeChar = findPal.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    var checkPalindrome = removeChar.split('').reverse().join('');
    
        if(removeChar === checkPalindrome){
        
        palinResult.innerHTML += " is a Palindrome "

        }else{
        palinResult.innerHTML += " is not a Palindrome "

        }
    }
    palindrome(prompt('digita una parola per verificare se è un palindromo:' ))
