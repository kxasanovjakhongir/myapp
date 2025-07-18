// script.js
const btn = document.getElementById('calc'),
      res = document.getElementById('result'),
      pdfBtn = document.getElementById('downloadPDF');

btn.onclick = () => {
  const g=document.getElementById('gender').value,
        f=document.getElementById('format').value,
        h=+height.value, w=+weight.value, ch=+chestHip.value,
        waist=+waist.value, sh=+shoulder.value;
  if(!h||!w||!ch||!waist||!sh){res.innerText="To‘ldiring!";return;}

  const sizeL = (g==='men')? menSize(h,w,ch,waist,sh) : womenSize(h,w,ch,waist,sh);
  const output = f==='letter'? sizeL : mapToNumeric(sizeL);
  res.innerText = `Mos o‘lchamingiz: ${output}`;
  pdfBtn.style.display='block';
};

pdfBtn.onclick = () => html2pdf().from(pdfArea).save('kiyim.pdf');

function menSize(h,w,ch,wa,sh){
  if(ch>=119||wa>=107||sh>=45.5||h>185||w>95) return 'XL';
  if(ch>=110||wa>=102||sh>=44.5||h>180||w>85)   return 'L';
  if(ch>=97||wa>=97||sh>=42||h>175||w>75)        return 'M';
  return 'S';
}

function womenSize(h,w,ch,wa,sh){
  if(ch>=101||wa>=84||sh>=40||h>170||w>75) return 'XL';
  if(ch>=96||wa>=79||sh>=38||h>165||w>65)  return 'L';
  if(ch>=91||wa>=74||sh>=37||h>160||w>55)  return 'M';
  return 'S';
}

function mapToNumeric(s){
  const m={S:'32',M:'36',L:'38',XL:'40'};
  return m[s]||s;
}
