import jsQuestions from './qustions.js';

window.onload=function(){


console.log(jsQuestions.length)
//number of qustions and counter for the current
let selector=document.querySelector('#numberOfQustions')
selector.value=localStorage.getItem('contentNumber')

let qnumbr=localStorage.getItem('qnumbr');
let qcount=0
selector.addEventListener("change", () => {
    qnumbr = selector.value;
    localStorage.setItem('qnumbr',qnumbr)
    localStorage.setItem('contentNumber',qnumbr)
    window.location.reload()
    


});

/////////////////// Screen \\\\\\\\\\\\\\\\\

//get the element of qustion text and code and options 
const qtxt=document.querySelector('.txt')
qtxt.textContent=`${qcount+1+':'}`+jsQuestions[qcount].question

const code=document.querySelector('.code')
code.textContent=jsQuestions[qcount].code

/*

/////////////// execute the code in the page \\\\\\\\\\\\\\\

let explain=document.querySelector('.explain')
let clicked=0
explain.addEventListener('click',function handler(){

    if(clicked==0){
        clicked+=1
        console.style.display='block'

    }else{
        console.style.display='none'
        clicked=0

    }
    let console=document.querySelector('.console')
    console.style.display='block'

   /* let codeInput = document.querySelector(".codeInput");
    let output = document.querySelector(".output");

    
function useEval(obj) {
    return eval(`${(obj)}`);
  }
codeInput.textContent = jsQuestions[qcount].code;
codeInput.addEventListener("input", function handler() {
    let syntax = `${jsQuestions[qcount].code}`;
    let result
  
    result =useEval(syntax)

    try {
        // Check if the result is undefined or null
        if (result === undefined || result === null) {
            output.textContent = "Result: " + result;
        } else {
            output.textContent = "Result: " + result;
        }
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
    
});

})
*/

//answers 
const answerButtons = document.querySelectorAll('.answer');

const defaultColor=' #a4bcd5'

const a1 = document.querySelector('.a1');
a1.textContent=jsQuestions[qcount].options[0]

const a2 = document.querySelector('.a2');
a2.textContent=jsQuestions[qcount].options[1]

const a3 = document.querySelector('.a3');
a3.textContent=jsQuestions[qcount].options[2]

const a4 = document.querySelector('.a4');
a4.textContent=jsQuestions[qcount].options[3]




//score 
let grade=document.querySelector('.grade')
let scoreElement=document.querySelector('.score')
let score=0
scoreElement.textContent=`You answer ${score} qustion from ${qnumbr}`


grade.addEventListener('click',function(){
    showGrade()    
})

function showGrade() {
    // Create the confirmation dialog elements
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    const dialog = document.createElement("div");
    dialog.classList.add("confirmation-dialog");
  
    const message = document.createElement("p");
    message.textContent =`Your grade is ${(score/(qnumbr))*100}%`;
  
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.classList.add("confirm-button");

    
    // Append elements to the DOM
    dialog.appendChild(message);
    dialog.appendChild(confirmButton);
   
  
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    confirmButton.addEventListener('click',()=>{
        document.body.removeChild(overlay)
        qcount=0
        score=0
    })
    
  }
  


//event lisner for all button and if it is the right answer for the 
//qustion write it 
answerButtons.forEach(button => {
    button.addEventListener('click', function clickHandler() {
        const isClicked = button.getAttribute('data-clicked') === 'true';

        if (!isClicked) {
            button.setAttribute('data-clicked', 'true');

            if (button.textContent == jsQuestions[qcount].options[jsQuestions[qcount].correctAnswer]) {
                button.style.backgroundColor = 'green';
                score += 1;
                scoreElement.textContent = `You answered ${score} questions out of ${qnumbr}`;
            } else {
                // Highlight the correct answer
                const correctAnswerIndex = jsQuestions[qcount].correctAnswer;
                answerButtons[correctAnswerIndex].style.backgroundColor = 'green';
                button.style.backgroundColor = 'red';

                disableAllButtons();
            }
        }
    });
});


function disableAllButtons() {
    answerButtons.forEach(button => {
        button.setAttribute('disabled', 'true');
    });
}


////////////////// Change Qustion \\\\\\\\\\\\\\\\\\\\

//next button ==> change the qcount+1
const next=document.querySelector('.next')
const back=document.querySelector('.back')

next.addEventListener('click', function() {
    answerButtons.forEach(button => {
        button.setAttribute('data-clicked', 'false');
        button.removeAttribute('disabled');
        button.style.backgroundColor = 'var(--primary-color)';
    });

    qcount += 1;
    if (qcount >= qnumbr) {
        qcount = 0;
    }

    qtxt.textContent = `${qcount + 1}: ` + jsQuestions[qcount].question;
    code.textContent = jsQuestions[qcount].code;

    updateAnswerButtonsContent();
})


back.addEventListener('click', function() {
    console.log(qcount);
    qcount -= 1; // Increment qcount first
    if (qcount < 0) {
        qcount=qnumbr - 1; // Reset to 0 if qcount goes beyond the question count
    }
    
    qtxt.textContent = `${qcount + 1 + ':'}` + jsQuestions[qcount].question;
    code.textContent = jsQuestions[qcount].code;

    answerButtons.forEach((button, index) => {
        button.textContent = jsQuestions[qcount].options[index];
        button.style.backgroundColor= defaultColor
    });    
})

};
























