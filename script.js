const calcBtn = document.getElementById('calc');
const resDiv = document.getElementById('result');
const pdfBtn = document.getElementById('downloadPDF');

calcBtn.addEventListener('click', () => {
  const gender = document.getElementById('gender').value;
  const fmt = document.getElementById('format').value;
  const h = +document.getElementById('height').value;
  const w = +document.getElementById('weight').value;
  const ch = +document.getElementById('chestHip').value;

  if (!h || !w || !ch) {
    resDiv.innerText = "Iltimos, barcha maydonlarni to‘ldiring.";
    return;
  }

  const sizeLetter = (gender === 'men') ? menSize(h, w, ch) : womenSize(h, w, ch);
  const output = (fmt === 'letter') ? sizeLetter : mapToNumeric(sizeLetter);

  resDiv.innerText = `Sizga mos o‘lcham: ${output}`;
  pdfBtn.style.display = 'block';
});

pdfBtn.addEventListener('click', () => {
  html2pdf().from(document.getElementById('pdfArea')).save('kiyim-olchami.pdf');
});

function menSize(h, w, ch) {
  if (ch >= 119 || h > 185 || w > 90) return 'XL';
  if (ch >= 107 || h > 180 || w > 80) return 'L';
  if (ch >= 96 || h > 175 || w > 70) return 'M';
  return 'S';
}

function womenSize(h, w, ch) {
  if (ch >= 104 || h > 170 || w > 75) return 'L';
  if (ch >= 90 || h > 165 || w > 60) return 'M';
  return 'S';
}

// Harfli razmerni raqamli EU formatga o‘giradi
function mapToNumeric(size) {
  const map = { S:'36', M:'38', L:'40', XL:'42' };
  return map[size] || size;
}
