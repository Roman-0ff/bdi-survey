/* ================== ВОПРОСЫ BDI ================== */
/* Каждый пункт — массив утверждений с баллами.
   Баллы: 0, 1, 2, 3 (в некоторых пунктах есть подварианты 2а/2б и т.п.,
   но для подсчёта они дают одинаковый балл — поэтому здесь упрощены до 0–3). */

const QUESTIONS = [
  {
    title: "A. Настроение",
    options: [
      { text: "Я не чувствую себя несчастным.", score: 0 },
      { text: "Я чувствую себя несчастным.", score: 1 },
      { text: "Я всё время несчастен и не могу освободиться от этого чувства.", score: 2 },
      { text: "Я настолько несчастен и опечален, что не могу этого вынести.", score: 3 }
    ]
  },
  {
    title: "Б. Пессимизм",
    options: [
      { text: "Думая о будущем, я не чувствую себя особенно разочарованным.", score: 0 },
      { text: "Думая о будущем, я чувствую себя разочарованным.", score: 1 },
      { text: "Я чувствую, что мне нечего ждать в будущем.", score: 2 },
      { text: "Я чувствую, что будущее безнадёжно и ничего не изменится к лучшему.", score: 3 }
    ]
  },
  {
    title: "В. Чувство несостоятельности",
    options: [
      { text: "Я не чувствую себя неудачником.", score: 0 },
      { text: "Я чувствую, что у меня больше неудач, чем у обычного человека.", score: 1 },
      { text: "Оглядываясь на свою жизнь, я вижу лишь череду неудач.", score: 2 },
      { text: "Я чувствую, что я полностью несостоятелен как личность.", score: 3 }
    ]
  },
  {
    title: "Г. Неудовлетворённость",
    options: [
      { text: "Я получаю такое же удовлетворение от жизни, как и раньше.", score: 0 },
      { text: "Я не получаю такого удовлетворения, как раньше.", score: 1 },
      { text: "Я вообще не получаю удовлетворения.", score: 2 },
      { text: "Любое событие вызывает во мне недовольство.", score: 3 }
    ]
  },
  {
    title: "Д. Чувство вины",
    options: [
      { text: "Я не чувствую за собой никакой вины.", score: 0 },
      { text: "Я часто чувствую себя плохим, недостойным.", score: 1 },
      { text: "Я испытываю чувство вины большую часть времени.", score: 2 },
      { text: "Мне постоянно кажется, что я очень плохой и никчёмный человек.", score: 3 }
    ]
  },
  {
    title: "Е. Ожидание наказания",
    options: [
      { text: "Я не чувствую, что заслуживаю наказания.", score: 0 },
      { text: "Я чувствую, что со мной может что-нибудь случиться.", score: 1 },
      { text: "Я чувствую, что меня наказывают или вот-вот накажут.", score: 2 },
      { text: "Я чувствую, что заслуживаю наказания.", score: 3 }
    ]
  },
  {
    title: "Ж. Нелюбовь к себе",
    options: [
      { text: "Я не разочарован в себе.", score: 0 },
      { text: "Я разочарован в себе.", score: 1 },
      { text: "Я себе не нравлюсь.", score: 2 },
      { text: "Я испытываю отвращение к самому себе.", score: 3 }
    ]
  },
  {
    title: "З. Самообвинение",
    options: [
      { text: "Я не считаю, что я чем-то хуже других.", score: 0 },
      { text: "Я критикую себя за свои слабости и ошибки.", score: 1 },
      { text: "Я виню себя за то, что всё идёт не так.", score: 2 },
      { text: "Я знаю за собой очень много серьёзных недостатков.", score: 3 }
    ]
  },
  {
    title: "И. Суицидальные мысли",
    options: [
      { text: "У меня нет мыслей о нанесении себе вреда.", score: 0 },
      { text: "У меня возникают мысли о нанесении себе вреда, но я не буду их осуществлять.", score: 1 },
      { text: "Я хотел бы покончить с собой.", score: 2 },
      { text: "Я бы покончил с собой, если бы представилась возможность.", score: 3 }
    ]
  },
  {
    title: "К. Плаксивость",
    options: [
      { text: "Я не плачу чаще, чем обычно.", score: 0 },
      { text: "Я плачу чаще, чем обычно.", score: 1 },
      { text: "Я всё время плачу.", score: 2 },
      { text: "Раньше я мог плакать, но теперь не могу, даже когда хочется.", score: 3 }
    ]
  },
  {
    title: "Л. Раздражительность",
    options: [
      { text: "Я не более раздражителен, чем обычно.", score: 0 },
      { text: "Я раздражаюсь легче, чем обычно.", score: 1 },
      { text: "Я чувствую раздражение большую часть времени.", score: 2 },
      { text: "Я совершенно не переношу раздражения.", score: 3 }
    ]
  },
  {
    title: "М. Социальная отгороженность",
    options: [
      { text: "Я не потерял интереса к другим людям.", score: 0 },
      { text: "Я меньше интересуюсь другими людьми, чем раньше.", score: 1 },
      { text: "Я почти потерял интерес к другим людям.", score: 2 },
      { text: "Я полностью потерял интерес к другим людям.", score: 3 }
    ]
  },
  {
    title: "Н. Нерешительность",
    options: [
      { text: "Я принимаю решения так же легко, как обычно.", score: 0 },
      { text: "Я стараюсь отложить принятие решений.", score: 1 },
      { text: "Мне трудно принимать решения.", score: 2 },
      { text: "Я больше не могу принимать решения.", score: 3 }
    ]
  },
  {
    title: "О. Изменение образа тела",
    options: [
      { text: "Я не считаю, что выгляжу хуже, чем обычно.", score: 0 },
      { text: "Я беспокоюсь, что выгляжу непривлекательно.", score: 1 },
      { text: "Я чувствую, что выгляжу всё хуже и хуже.", score: 2 },
      { text: "Я убеждён, что выгляжу уродливо.", score: 3 }
    ]
  },
  {
    title: "П. Потеря работоспособности",
    options: [
      { text: "Я работаю так же хорошо, как и раньше.", score: 0 },
      { text: "Мне требуется больше усилий, чтобы начать работу.", score: 1 },
      { text: "Я заставляю себя делать что-либо.", score: 2 },
      { text: "Я совсем не могу работать.", score: 3 }
    ]
  },
  {
    title: "Р. Нарушения сна",
    options: [
      { text: "Я сплю так же хорошо, как обычно.", score: 0 },
      { text: "Я просыпаюсь уставшим, чем обычно.", score: 1 },
      { text: "Я просыпаюсь на 1–2 часа раньше и не могу заснуть.", score: 2 },
      { text: "Я просыпаюсь очень рано и больше не могу заснуть.", score: 3 }
    ]
  },
  {
    title: "С. Утомляемость",
    options: [
      { text: "Я устаю не больше, чем обычно.", score: 0 },
      { text: "Я устаю быстрее, чем обычно.", score: 1 },
      { text: "Я устаю от почти любой работы.", score: 2 },
      { text: "Я настолько устал, что ничего не могу делать.", score: 3 }
    ]
  },
  {
    title: "Т. Потеря аппетита",
    options: [
      { text: "Мой аппетит не хуже, чем обычно.", score: 0 },
      { text: "Мой аппетит хуже, чем обычно.", score: 1 },
      { text: "Мой аппетит значительно хуже.", score: 2 },
      { text: "У меня совсем нет аппетита.", score: 3 }
    ]
  },
  {
    title: "У. Потеря веса",
    options: [
      { text: "Я не теряю в весе.", score: 0 },
      { text: "Я потерял более 2 кг.", score: 1 },
      { text: "Я потерял более 5 кг.", score: 2 },
      { text: "Я потерял более 7 кг.", score: 3 }
    ]
  },
  {
    title: "Ф. Ипохондрия",
    options: [
      { text: "Я не более озабочен своим здоровьем, чем обычно.", score: 0 },
      { text: "Я обеспокоен неприятными ощущениями в теле.", score: 1 },
      { text: "Я сильно обеспокоен своим здоровьем.", score: 2 },
      { text: "Я настолько обеспокоен здоровьем, что не могу думать о другом.", score: 3 }
    ]
  },
  {
    title: "Х. Потеря интереса к сексу",
    options: [
      { text: "Я не замечал изменения интереса к сексу.", score: 0 },
      { text: "Меня меньше занимают проблемы секса, чем раньше.", score: 1 },
      { text: "Я значительно меньше интересуюсь сексом.", score: 2 },
      { text: "Я полностью утратил сексуальный интерес.", score: 3 }
    ]
  }
];

