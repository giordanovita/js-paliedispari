/* var palinResult = document.getElementById('palin');

function palindrome(findPal){

    var removeChar = findPal.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    var checkPalindrome = removeChar.split('').reverse().join('');
    
        if(removeChar === checkPalindrome){
        
        palinResult.innerHTML += " è un Palindromo "

        }else{
        palinResult.innerHTML += " non è un Palindromo "

        }
    }
    palindrome(prompt('digita una parola per verificare se è un palindromo:' ));
 */

    var gameResult = document.getElementById('number-game');
    var botValue = Math.floor(Math.random()*5)+1; 
    var playerValue = document.getElementById('plvalue').value;
    var oddOrPair = document.getElementById('odd-pair').value;
    var btnPlay = document.getElementById('play');
    var showBotValue = 'Il tuo avversario ha scelto il num' + ' ' + botValue
    
    
    btnPlay.addEventListener('click', function(){ 
        
        
        
        
        game() 
    
    })
            function game (){

                var sum = botValue + playerValue;
                
                if(playerValue = 1){
                    
                    if(sum % 2 == 0){
                        gameResult.innerHTML = showBotValue + '<br>' + 'Hai vinto!!!'  
                    }else{
                        gameResult.innerHTML = showBotValue +  '<br>' + 'Peccato...Ritenta!' 
                    }

                }else if(playerValue = 0){
                    
                    if(sum % 2 == 1){
                        gameResult.innerHTML = showBotValue + '<br>' + 'Hai vinto!!!' 
                    }else{
                        gameResult.innerHTML = showBotValue + '<br>' + 'Peccato...Ritenta!' 
                    }

                }
            }
      

           