const calcBtn = document.getElementById('calc');
const resDiv = document.getElementById('result');
const pdfBtn = document.getElementById('downloadPDF');

calcBtn.addEventListener('click', () => {
  const gender = document.getElementById('gender').value;
  const fmt = document.getElementById('format').value;
  const chest = +document.getElementById('chest').value;
  const waist = +document.getElementById('waist').value;
  const hip = +document.getElementById('hip').value;

  if (!chest || !waist || !hip) {
    resDiv.innerText = "Iltimos, barcha maydonlarni to‘ldiring.";
    return;
  }

  let size = gender === 'men'
    ? calcMen(chest)
    : calcWomen(chest);

  let out = fmt === 'letter'
    ? size
    : mapToNumber(size);

  resDiv.innerText = `Sizga mos o‘lcham: ${out}`;
  pdfBtn.style.display = 'block';
});

pdfBtn.addEventListener('click', () => {
  html2pdf().from(document.getElementById('pdfArea')).save('kiyim-olchami.pdf');
});

function calcMen(ch) {
  if (ch >= 147) return '4XL';
  if (ch >= 137) return '3XL';
  if (ch >= 127) return '2XL';
  if (ch >= 117) return 'XL';
  return 'L';
}

function calcWomen(bust) {
  if (bust >= 143) return '4XL';
  if (bust >= 131) return '3XL';
  if (bust >= 119) return 'XXL';
  if (bust >= 107) return 'XL';
  return 'L';
}

function mapToNumber(size) {
  const map = { L: 1, XL:2, XXL:3, '3XL':4, '4XL':5 };
  return map[size] || size;
}
