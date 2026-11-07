const V=require('./data.js');
const bad=["paracetamol","xilometazolin","levotiroxin","levodopa","carbidopa","alprazolam","carbamazepin","simvastatin","claritromicin","clopidogrel","omeprazol","fenobarbital","pilocarpin","atropin","adrenalin","efedrin","suxametoniu","succinil","nitroglicerin","acenocumarol","digoxin","heroin","metoprolol","hidrocortizon","bicarbonat","naloxon","neostigmin","insulin","betaloc","jodid","iodur","benzodiazepin","barbituric","morfin","propranolol","salbutamol","timolol","brimonidin","prazosin","doxazosin"];
let ok=true; const rows=[];
for(const v of V){
  let tot=0; const dom={FC:0,FD:0,FT:0};
  v.subiecte.forEach((s,i)=>{let st=0; s.items.forEach(it=>{
     const [z,p,m]=it.p; st+=m; if(p!==null && !(p>0&&p<m)){console.log('partial bad',v.id,i+1,it.q);ok=false}
     // max notion points in ans
     const pts=[...it.ans.matchAll(/\(([\d,]+) p\)/g)].map(x=>parseFloat(x[1].replace(',','.')));
     const sum=pts.reduce((a,b)=>a+b,0);
     if(pts.length && Math.abs(sum-m)>1e-9 && !/^Oricare/.test(it.ans)){console.log(`V${v.id} S${i+1}: noțiuni ${sum} ≠ max ${m} :: ${it.q}`);ok=false}
     if(!it.src||!it.src.length){console.log('no src',v.id);ok=false}
  }); tot+=st; dom[s.dom]+=st;});
  if(!v.bonus.src.length){ok=false}
  // student text
  const txt=(v.subiecte.map(s=>s.stem+' '+s.items.map(i=>i.q).join(' ')).join(' ')+' '+v.bonus.q).toLowerCase();
  const clean=txt.replace(/noradrenalin\w*/g,'[mediator]').replace(/eliberarea de insulin\w*/g,'[hormon endogen]');
  const hits=bad.filter(b=>new RegExp('(^|[^a-zăâîșț])'+b).test(clean));
  if(hits.length){console.log('NUME în fișa V'+v.id,hits);ok=false}
  rows.push(`V${v.id}: total ${tot} p | FC ${dom.FC} · FD ${dom.FD} · FT ${dom.FT} | itemi ${v.subiecte.reduce((a,s)=>a+s.items.length,0)} | nume: ${hits.length?hits:'0'}`);
  if(Math.abs(tot-9)>1e-9) ok=false;
}
console.log(rows.join('\n')); console.log(ok?'PASS':'FAIL');
