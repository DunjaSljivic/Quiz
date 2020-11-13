var questions = [
  {
    text: "How many oceans are there in the world??",
    answers: [
      {
        text: "4",
        isTrue: false
      },
      {
        text: "6",
        isTrue: false
      },
      {
        text: "5",
        isTrue: true
      }
    ]
  },
  {
    text: "What is the longest river in the world?",
    answers: [
      {
        text: "Amazon",
        isTrue: true
      },
      {
        text: "Nile",
        isTrue: false
      },
      {
        text: "Yangtze",
        isTrue: false
      }
    ]
  },
  {
    text: "Hepatitis affects which organ of the body?",
    answers: [
      {
        text: "Brain",
        isTrue: false
      },
      {
        text: "Liver",
        isTrue: true
      },
      {
        text: "Colon",
        isTrue: false
      }
    ]
  },
  {
    text: "To what country does the island of Elba belong?",
    answers: [
      {
        text: "Brazil",
        isTrue: false
      },
      {
        text: "Italy",
        isTrue: true
      },
      {
        text: "Singapore",
        isTrue: false
      }
    ]
  },
  {
    text: "In which continent did the ostrich originate?",
    answers: [
      {
        text: "North America",
        isTrue: false
      },
      {
        text: "Africa",
        isTrue: true
      },
      {
        text: "Asia",
        isTrue: false
      }
    ]
  },
  {
    text: "What part of the body does a turtle use to breathe?",
    answers: [
      {
        text: "Anus",
        isTrue: true
      },
      {
        text: "Belly",
        isTrue: false
      },
      {
        text: "Mouth",
        isTrue: false
      }
    ]
  },
  {
    text: "A doctor gives you 3 pills and tells you take 1 every half an hour, how long would it be before the pills have been taken?",
    answers: [
      {
        text: "60 minutes",
        isTrue: true
      },
      {
        text: "90 minutes",
        isTrue: false
      },
      {
        text: "30 minutes",
        isTrue: false
      }
    ]
  },
  {
    text: "What does M stand for in Roman Numerals?",
    answers: [
      {
        text: "1,000,000",
        isTrue: false
      },
      {
        text: "100",
        isTrue: false
      },
      {
        text: "1000",
        isTrue: true
      }
    ]
  }
];

var bleep=new Audio();
bleep.src="bleep.mp3"
var bleep2=new Audio();
bleep2.src="bleep2.mp3"

var question=document.getElementById('question');
var ans1=document.getElementById('answer1');
var ans2=document.getElementById('answer2');
var ans3=document.getElementById('answer3');
var win=document.getElementById('win-frame');
var gameOverFrame=document.getElementById('game-over-frame');
var questionFrame=document.getElementById('question-frame');
var buttonFrame=document.getElementById('button-frame');

var currentQuestion;
var numberOfQuestion=1;

function generateQuestion()
{
  ans1.style.display="block";
  ans2.style.display="block";
  ans3.style.display="block";
  let randomIndex=Math.floor(Math.random()*(questions.length));
  currentQuestion=questions[randomIndex];
  questions.splice(randomIndex,1);
  question.innerHTML=numberOfQuestion+". "+currentQuestion.text;
  ans1.innerHTML=currentQuestion.answers[0].text;
  ans2.innerHTML=currentQuestion.answers[1].text;
  ans3.innerHTML=currentQuestion.answers[2].text;

}

generateQuestion();

function nextQuestion(event,index)
{
  if(numberOfQuestion==5)
  {
    win.style.display="flex";
    questionFrame.style.display="none";
    buttonFrame.style.display="none";
    bleep2.play();
  }
  else
  {
    if(currentQuestion.answers[index].isTrue)
    {
      numberOfQuestion++;
      generateQuestion();
    }
    else
    {
      bleep.play();
      gameOverFrame.style.display="flex";
      questionFrame.style.display="none";
      buttonFrame.style.display="none";
    }
  }
}

function newGame()
{
  location='index.html';
}

function help()
{

  let list=currentQuestion.answers.filter((item)=>!item.isTrue);
  let randomIndex=Math.floor(Math.random()*2);
  let answer=list[randomIndex];

  for(let i=0;i<document.getElementsByClassName('answer').length;i++)
  {
    let element=document.getElementsByClassName('answer')[i];
    if(element.innerText==answer.text)
    {
      element.style.display="none";
    }
  }
  document.getElementById('help').style.display="none";
  // if(currentQuestion.answers[0].isTrue)
  // {
  //   ans2.style.display="none";
  // }
  // else
  // {
  //   ans1.style.display="none";
  // }
}

function next()
{
  generateQuestion();
  document.getElementById('next').style.display="none";
}
