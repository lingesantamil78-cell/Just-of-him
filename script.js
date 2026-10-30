// Backend URL set pannina replies online save aagum. Example: 'https://your-backend.example.com'
const API_BASE = '';
const screens = [...document.querySelectorAll('.screen')];
function showScreen(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>showScreen(btn.dataset.next)));

const questions=[
 {q:'1. Naan fever nu sonnapo, konjam concern kaatanum nu unakku thonucha?',a:['Aama, concern irundhuchu','Enakku theriyala / notice pannala','Epdi respond panradhu nu theriyala','Idha pathi pesalaam']},
 {q:'2. Munnaadi maari nee enga pora, enna panra nu updates share panna miss aagudha?',a:['Aama, miss aagudhu','Innum share panna aasai irukku','Ippo konjam change aayiduchu','Pesalaam']},
 {q:'3. Message pannitu phone vechittu poidumbodhu, naan wait panren nu unakku theriyuma?',a:['Theriyum, sorry','Busy / tired-ah irukken','Adha yosikkala','Inime sollittu poren']},
 {q:'4. Namma friendship-la distance vandhirukku nu unakkum thonudha?',a:['Aama','Konjam','Enakku appadi thonala','Enakkum puriyala']},
 {q:'5. Munnaadi maari 5 minutes kooda sometimes spend panna mudiyuma?',a:['Mudiyum, try panren','Free aagumbodhu pesalaam','Ippo space venum','Idha discuss pannalaam']},
 {q:'6. Munnaadi nee initiate panna calls nyabagam irukka?',a:['Aama, nyabagam irukku','Andha calls miss panren','Ippo call panna comfortable illa','Message-la pesalaam']},
 {q:'7. Naan replaced aana maari feel panren nu sonnapo argument aagudhu. Un side-la enna feel aachu?',a:['Un feeling puriyudhu','Naan appadi mean pannala','Enakkum hurt aachu','Calm-ah pesalaam']},
 {q:'8. Naan un number delete panniten nu sonnapo nee “okay” sonnadhu pathi...',a:['Adhu unna hurt pannum nu yosikkala','Enna solla nu theriyala','Sorry, casual-ah sollitten','Idha pathi pesalaam']},
 {q:'9. Namma daily updates, random videos, “enna panra?” nu kekkuradhu miss aagudha?',a:['Aama, miss aagudhu','Sometimes','Ippo enakku time / mind illa','Konjam konjam start pannalaam']},
 {q:'10. Namma friendship future-la epdi irukkanum nu ninaikkura?',a:['Lifelong friends-ah irukkalaam','Space irundhaalum friendship venum','Honest-ah pesi decide pannalaam','Enakku konjam time venum']}
];
let current=0;const answers=[];const card=document.getElementById('questionCard');
function renderQuestion(){const item=questions[current];card.innerHTML=`<h3>${item.q}</h3><div class="answers">${item.a.map((a,i)=>`<button class="answer" data-answer="${i}">${a}</button>`).join('')}</div>`;card.querySelectorAll('.answer').forEach(btn=>btn.addEventListener('click',()=>{answers[current]=item.a[Number(btn.dataset.answer)];if(current<questions.length-1){current++;renderQuestion()}else{showScreen('letter')}}));document.getElementById('progressBar').style.width=((current+1)/questions.length*100)+'%';document.getElementById('progressLabel').textContent=`Question ${current+1} / ${questions.length}`;}
renderQuestion();
document.getElementById('skipQuestions').addEventListener('click',()=>showScreen('letter'));
document.getElementById('sendReply').addEventListener('click',async()=>{const name=document.getElementById('signatureName').value.trim();const note=document.getElementById('replyNote').value.trim();const status=document.getElementById('saveStatus');if(!name){status.textContent='Un name type pannu; illenna Skip select pannalaam.';return;}const payload={name,note,answers,createdAt:new Date().toISOString()};if(!API_BASE){status.textContent='Acknowledgement ready! Online save panna backend connect pannanum.';setTimeout(()=>showScreen('ending'),1400);return;}try{const response=await fetch(`${API_BASE}/api/replies`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!response.ok)throw new Error('Save failed');status.textContent='Un acknowledgement save aayiduchu. Thank you!';setTimeout(()=>showScreen('ending'),1100);}catch(e){status.textContent='Ippo online save aagala. Parava illa, continue pannalaam.';}});
document.getElementById('restart').addEventListener('click',()=>{current=0;answers.length=0;renderQuestion();showScreen('welcome')});
