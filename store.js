/* Shared browser-local learning state. No account or server required. */
(() => {
  const key = 'vis-learning-v1';
  const extraKey = 'vis-learning-study-v22';
  let available = true;
  const blank = () => ({version:1, done:[], notes:{}, last:null, answers:{},resume:null});
  function validate(x) {
    if (!x || x.version !== 1 || !Array.isArray(x.done) || typeof x.notes !== 'object' || !x.notes || Array.isArray(x.notes)) throw new Error('备份格式不正确');
    const counts=[5,4,8,5,5];
    const valid = s => {const m=typeof s==='string' && s.match(/^ch-([1-5])-(\d+)$/);return !!m && +m[2]>=1 && +m[2]<=counts[+m[1]-1];};
    const notes = {};
    Object.entries(x.notes).forEach(([k,v])=>{if(valid(k) && typeof v === 'string') notes[k]=v.slice(0,30000);});
    const answers={};
    if(x.answers && typeof x.answers==='object' && !Array.isArray(x.answers)) Object.entries(x.answers).forEach(([k,v])=>{
      if(/^q(?:[1-9]|10)$/.test(k) && Number.isInteger(v) && v>=0 && v<=3) answers[k]=v;
      if(k.startsWith('guide-') && valid(k.slice(6)) && Number.isInteger(v) && v>=0 && v<=2) answers[k]=v;
      if(/^case-check-[0-5]$/.test(k) && Number.isInteger(v) && v>=0 && v<=2) answers[k]=v;
      if(k==='case-sat' && Number.isInteger(v) && v>=0 && v<=300) answers[k]=v;
      if(/^studio-diag-(baseline|unit|order)$/.test(k) && Number.isInteger(v) && v>=0 && v<=2) answers[k]=v;
      if(/^studio-practice-[0-5]$/.test(k) && typeof v==='string') answers[k]=v.slice(0,5000);
      if(/^studio-self-[0-5]$/.test(k) && typeof v==='boolean') answers[k]=v;
      if(/^explain-response-[0-2]$/.test(k) && typeof v==='string') answers[k]=v.slice(0,5000);
      if(/^explain-self-[0-2]-[0-2]$/.test(k) && typeof v==='boolean') answers[k]=v;
      if(/^evidence-ch-1-[1-5]$/.test(k) && typeof v==='string') answers[k]=v.slice(0,12000);
      if(/^real-diag-(baseline|unit|order)$/.test(k) && Number.isInteger(v)&&v>=0&&v<=2)answers[k]=v;
      if(k==='missing-impact-v56' && typeof v==='string')answers[k]=v.slice(0,10000);
      if(k==='real-practice-v56' && typeof v==='string')answers[k]=v.slice(0,60000);
      if(k==='course-design-v55' && typeof v==='string') answers[k]=v.slice(0,30000);
      if(k==='design-evidence-v54' && typeof v==='string') answers[k]=v.slice(0,10000);
      if(k==='course-lab-v48' && typeof v==='string') answers[k]=v.slice(0,24000);
      if(k==='caseReflection' && typeof v==='string') answers[k]=v.slice(0,5000);
      if(/^chapter-response-[1-5]$/.test(k) && typeof v==='string') answers[k]=v.slice(0,5000);
      if(/^chapter-self-[1-5]-[0-2]$/.test(k) && typeof v==='boolean') answers[k]=v;
      if(k.startsWith('transfer-') && valid(k.slice(9)) && Number.isInteger(v) && v>=0 && v<=2) answers[k]=v;
    });
    Object.entries(x.answers||{}).forEach(([k,v])=>{if(/^fixer-(baseline|time|color)$/.test(k)&&typeof v==='string')answers[k]=v.slice(0,6000);});
    let resume=null;
    if(x.resume && valid(x.resume.section) && ['explain','code','demo','compare'].includes(x.resume.panel) && Number.isFinite(x.resume.offset) && Number.isFinite(x.resume.at)) resume={section:x.resume.section,panel:x.resume.panel,offset:Math.min(100000,Math.max(-2000,x.resume.offset)),openDetails:Array.isArray(x.resume.openDetails)&&x.resume.openDetails.every(v=>typeof v==='boolean')?x.resume.openDetails.slice(0,40):[],taskOpen:x.resume.taskOpen===true,codeOffset:Math.min(100000,Math.max(0,Number(x.resume.codeOffset)||0)),demoOffset:Math.min(100000,Math.max(0,Number(x.resume.demoOffset)||0)),at:Math.min(Date.now()+86400000,Math.max(0,x.resume.at))};
    return {version:1,done:[...new Set(x.done.filter(valid))],notes,last:valid(x.last)?x.last:null,answers,resume};
  }
  let state=blank();
  function decode(raw){const parsed=JSON.parse(raw),clean=validate(parsed);try{const lab=JSON.parse(localStorage.getItem('vis-learning-fixer-v24')||'{}');const validLab=validate({...blank(),answers:lab}).answers;clean.answers={...validLab,...clean.answers};}catch{}if(!Object.prototype.hasOwnProperty.call(parsed,'resume')){try{const extra=JSON.parse(localStorage.getItem(extraKey)||'null');if(extra&&extra.answers&&typeof extra.answers==='object'&&!Array.isArray(extra.answers))return validate({...clean,answers:{...extra.answers,...clean.answers},resume:extra.resume});}catch(e){/* A damaged supplemental copy never invalidates legacy notes. */}}return clean;}
  try { const raw=localStorage.getItem(key); if(raw) state=decode(raw); } catch(e) {available=false;}
  function readLatest(){if(!available)return;try{const raw=localStorage.getItem(key);state=raw?decode(raw):blank();}catch(e){available=false;}}
  function save() {try {localStorage.setItem(key,JSON.stringify(state));const answers=Object.fromEntries(Object.entries(state.answers).filter(([k])=>/^(chapter-response-|chapter-self-|transfer-)/.test(k)));localStorage.setItem(extraKey,JSON.stringify({answers,resume:state.resume}));localStorage.setItem('vis-learning-fixer-v24',JSON.stringify(Object.fromEntries(Object.entries(state.answers).filter(([k])=>/^fixer-/.test(k)))));available=true;} catch(e) {available=false;} window.dispatchEvent(new Event('vis-state')); return available;}
  window.addEventListener('storage',event=>{if(event.key===key || event.key===extraKey || event.key==='vis-learning-fixer-v24' || event.key===null){readLatest();window.dispatchEvent(new Event('vis-external-state'));}});
  window.addEventListener('pageshow',()=>readLatest());
  window.VisStore = {
    get:()=>JSON.parse(JSON.stringify(state)), available:()=>available,
    toggle(id){readLatest();state.done=state.done.includes(id)?state.done.filter(s=>s!==id):[...state.done,id]; return save();},
    note(id,text){readLatest();state.notes[id]=text; return save();},
    visit(id){readLatest();state.last=id; return save();},
    answer(id,value){readLatest();state.answers[id]=value; return save();},
    taskResponse(chapter,text){readLatest();if(!Number.isInteger(chapter)||chapter<1||chapter>5)return false;state.answers['chapter-response-'+chapter]=String(text).slice(0,5000);[0,1,2].forEach(k=>state.answers[`chapter-self-${chapter}-${k}`]=false);return save();},
    checkpoint(value){readLatest();const next=validate({...state,resume:value}).resume;if(next){state.resume=next;state.last=next.section;}return save();},
    import(x){state=validate(x); return save();},
    download(name,text,type='text/plain'){const a=document.createElement('a');const u=URL.createObjectURL(new Blob([text],{type}));a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
  };
})();
