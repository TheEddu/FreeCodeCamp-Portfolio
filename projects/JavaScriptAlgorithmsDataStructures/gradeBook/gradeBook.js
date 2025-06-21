function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const passed = grade === 'A' || grade === 'B' || grade === 'C' || grade === 'A++';
  return `Class average: ${average.toFixed(1)}. Your grade: ${grade}. You ${passed ? 'passed' : 'failed'} the course.`;
}

function calculate() {
  const scoresInput = document.getElementById('scores').value;
  const studentScore = parseFloat(document.getElementById('studentScore').value);
  const resultDiv = document.getElementById('result');

  if (!scoresInput || isNaN(studentScore)) {
    resultDiv.innerHTML = '<p class="text-red-500">Please enter valid scores and student score.</p>';
    return;
  }

  const scores = scoresInput.split(',').map(Number).filter(n => !isNaN(n));
  if (scores.length === 0) {
    resultDiv.innerHTML = '<p class="text-red-500">Please enter at least one valid score.</p>';
    return;
  }

  const message = studentMsg(scores, studentScore);
  resultDiv.innerHTML = `<p class="text-lg font-medium">${message}</p>`;
}
