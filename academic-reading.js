/* Reference-backed supplements; original lecture/code/demo nodes are retained. */
(()=>{'use strict';
 const data=window.ACADEMIC_CONTENT;if(!data)return;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const pair=(zh,en,tag='p',cls='')=>`<${tag} class="${cls}" data-lang="zh-CN">${esc(zh)}</${tag}><${tag} class="${cls}" data-lang="en-US" hidden>${esc(en)}</${tag}>`;
 const labels=[['概念与范围','Concept and scope'],['方法与依据','Method and rationale'],['推导与示例','Reasoning and example'],['适用条件与辨析','Conditions and distinctions']];
 for(const item of data.sections){
  const section=document.getElementById(item.id),panel=section?.querySelector('.tab-panel[data-panel="explain"]');if(!panel)continue;
  const supplement=document.createElement('section');supplement.className='academic-notes';supplement.id=item.id+'-academic';
  supplement.innerHTML=pair('概念与方法补充','Concepts and methods','h3')+labels.map((l,i)=>`<section>${pair(...l,'h4')}${pair(item.zh[i],item.en[i])}</section>`).join('')+
   `<footer>${pair('参考资料','References','h4')}<ul>${item.refs.map(k=>{const s=data.sources[k];return `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a></li>`}).join('')}</ul></footer>`;
  panel.append(supplement);
  const readingNav=section.querySelector('.section-reading-nav');if(readingNav){const button=document.createElement('button');button.type='button';button.innerHTML=pair('概念与方法补充','Concepts and methods','span');button.onclick=()=>{section.querySelector('.tab-btn[data-tab="explain"]')?.click();supplement.setAttribute('tabindex','-1');supplement.focus({preventScroll:true});supplement.scrollIntoView({block:'start',behavior:'auto'});};readingNav.append(button);}
  if(item.correction){const notice=document.createElement('aside');notice.className='academic-clarification';notice.innerHTML=pair('概念辨析','Concept clarification','strong')+pair(...item.correction)+`<a href="#${supplement.id}">${pair('查看详细说明与依据','Read the explanation and sources','span')}</a>`;
   notice.querySelector('a').addEventListener('click',e=>{e.preventDefault();supplement.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});panel.prepend(notice);}
 }
 const chapter=document.querySelector('.chapter-content');if(chapter){
  const reading=document.createElement('details');reading.className='academic-reading-list';reading.innerHTML=`<summary>${pair('教材与延伸阅读','Books and further reading','span')}</summary>`+
   pair('教材用于建立系统框架；各节的概念辨析另列直接依据。以下为版本与阅读入口，不表示已经提供或转载教材全文。','Use books for a systematic framework and the section references for specific claims. These are edition details and reading links, not reproduced book texts.')+
   `<ul>${['chen','vad','card','timebook'].map(k=>{const s=data.sources[k];return `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${k==='chen'?pair(s.title,'Chen Wei, Zhao Ye, Zhang Song & Lu Aidong (2020). Introduction to Visualization. Higher Education Press. ISBN 9787040521825.','span'):esc(s.title)}</a></li>`}).join('')}</ul>`+
   pair('《可视化导论》入口为出版社书目信息；Munzner 提供作者目录与配套资源；时序可视化教材第二版提供开放获取章节。本站文字为结合课程重新组织的讲解与推导，教学示例不作为真实调查结论。','The Chinese textbook link provides publisher metadata; Munzner provides the author’s contents and companion resources; the second-edition time-visualization book offers open-access chapters. Site explanations and derivations are organized for this course; teaching examples are not empirical findings.');
  chapter.append(reading);
 }
 // Editorial headings are normalized in the reading view; archived source files remain intact.
 const headings=[...document.querySelectorAll('.tab-panel[data-panel="explain"] h3')];
 for(const h of headings){const t=h.textContent.trim();if(t.startsWith('你的原案例'))h.textContent=t.replace('你的原案例','课程案例');else if(t.startsWith('Your Original Case'))h.textContent=t.replace('Your Original Case','Course example');else if(/^(嵌入陈为教材理论|嵌入理论[：:]?|理论补丁[：:]?)/.test(t))h.textContent=t.replace(/^(嵌入陈为教材理论|嵌入理论[：:]?|理论补丁[：:]?)/,'理论说明：');else if(/^(Embedded Theory|Embedding Chen Wei.s Textbook Theory|Theory Patch)/.test(t))h.textContent=t.replace(/^(Embedding Chen Wei.s Textbook Theory|Embedded Theory|Theory Patch)[:：]?/,'Conceptual explanation:');}
 window.__i18n?.apply();
})();
