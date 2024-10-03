function submitQuiz() {
    // Captura as respostas selecionadas
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');
    const q9 = document.querySelector('input[name="q9"]:checked');
    const q10 = document.querySelector('input[name="q10"]:checked');
  
    // Verifica se todas as perguntas foram respondidas
    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
      alert("Por favor, responda todas as perguntas.");
      return;
    }
  
    // Contabiliza as respostas corretas
    let score = 0;
    if (q1.value === "b") score++;
    if (q2.value === "b") score++;
    if (q3.value === "b") score++;
    if (q4.value === "b") score++;
    if (q5.value === "a") score++;
    if (q6.value === "c") score++;
    if (q7.value === "a") score++;
    if (q8.value === "a") score++;
    if (q9.value === "b") score++;
    if (q10.value === "b") score++;
  
    // Exibe o resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Você acertou ${score} de 10 perguntas.`;
  }
  