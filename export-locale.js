/* Translate generated export labels only. Preserve raw CSV/JSON, code, user text and source categories. */
(()=>{
 const original=VisStore.download,vault=new Map();let serial=0;const raw=value=>{const token='\uE010'+(serial++).toString(36)+'\uE011';vault.set(token,String(value));return token;};
 const en=()=>document.documentElement.lang==='en',tr=s=>window.__i18n?.translate(String(s))||String(s);
 const filenames={'可视化导论-学习备份.json':'visualization-learning-backup.json','可视化导论-学习笔记.md':'visualization-learning-notes.md','图书馆-原始记录.csv':'library-source-records.csv','图书馆-本周到馆人次.svg':'library-weekly-visits.svg','我的可视化案例报告.md':'visualization-case-report.md','图表选型记录.md':'chart-selection-record.md','校园食堂分时客流.csv':'canteen-source-records.csv','可视化综合实践说明.md':'visualization-practice-report.md','综合实践统计图.svg':'practice-chart.svg','综合实践聚合结果.csv':'practice-aggregates.csv','可视化导论-开放解释练习.md':'visualization-open-responses.md','可视化课程复习计划.md':'visualization-review-plan.md','章节成果任务.csv':'chapter-task-data.csv'};
 function protectedValues(){const s=VisStore.get(),out=Object.values(s.notes);for(const[k,v]of Object.entries(s.answers)){if(typeof v!=='string')continue;if(/^(chapter-response-|studio-practice-|explain-response-)/.test(k)||k==='caseReflection')out.push(v);if(/^(fixer-|evidence-)/.test(k)){try{const o=JSON.parse(v);out.push(o.reason||o.response||'');}catch{}}}
 const title=document.querySelector('#workbench-title')?.value;if(title&&!['每日总就餐人次','各时段日均就餐人次','未命名统计图'].includes(title))out.push(title);
 // Data labels remain exactly as recorded, even when their words resemble interface labels.
 
 
 const data=document.querySelector('#practice-workbench')?window.PracticeWorkbench?.exportData?.():null;if(data){out.push(...data.groups);if(data.source.startsWith('本地文件 '))out.push(data.source.slice(5));}
 return [...new Set(out.filter(x=>typeof x==='string'&&x.length))].sort((a,b)=>b.length-a.length);
 }
 function text(value,raw){const map=[];let s=String(value);for(const v of raw)if(s.includes(v)){let token='\uE000'+map.length.toString(36)+'\uE001';while(s.includes(token))token+='x';map.push([token,v]);s=s.split(v).join(token);}const convert=line=>{const prefix=line.match(/^(\s*(?:#{1,6}\s+|- \[[ x]\]\s*))/);let body=prefix?line.slice(prefix[0].length):line;body=tr(body);body=body.split(/([：:；;])/).map(x=>/[\u4e00-\u9fff]/.test(x)?tr(x):x).join('');return (prefix?.[0]||'')+body;};s=s.split('\n').map(convert).join('\n');
 for(const[t,v]of map)s=s.split(t).join(v);return s;
 }
 function markup(value,type,raw){const svg=type.includes('svg'),doc=new DOMParser().parseFromString(value,svg?'image/svg+xml':'text/html');if(doc.querySelector('parsererror'))return value;
 const root=svg?doc.documentElement:doc.body;const walk=doc.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=walk.nextNode()){if(n.parentElement.closest('pre,code,script,style')){if(n.nodeValue==='尚未填写'&&!raw.includes(n.nodeValue))n.nodeValue=tr(n.nodeValue);continue;}const categories=['周一','周二','周三','周四','周五','周六','周日','上午','下午','早餐','午餐','晚餐',...[...document.querySelectorAll('#workbench-table tbody th')].map(e=>e.textContent)];if(!categories.includes(n.nodeValue.trim()))n.nodeValue=text(n.nodeValue,raw);}
 if(!svg)doc.title=text(doc.title,raw);[root,...root.querySelectorAll('[aria-label],[title]')].forEach(el=>{for(const a of ['aria-label','title'])if(el.hasAttribute(a))el.setAttribute(a,text(el.getAttribute(a),raw));});doc.documentElement.setAttribute('lang','en');return svg?new XMLSerializer().serializeToString(doc.documentElement):'<!doctype html>\n'+doc.documentElement.outerHTML;
 }
 VisStore.download=(name,value,type='text/plain')=>{if(!en()){for(const[token,rawValue]of vault)value=String(value).split(token).join(rawValue);vault.clear();return original(name,value,type);}const raw=protectedValues();let result=value;if(!/json|csv/.test(type)&&!/\.(json|csv)$/i.test(name)){if(/html|svg/.test(type))result=markup(value,type,raw);else{const blocks=[];let tokenized=String(value).replace(/```[\s\S]*?```/g,s=>{blocks.push(s);return '\uE002'+(blocks.length-1)+'\uE003';});result=text(tokenized,[]);result=result.replace(/\uE002(\d+)\uE003/g,(_,i)=>blocks[+i]);}}
 for(const[token,value]of vault)result=String(result).split(token).join(value);vault.clear();
 let file=filenames[name]||name.replace(/^第([1-5])章成果记录\.md$/,'chapter-$1-learning-record.md');if(/^图表纠错实验-/.test(file))file='chart-correction-'+(file.includes('基线')?'baseline':file.includes('时间')?'time':'color')+'.html';return original(file,result,type);};
 window.ExportLocale={raw,t:s=>en()?tr(s):s,text:s=>en()?text(s,protectedValues()):s};
})();