/* ================== ЛОГ ================== */
function log(msg) {
  console.log(msg);
  const box = document.getElementById("status-box");
  if (box) {
    box.style.display = "block";
    box.textContent += msg + "\n";
    box.scrollTop = box.scrollHeight;
  }
}
function logClear() {
  const box = document.getElementById("status-box");
  if (box) { box.textContent = ""; box.style.display = "block"; }
}

/* ================== ОТРИСОВКА ВОПРОСОВ ================== */
function renderQuestions() {
  const container = document.getElementById("questions-container");
  if (!container) { log("❌ Не найден #questions-container"); return; }

  QUESTIONS.forEach((q, idx) => {
    const block = document.createElement("div");
    block.className = "question";

    const qText = document.createElement("div");
    qText.className = "question-text";
    qText.textContent = q.title;

    block.appendChild(qText);

    q.options.forEach((opt, optIdx) => {
      const label = document.createElement("label");
      label.className = "option";
      label.dataset.q = idx;
      label.dataset.opt = optIdx;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "q" + idx;
      radio.value = opt.score;
      radio.addEventListener("change", () => {
        // снять выделение со всех опций этого вопроса
        document.querySelectorAll(`.option[data-q="${idx}"]`)
          .forEach(el => el.classList.remove("selected"));
        label.classList.add("selected");
      });

      label.appendChild(radio);
      label.appendChild(document.createTextNode(opt.text));
      block.appendChild(label);
    });

    container.appendChild(block);
  });
}

