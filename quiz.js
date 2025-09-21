const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "Delhi"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C++", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    }
  ];
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const messageEl = document.getElementById('message');
  const nextBtn = document.getElementById('nextBtn');
  const scoreEl = document.getElementById('score');
  
  let current = 0;
  let score = 0;
  
  function loadQuestion(){
    messageEl.textContent = '';
    const q = quizData[current];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    q.options.forEach(opt=>{
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = ()=>selectAnswer(opt, btn);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectAnswer(selected, btn){
    const correct = quizData[current].answer;
    if(selected === correct){
      btn.classList.add('correct');
      messageEl.textContent = "🎉 Correct!";
      score++;
    } else {
      btn.classList.add('wrong');
      messageEl.textContent = `❌ Wrong! Correct answer: ${correct}`;
      // Highlight correct button
      [...optionsEl.children].forEach(b=>{
        if(b.textContent === correct) b.classList.add('correct');
      });
    }
    // Disable all options
    [...optionsEl.children].forEach(b => b.disabled = true);
    scoreEl.textContent = `Score: ${score}/${quizData.length}`;
  }
  
  nextBtn.addEventListener('click', ()=>{
    current++;
    if(current < quizData.length){
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Completed!";
      optionsEl.innerHTML = '';
      messageEl.textContent = `Your final score is ${score}/${quizData.length}`;
    }
  });
  
  loadQuestion();