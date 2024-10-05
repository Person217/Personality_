function calculateResult() {
    const form = document.getElementById('personalityTest');
    const answers = [form.q1.value, form.q2.value, form.q3.value];

    if (answers.includes("")) {
        alert("Please answer all questions.");
        return;
    }

    let score = answers.reduce((a, b) => a + (b === "A" ? 1 : 0), 0);
    let personality;

    if (score === 3) {
        personality = "You are an introverted thinker who prefers structure.";
    } else if (score === 2) {
        personality = "You are balanced with both introverted and extroverted traits.";
    } else {
        personality = "You are an extroverted feeler who enjoys spontaneity.";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = personality;
    resultDiv.style.display = 'block';
}

+++++++++++++
+++++++++++
&#&#_#^++++++++++
/×*=;+++++++++++
+++++++++++++
++++++++!!++
+++++!++++++++
++++++++++++++++
++++++++++++++++
+++++++++++++++
++++++++++++
++++++++++
+++++++++
++++++++++++
+++++++++++