/* ================== СБОР ДАННЫХ ================== */
function collectScores() {
  const scores = [];
  for (let i = 0; i < QUESTIONS.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      return { error: `Не выбран ответ на пункт ${i + 1} (${QUESTIONS[i].title})` };
    }
    scores.push(parseInt(selected.value, 10));
  }
  return { scores };
}

function getGender() {
  return document.querySelector('input[name="gender"]:checked').value;
}
function getAge() {
  return parseInt(document.getElementById("age").value, 10);
}

/* ================== ПОДСЧЁТ ================== */
function calculateTotal(scores) {
  return scores.reduce((a, b) => a + b, 0);
}

/* ================== ИНТЕРПРЕТАЦИЯ ================== */
function interpretBDI(total) {
  /* Классические диапазоны BDI (Beck et al., 1988; адаптация) */
  if (total <= 9) {
    return {
      level: "отсутствие депрессивных симптомов",
      short: "норма",
      color: "#50B86C",
      desc: "Показатель находится в пределах нормы. Признаки депрессии не выражены.",
      recommendation: "Специальных действий не требуется. При сохранении хорошего самочувствия — обычный режим."
    };
  } else if (total <= 15) {
    return {
      level: "лёгкая депрессия (субдепрессивное состояние)",
      short: "лёгкая",
      color: "#A8C64E",
      desc: "Выявляются отдельные депрессивные симптомы лёгкой степени выраженности.",
      recommendation: "Рекомендуется наблюдение за состоянием, нормализация сна, физическая активность, при сохранении симптомов более 2 недель — консультация психолога."
    };
  } else if (total <= 19) {
    return {
      level: "умеренная депрессия",
      short: "умеренная",
      color: "#E8A838",
      desc: "Симптомы депрессии выражены умеренно и могут влиять на повседневную жизнь.",
      recommendation: "Рекомендуется консультация психолога или психотерапевта. Возможна диагностическая беседа и уточнение состояния."
    };
  } else if (total <= 29) {
    return {
      level: "выраженная депрессия (средней тяжести)",
      short: "выраженная",
      color: "#E07B39",
      desc: "Депрессивная симптоматика выражена значительно, затрагивает несколько сфер жизни.",
      recommendation: "Рекомендуется обращение к психотерапевту или психиатру для диагностики и подбора терапии."
    };
  } else {
    return {
      level: "тяжёлая депрессия",
      short: "тяжёлая",
      color: "#D95B43",
      desc: "Выраженная депрессивная симптоматика тяжёлой степени. Состояние требует профессионального вмешательства.",
      recommendation: "Настоятельно рекомендуется срочная консультация психиатра. При наличии суицидальных мыслей — немедленно обратитесь за помощью (телефон доверия: 8-800-2000-122)."
    };
  }
}

