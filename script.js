const questions = [
    // الأسئلة الحالية
    {
        question: "بناء صفحة HTML تحتوي على العناوين والفقرات والصور.",
        hint: "تأكد من أن الصفحة تحتوي على عنصر `<h1>`, `<p>`, و `<img>` في الأماكن الصحيحة.",
        code: `
<html>
<head>
<title>عنوان الصفحة</title>
</head>
<body>
<h1>العنوان</h1>
<p>الفقرة</p>
<img src="صورة.jpg" alt="صورة">
</body>
</html>
        `
    },
    {
        question: "أضف رابطًا إلى ملف CSS خارجي.",
        hint: "تأكد من إضافة عنصر `<link>` في `<head>` لربط ملف CSS.",
        code: `
<link rel="stylesheet" href="styles.css">
        `
    },
    {
        question: "أضف عنصر `<footer>` يحتوي على نص حقوق الطبع والنشر.",
        hint: "تأكد من تضمين عنصر `<footer>` في نهاية الصفحة.",
        code: `
<footer>
        <p>© 2024 تعليم البرمجة</p>
</footer>
        `
    },
    // الأسئلة الجديدة
    {
        question: "أضف عنصر `<meta>` لتحديد الترميز.",
        hint: "تأكد من إضافة عنصر `<meta charset=\"UTF-8\">` في `<head>`.",
        code: `
<meta charset="UTF-8">
        `
    },
    {
        question: "أضف عنصر `<p>` يحتوي على نص ترحيبي.",
        hint: "تأكد من إضافة عنصر `<p>` يحتوي على نص داخل `<body>`.",
        code: `
<p>مرحبا</p>
        `
    },
    {
        question: "أضف صورة تحتوي على وصف بديل.",
        hint: "تأكد من استخدام خاصية `alt` في عنصر `<img>`.",
        code: `
<img src="image.jpg" alt="صورة">
        `
    },
    {
        question: "أضف عنصر `<h2>` داخل `<body>`.",
        hint: "تأكد من إضافة عنصر `<h2>` لتقسيم المحتوى.",
        code: `
<body>
    <h2>العنوان</h2>
</body>
        `
    },
    {
        question: "أضف رابطًا إلى صفحة أخرى.",
        hint: "تأكد من استخدام عنصر `<a>` لربط صفحة أخرى.",
        code: `
<a href="other-page.html">انتقل إلى صفحة أخرى</a>
        `
    },
    {
        question: "أضف عنصر `<ul>` مع قائمة نقطية.",
        hint: "تأكد من إضافة عنصر `<ul>` و `<li>` لعرض قائمة نقطية.",
        code: `
<ul>
<li>العنصر الأول</li>
<li>العنصر الثاني</li>
</ul>
        `
    },
    {
        question: "أضف عنصر `<div>` لتجميع العناصر.",
        hint: "تأكد من استخدام عنصر `<div>` لتجميع العناصر معًا.",
        code: `
<div>
<h1>مرحبا بالعالم</h1>
<p>هذه فقرة نصية</p>
</div>
        `
    },
    {
        question: "أضف عنصر `<span>` مع نص.",
        hint: "تأكد من إضافة عنصر `<span>` داخل عنصر آخر.",
        code: `
<p>هذه فقرة نصية <span>مع نص إضافي.</span></p>
        `
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function checkCode() {
    const userCode = document.getElementById('html-code').value;
    const expectedCode = questions[currentQuestionIndex].code;

    const result = document.getElementById('result');
    if (userCode.trim() === expectedCode.trim()) {
        result.className = 'result success';
        result.innerHTML = '<p>مبروك! الكود صحيح!</p>';
        correctAnswers++;
        setTimeout(nextQuestion, 1000); // الانتقا1 إلى السؤال التالي بعد 2 ثانية
    } else {
        result.className = 'result error';
        result.innerHTML = '<p>حاول مرة أخرى. تأكد من كتابة الكود بشكل صحيح.</p>';
    }
}

function toggleHint() {
    const hint = document.getElementById('hint');
    const hintText = document.getElementById('hint-text');
    if (hint.classList.contains('hidden')) {
        hint.classList.remove('hidden');
        hintText.textContent = questions[currentQuestionIndex].hint;
    } else {
        hint.classList.add('hidden');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];

        document.getElementById('question-text').textContent = question.question;
        document.getElementById('hint-text').textContent = question.hint;
        document.getElementById('html-code').value = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('hint').classList.add('hidden');
    } else {
        displayFinalResult();
    }
}

function displayFinalResult() {
    const result = document.getElementById('result');
    if (correctAnswers > questions.length / 2) {
        result.className = 'result success';
        result.innerHTML = `
            <p>مبروك! لقد أجبت على أكثر من نصف الأسئلة بشكل صحيح!</p>
            <button onclick="restartChallenge()">إعادة التحدي</button>
        `;
    } else {
        result.className = 'result error';
        result.innerHTML = `
            <p>لقد خسرت. حاول مرة أخرى!</p>
            <button onclick="restartChallenge()">إعادة التحدي</button>
        `;
    }
}

function restartChallenge() {
    currentQuestionIndex = 0;
    correctAnswers = 0;

    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('hint-text').textContent = question.hint;
    document.getElementById('html-code').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('hint').classList.add('hidden');
}
