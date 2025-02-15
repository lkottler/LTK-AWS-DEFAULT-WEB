const quizData = [
    {
      question: "What is my first / only \"Lord\" in Rivals?",
      options: ["Luna", "Punisher", "Strange", "Mantis"],
      answer: "Mantis"
    },
    {
      question: "What is my middle name?",
      options: ["Alan", "Charles", "Troy", "Anthony"],
      answer: "Troy"
    },
    {
      question: "What did I go to school for?",
      options: ["Mechanical Engineering", "Genetics", "Computer Science", "Civil Engineering"],
      answer: "Computer Science"
    },
    {
      question: "What is my mother's name?",
      options: ["Milena", "Kai", "Tya", "Amaris"],
      answer: "Tya"
    },
    {
      question: "Who do I have the most hours on in Overwatch (main account)",
      options: ["Lucio", "Ana", "Hanzo", "Soldier:76"],
      answer: "Ana"
    },
    {
      question: "What is my favorite song to play on Uke",
      options: ["Fly me to the Moon", "Just the two of us", "Dream a little dream", "Lithium"],
      answer: "Fly me to the Moon"
    },
    {
      question: "What is my \"least\" favorite song to play on Uke'",
      options: ["Riptide", "Wonderwall", "Spongebob Theme", "Grass Skirt Chase"],
      answer: "Riptide"
    },
    {
      question: "What is my brother's name?",
      options: ["Thomas", "Vaughn", "Elio", "Jack"],
      answer: "Vaughn"
    },
    {
      question: "What kind of company do I work for?",
      options: ["Civil Engineering", "Health Service Software", "Transportation Logistics", "Food Service Backend Developer"],
      answer: "Civil Engineering"
    },
    {
      question: "What game have I played the most in my life?",
      options: ["Overwatch", "World of Warcraft", "Minecraft", "Oldschool Runescape"],
      answer: "World of Warcraft"
    },
    {
      question: "What bone have I broken?",
      options: ["Collar", "Tibia", "Rib", "Ulna"],
      answer: "Rib"
    },
    {
      question: "What is my favorite animal?",
      options: ["Polar Bear", "Fox", "Lemur", "Monke"],
      answer: "Polar Bear"
    },
    {
      question: "What is my birthday?",
      options: ["October 30th", "October 13th", "October 27th", "October 21st"],
      answer: "October 27th"
    },
    {
      question: "Obscure questions: where do I have a scar from a cut?",
      options: ["Thigh", "Chest", "Head", "Ass"],
      answer: "Head"
    },
    {
      question: "Where do I have a birthmark?",
      options: ["Belly", "Butt", "Leg", "Arm"],
      answer: "Belly"
    },
    {
      question: "What does 猫 māo mean in chinese?",
      options: ["Noodles", "Cat", "Surname", "Field"],
      answer: "Cat"
    },
    {
      question: "What was my Grandfather's (mother side) alias?",
      options: ["William Scorn", "Dr. Evermore", "The Mad Metallurgist", "Bronze Belial"],
      answer: "Dr. Evermore"
    },
    {
      question: "Who is King?",
      options: ["Trump", "Xi Jinping", "Christ", "The Pope"],
      answer: "Christ"
    },
    {
      question: "Who is my favorite person?",
      options: ["Sam", "Sam", "Sam", "Sam"],
      answer: "Sam"
    },
    {
      question: "Who is the hottest person?",
      options: ["Sam", "Sam", "Sam", "Sam"],
      answer: "Sam"
    },
    {
      question: "Who has a cute voice?",
      options: ["Sam", "Sam", "Sam", "Sam"],
      answer: "Sam"
    },
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  //const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  let mistakes = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = currentQuestion+1 + ": " + question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
      currentQuestion++;
    } else {
      mistakes++;
    }
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Nice Job! Thanks for clicking through my silly quiz. Made 4 u sam</h1>
      <p>Your made ${mistakes} incorrect button clicks</p>
    `;
  }
  
  showQuestion();