/* Разбивка по субшкалам BDI (когнитивно-аффективная и соматическая) */
function subscales(scores) {
  /* Когнитивно-аффективная: пункты 1–14 (индексы 0–13) */
  const cognitive = scores.slice(0, 14).reduce((a, b) => a + b, 0);
  /* Соматическая: пункты 15–21 (индексы 14–20) */
  const somatic = scores.slice(14).reduce((a, b) => a + b, 0);
  return { cognitive, somatic };
}

/* ================== ГРАФИК ================== */
let chartInstance = null;

function drawChart(total, cognitive, somatic) {
  return new Promise((resolve) => {
    const canvas = document.getElementById("resultChart");
    const ctx = canvas.getContext("2d");

    if (chartInstance) chartInstance.destroy();

    document.getElementById("chart-section").classList.remove("hidden");

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Общий балл BDI", "Когнитивно-аффективная", "Соматическая"],
        datasets: [{
          label: "Баллы",
          data: [total, cognitive, somatic],
          backgroundColor: ["#4A90D9", "#8E7CC3", "#E8A838"],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 0, onComplete: () => resolve() },
        scales: {
          y: {
            beginAtZero: true,
            max: 63,
            title: { display: true, text: "Баллы (0–63)" }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (c) => {
                const labels = ["Общий балл", "Когнитивно-аффективная", "Соматическая"];
                const maxes = [63, 42, 21];
                const i = c.dataIndex;
                return `${labels[i]}: ${c.raw} из ${maxes[i]}`;
              }
            }
          }
        }
      }
    });

    setTimeout(() => resolve(), 500);
  });
}

