document.getElementById('sizeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const shoulder = parseFloat(document.getElementById('shoulder').value);
  const waist = parseFloat(document.getElementById('waist').value);
  const sizeType = document.getElementById('sizeType').value;

  let size = '';
  const bodyRatio = (height + weight + shoulder + waist) / 4;

  if (sizeType === 'letter') {
    if (bodyRatio < 90) size = 'S';
    else if (bodyRatio < 100) size = 'M';
    else if (bodyRatio < 110) size = 'L';
    else if (bodyRatio < 120) size = 'XL';
    else size = 'XXL';
  } else {
    if (bodyRatio < 90) size = '32';
    else if (bodyRatio < 100) size = '34';
    else if (bodyRatio < 110) size = '36';
    else if (bodyRatio < 120) size = '38';
    else size = '40';
  }

  const result = `Sizning o‘lchamingiz: ${size}`;
  document.getElementById('result').innerText = result;

  // PDF tugmasini ko‘rsatamiz
  document.getElementById('downloadPDF').style.display = 'block';
});

document.getElementById('downloadPDF').addEventListener('click', function () {
  const element = document.getElementById('pdfArea');
  html2pdf().from(element).save('kiyim-olchami.pdf');
});
