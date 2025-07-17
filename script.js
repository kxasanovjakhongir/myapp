const form = document.getElementById('sizeForm');
form.addEventListener('submit', e => {
  e.preventDefault();

  const gender = document.getElementById('gender').value;
  const h = +document.getElementById('height').value;
  const s = +document.getElementById('shoulder').value;
  const w = +document.getElementById('waist').value;
  const hip = +document.getElementById('hip').value;

  if (!h || !s || !w || !hip) {
    return showResult("Iltimos, barcha maydonlarni to‘ldiring.");
  }

  const size = (gender === 'men')
    ? calcMen(h, s, w, hip)
    : calcWomen(h, s, w, hip);

  showResult(`Sizga mos kiyim o‘lchamingiz: ${size}`);
  document.getElementById('downloadPDF').style.display = 'block';
});

document.getElementById('downloadPDF').addEventListener('click', () => {
  html2pdf().from(document.getElementById('pdfArea')).save('kiyim-olchami.pdf');
});

function showResult(text) {
  document.getElementById('result').innerText = text;
}

// Erkaklar uchun
function calcMen(h, s, w, hip) {
  if (h >=185 || s>=106 || w>=91) return 'XL';
  if (h>=180 || s>=101 || w>=86) return 'L';
  if (h>=175 || s>=96  || w>=81) return 'M';
  return 'S';
}

// Ayollar uchun (EU chart) :contentReference[oaicite:1]{index=1}
function calcWomen(h, s, w, hip) {
  if (h>=175 || hip>=114 || w>=86) return 'XL';
  if (h>=174 || hip>=108 || w>=80) return 'L';
  if (h>=172 || hip>=104 || w>=76) return 'M';
  return 'S';
}