/* ================== PDF ================== */
async function generatePDF(total, cognitive, somatic) {
  logClear();
  log("▶ Старт генерации PDF");

  if (typeof pdfMake === "undefined") { alert("pdfMake не загружен"); return; }
  if (!pdfMake.vfs) { alert("vfs не загружен"); return; }
  log("✓ pdfMake и vfs_fonts найдены");

  if (!chartInstance) {
    log("→ Строю график...");
    await drawChart(total, cognitive, somatic);
  }

  await new Promise(r => setTimeout(r, 100));

  const gender = getGender();
  const age = getAge();
  const interp = interpretBDI(total);

  let chartUrl = "";
  try {
    chartUrl = document.getElementById("resultChart").toDataURL("image/png", 1.0);
    log(`✓ Canvas → PNG (${chartUrl.length} симв.)`);
  } catch (e) {
    log("⚠ Не удалось получить график: " + e.message);
  }

  const content = [];
  content.push({ text: "Результаты шкалы депрессии Бека (BDI)", style: "h1" });
  content.push({ text: "Beck Depression Inventory · 21 пункт", style: "sub" });

  content.push({ text: "Демографические данные", style: "h2" });
  content.push({ text: `Пол: ${gender}` });
  content.push({ text: `Возраст: ${age}` });

  content.push({ text: "Результаты", style: "h2" });
  content.push({ text: `Общий балл BDI: ${total} из 63`, bold: true, fontSize: 13 });
  content.push({ text: `Уровень: ${interp.level}`, bold: true, color: interp.color });
  content.push({ text: "\n" });
  content.push({ text: `Когнитивно-аффективная субшкала: ${cognitive} из 42` });
  content.push({ text: `Соматическая субшкала: ${somatic} из 21` });
  content.push({ text: "\n" });

  if (chartUrl) {
    content.push({ image: chartUrl, width: 500, alignment: "center" });
  }

  content.push({ text: "Интерпретация", style: "h2" });
  content.push({ text: interp.desc });
  content.push({ text: "\n" });
  content.push({ text: "Рекомендации", style: "h3" });
  content.push({ text: interp.recommendation });

  content.push({ text: "О методике", style: "h2" });
  content.push({
    text: "Шкала депрессии Бека (BDI) — стандартизированный самоопросник, " +
          "разработанный Аароном Т. Беком в 1961 году. Содержит 21 пункт, " +
          "оценивающий выраженность депрессивных симптомов за последнюю неделю. " +
          "Диапазон баллов: 0–63."
  });

  content.push({
    text: "ВНИМАНИЕ: результат носит ознакомительный характер и не заменяет " +
          "консультацию специалиста. При тяжёлых показателях или суицидальных мыслях " +
          "немедленно обратитесь к психиатру или психотерапевту.",
    italics: true, color: "#8a2a2a", margin: [0, 12, 0, 0]
  });

  const docDefinition = {
    content,
    defaultStyle: { font: "Roboto", fontSize: 11, lineHeight: 1.35 },
    styles: {
      h1: { fontSize: 20, bold: true, color: "#1a5490", margin: [0, 0, 0, 6] },
      sub: { fontSize: 11, color: "#666", margin: [0, 0, 0, 12] },
      h2: { fontSize: 14, bold: true, color: "#1a5490", margin: [0, 12, 0, 6] },
      h3: { fontSize: 12, bold: true, color: "#333", margin: [0, 8, 0, 2] }
    },
    pageMargins: [40, 40, 40, 50],
    footer: (cur, totalPages) => ({
      columns: [
        { text: "BDI · Конфиденциальный отчёт", fontSize: 9, color: "#999" },
        { text: `Стр. ${cur} из ${totalPages}`, alignment: "right", fontSize: 9, color: "#999" }
      ],
      margin: [40, 20, 40, 0]
    })
  };

  log("→ Создаю PDF...");
  return new Promise((resolve, reject) => {
    try {
      pdfMake.createPdf(docDefinition).getBlob((blob) => {
        log(`✓ Blob получен (${blob.size} байт)`);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "BDI_report.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
        log("✅ Скачивание инициировано");
        resolve();
      }, (err) => {
        log("❌ pdfMake ошибка: " + (err && err.message ? err.message : err));
        reject(err);
      });
    } catch (e) {
      log("❌ Исключение: " + e.message);
      reject(e);
    }
  });
}

/* ================== ОБРАБОТЧИКИ ================== */
function validateAge() {
  const age = getAge();
  if (!age || age < 18 || age > 100) {
    alert("Введите корректный возраст (18–100).");
    return false;
  }
  return true;
}

async function handleShowChart() {
  if (!validateAge()) return;
  const result = collectScores();
  if (result.error) { alert(result.error); return; }
  const total = calculateTotal(result.scores);
  const { cognitive, somatic } = subscales(result.scores);
  await drawChart(total, cognitive, somatic);
  document.getElementById("chart-section").scrollIntoView({ behavior: "smooth" });
}

async function handleGeneratePDF() {
  logClear();
  log("▶ Кнопка PDF нажата");
  if (!validateAge()) { log("❌ Возраст не прошёл валидацию"); return; }

  const result = collectScores();
  if (result.error) {
    log("❌ " + result.error);
    alert(result.error);
    return;
  }

  const total = calculateTotal(result.scores);
  const { cognitive, somatic } = subscales(result.scores);
  log(`✓ Общий балл: ${total}, когнитивная: ${cognitive}, соматическая: ${somatic}`);

  try {
    await generatePDF(total, cognitive, somatic);
  } catch (e) {
    log("❌ Ошибка: " + e.message);
    console.error(e);
  }
}

/* ================== СТАРТ ================== */
window.addEventListener("DOMContentLoaded", () => {
  console.log("[Init] pdfMake:", typeof pdfMake, "| Chart:", typeof Chart);
  renderQuestions();
  document.getElementById("btn-chart").addEventListener("click", handleShowChart);
  document.getElementById("btn-pdf").addEventListener("click", handleGeneratePDF);
  console.log("[Init] Готово");
});