/* Search existing local learning resources; no server or external index required. */
window.CourseSearch=(()=>{
 const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let scope='all',lastQuery=null;
 const english=()=>window.__i18n?.getLocale()==='en-US';
 const t=(zh,en)=>english()?en:zh;
 const tr=s=>english()?(window.__i18n?.translate(s)||s):s;
 const aliases={"scale": "比例尺", "scales": "比例尺", "time": "时间", "temporal": "时间", "calendar": "日历", "heatmap": "热图", "color": "颜色", "colour": "颜色", "palette": "配色", "data": "数据", "workflow": "流程", "tree": "树", "network": "关系", "contour": "等值线", "line": "折线", "bar": "条形", "chart": "图", "mapping": "映射", "interpolation": "插值", "fit": "拟合", "regression": "拟合", "missing": "缺失", "trend": "趋势", "cycle": "周期", "baseline": "基线", "aggregation": "聚合", "aggregate": "聚合", "interaction": "交互", "notes": "笔记", "backup": "备份", "practice": "实践", "quiz": "自测", "reading": "阅读", "domain": "定义域", "range": "值域", "nominal": "名义", "ordinal": "顺序", "ratio": "比率"};
 const queryWords=q=>q.toLowerCase().trim().split(/\s+/).filter(Boolean);
 const alternatives=word=>aliases[word]?[word,aliases[word]]:[word];

 const modules=[
  ['图表纠错实验室','修改图形并对照结果，完成基线、时间缺失与配色任务','纠错 基线 轴起点 缺失值 排序 颜色 图例 实验','#fixer'],
  ['学习成果示例','通过问题、数据口径、图形选择、交互与结论限制，查看完整分析过程及来源。','成果 作品 案例 展示 分析 原创 来源','#showcase'],
  ['基础导学','读图框架、HTML、CSS、JavaScript、SVG与D3的角色，以及入门准备检查。','入门 零基础 学习路径','#start'],
  ['公开数据完整案例','从企鹅测量与NOAA月均记录完成六步分析，核查来源、汇总、编码与限制。','公开数据 penguins NOAA CO2 完整 案例 汇总','#case?dataset=public'],
  ['历史合成案例','旧版14条图书馆合成记录与个人笔记，保留用于历史学习记录查阅。','历史 合成 图书馆 笔记','#case?step=0&legacy=1'],
  ['可视化实验室','通过真实数据实验，核对加权聚合、数据流程、色图选择、对数比例尺与时间缺失。','聚合 加权 流程 色图 对数 比例尺 时间 缺失 实验','#lab'],
  ['五章任务实践','基于Palmer Penguins和NOAA公开数据，完成缺失值、分组映射、色图、二维密度轮廓与CO2时序任务。','公开数据 企鹅 penguins NOAA CO2 缺失 色图 等高线 轮廓 density 时间 周期 实践','#design?tab=selection'],
  ['图表选型指南','根据分析任务与数据结构选择适用图表，核对选型条件。','比较 趋势 分布 关系 组成 空间 选型','#design?tab=selection&mode=reference'],
  ['可视化设计诊断','对照修正前后的图形，检查零基线、指标单位与日期顺序。','误导 坐标轴 单位 排序 诊断','#design?tab=diagnosis'],
  ['公开数据综合设计','用公开源记录与可追溯统计撰写六项设计说明。','公开数据 penguins NOAA 报告 实践','#design?tab=practice'],
  ['历史CSV工作台','导入本地UTF-8 CSV，校验日期、时段与人次；旧默认样例为教学合成。','CSV导入 上传 数据 工作台 历史','#design?tab=practice&legacy=1'],
  ['开放解释练习','通过三个情境独立解释聚合与人次、缺失记录、基线与结论边界，依据明确评价标准自评并导出。','开放题 解释 推理 评价标准 人工评分','#review?mode=explain'],
  ['知识自测','完成10道章节检查题，阅读答案解析并跳转到相关课程。','测验 测试 习题 答题','#review'],
  ['复习导航','汇总最近作答中的错误记录，按来源筛选并导出复习计划。','错题 复习计划 答案 解析','#review?mode=revision'],
  ['学习笔记与备份','按课程小节记录笔记，自动保存于当前浏览器，支持Markdown导出与JSON备份恢复。','保存 笔记 备份 导入 恢复','#notes']
 ];
 function resources(){const notes=VisStore.get().notes;return [
  ...COURSE.flatMap(c=>c.sections.map(s=>{const g=BEGINNER_GUIDES[s.id]||{},note=notes[s.id]||'';return {kind:'course',label:`第${c.id}章课程`,title:s.title,url:`lesson-0${c.id}/index.html#${s.id}`,note,fields:[c.title,c.desc,...Object.entries(g).filter(([k])=>!['q','options','answer','why'].includes(k)).map(([,v])=>Array.isArray(v)?v.join(' '):String(v)),...(note.trim()?['个人笔记：'+note]:[])]};})),
  ...BEGINNER_TERMS.map(t=>({kind:'term',label:'术语手册',title:t[0],url:'#glossary?q='+encodeURIComponent(t[0]),fields:t.slice(1)})),
  ...modules.map(([title,desc,tags,url])=>({kind:'tool',label:'学习功能',title,url,fields:[desc,'涉及主题：'+tags.split(/\s+/).join('、')+'。']}))
 ];}
 function matches(q){const words=queryWords(q);if(!words.length)return [];return resources().filter(r=>words.every(w=>alternatives(w).some(term=>[r.title,...r.fields].map(v=>v+' '+(window.__i18n?.translate(v)||'')).join(' ').toLowerCase().includes(term)))).map(r=>({...r,score:words.reduce((n,w)=>n+(alternatives(w).some(term=>r.title.toLowerCase().includes(term))?3:0),0)})).sort((a,b)=>b.score-a.score);}
 function snippet(r,words){const field=(r.kind==='tool'?r.fields[0]:r.fields.find(value=>words.some(w=>(value+' '+tr(value)).toLowerCase().includes(w)))||(r.kind==='course'?r.fields[2]:r.fields[0])||'');const raw=!!r.note&&field==='个人笔记：'+r.note;const text=raw?t('个人笔记：','Personal note: ')+r.note:tr(field);const first=words.map(w=>text.toLowerCase().indexOf(w)).filter(i=>i>=0);const start=first.length?Math.max(0,Math.min(...first)-28):0;return {raw,text:(start?'…':'')+text.slice(start,start+160)+(text.length>start+160?'…':'')};}
 function highlight(text,words){let output='',position=0;const lower=text.toLowerCase();while(position<text.length){let index=-1,word='';for(const w of words){const found=lower.indexOf(w,position);if(found>=0&&(index<0||found<index||(found===index&&w.length>word.length))){index=found;word=w;}}if(index<0){output+=e(text.slice(position));break;}output+=e(text.slice(position,index))+'<mark>'+e(text.slice(index,index+word.length))+'</mark>';position=index+word.length;}return output;}
 function page(){const q=new URLSearchParams(location.hash.split('?')[1]||'').get('q')||'';if(q!==lastQuery){scope='all';lastQuery=q;}const words=[...new Set(queryWords(q).flatMap(alternatives))];const all=matches(q);const visible=all.filter(r=>scope==='all'||r.kind===scope);return `<div class="page-intro"><h1>${t('全站搜索','Site search')}</h1><p>${t('检索课程导读、个人笔记、术语定义与学习功能。多个关键词以空格分隔，结果需同时包含这些关键词。','Search course guides, personal notes, glossary entries and learning tools. Separate keywords with spaces; results must match every keyword.')}</p><p class="search-query">${q.trim()?t(`“${e(q)}” 共匹配 ${all.length} 项资源。`,`${all.length} resources match “${e(q)}”.`):t('请输入具体概念或任务，例如“比例尺”“CSV导入”或“笔记备份”。','Enter a concept or task, such as scale, CSV import, or note backup.')}</p></div><div class="filter-bar search-scopes" role="group" aria-label="搜索资源类型">${[['all',t('全部资源','All resources')],['course',t('课程小节','Course sections')],['term',t('术语定义','Glossary entries')],['tool',t('学习功能','Learning tools')]].map(([key,label])=>`<button data-search-scope="${key}" aria-pressed="${scope===key}" class="${scope===key?'active':''}">${label}<span>${key==='all'?all.length:all.filter(r=>r.kind===key).length}</span></button>`).join('')}<span class="filter-count" role="status">${t(`当前显示 ${visible.length} 项`,`Showing ${visible.length} resources`)}</span></div>${visible.length?`<div class="unified-results">${visible.map(r=>`<a class="search-result" href="${e(r.url)}"><small>${r.kind==='course'?t(r.label,`Chapter ${r.url.match(/lesson-0(\d)/)?.[1]} course`):t(r.label,r.kind==='tool'?'Learning tool':'Glossary')}</small><h2>${highlight(tr(r.title),words)}</h2><p class="${snippet(r,words).raw?'user-text':''}">${highlight(snippet(r,words).text,words)}</p><span class="search-open">${t('查看内容 ↗','Open resource ↗')}</span></a>`).join('')}</div>`:`<div class="empty">${!q.trim()?t('可使用顶部搜索框开始检索。','Use the search box above to begin.'):all.length?t('当前分类下没有匹配结果，可切换“全部资源”。','No matches in this category. Select All resources.'):t('未找到匹配资源。请缩短关键词，或使用课程术语，例如“聚合”“比例尺”“色图”。','No matching resources. Try fewer keywords or course terms such as aggregation, scale, or color map.')}</div>`}`;}
 function bind(){document.querySelectorAll('[data-search-scope]').forEach(b=>b.onclick=()=>{scope=b.dataset.searchScope;document.querySelector('#main').innerHTML=page();bind();document.querySelector(`[data-search-scope="${scope}"]`).focus({preventScroll:true});});}
 document.addEventListener('wbl:localechange',()=>{if(location.hash.split('?')[0]==='#search'){document.querySelector('#main').innerHTML=page();bind();}});
 return {page,bind};
})();
