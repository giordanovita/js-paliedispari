 var palinResult = document.getElementById('palin');
 var btnControl = document.getElementById('control');
 
 btnControl.addEventListener('click', function(){ 
    palindrome()
 })

 function palindrome(){
    var word = document.getElementById('word').value;

    var removeChar = word.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    var checkPalindrome = removeChar.split('').reverse().join('');
    
        if(removeChar === checkPalindrome){
        
        palinResult.innerHTML = " è un Palindromo "

        }else{
        palinResult.innerHTML = " non è un Palindromo "

        }
    }



    
    var gameResult = document.getElementById('number-game');
    var botValue = Math.floor(Math.random()*5)+1; 
    var playerValue = document.getElementById('plvalue').value;
    var oddOrPair = document.getElementById('odd-pair').value;
    var btnPlay = document.getElementById('play');
    
    btnPlay.addEventListener('click', function(){ 
        
        
        
        
        game() 
    
    })
            function game (){

                var sum = botValue + playerValue;
                
                if(playerValue = 1){
                    
                    if(sum % 2 == 0){
                        gameResult.innerHTML = 'Il tuo avversario ha scelto' + ' ' +  botValue + '<br>' + 'Hai vinto!!!' 
                    }else{
                        gameResult.innerHTML = 'Il tuo avversario ha scelto' + ' ' +  botValue + '<br>' + 'Peccato...Ritenta!'
                    }

                }else{
                    
                    if(sum % 2 == 1){
                        gameResult.innerHTML = 'Il tuo avversario ha scelto' + ' ' +  botValue + '<br>' + 'Hai vinto!!!' 
                    }else{
                        gameResult.innerHTML = 'Il tuo avversario ha scelto' + ' ' +  botValue + '<br>' + 'Peccato...Ritenta!'
                    }
                     
                }
            }
      

           