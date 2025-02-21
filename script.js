// Создаем материал для эффекта
let material = new Blotter.RollingDistortMaterial();
material.uniforms.uSineDistortAmplitude.value = 0.04;
material.uniforms.uSineDistortCycleCount.value = 1;

// Обработка первой фразы (без раскраски отдельных частей)
let firstText = new Blotter.Text("БУДУЩЕЕ УЖЕ НАСТУПИЛО С", {
  family: "Helvetica",
  weight: 600,
  size: 54,
  fill: "#0d1627"
});
let blotterFirst = new Blotter(material, { texts: firstText });
let scopeFirst = blotterFirst.forText(firstText);
scopeFirst.appendTo(document.getElementById("first-text"));

// Обработка второй фразы "ВЕРДИИКТ", разделенной на части:
// Часть 1: "ВЕРД"
let textPart1 = new Blotter.Text("верд", {
  family: "Helvetica",
  weight: 600,
  size: 180,
  fill: "#0d1627"
});

// Часть 2: "ИИ" – другой цвет
let textPart2 = new Blotter.Text("ии", {
  family: "Helvetica",
  weight: 600,
  size: 180,
  fill: "#5F00DC" // Другой цвет для "ИИ"
});

// Часть 3: "КТ"
let textPart3 = new Blotter.Text("кт", {
  family: "Helvetica",
  weight: 600,
  size: 180,
  fill: "#0d1627"
});

// Создаем Blotter для каждой части
let blotter1 = new Blotter(material, { texts: textPart1 });
let blotter2 = new Blotter(material, { texts: textPart2 });
let blotter3 = new Blotter(material, { texts: textPart3 });

// Получаем области отрисовки и добавляем в контейнер
let scope1 = blotter1.forText(textPart1);
let scope2 = blotter2.forText(textPart2);
let scope3 = blotter3.forText(textPart3);

scope1.appendTo(document.getElementById("part1"));
scope2.appendTo(document.getElementById("part2"));
scope3.appendTo(document.getElementById("part3"));
