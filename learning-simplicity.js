/* Keep the original lecture first; consolidate optional end-of-section support. */
(()=>{
 document.querySelectorAll('.chapter').forEach(section=>{
  const guide=section.querySelector('.beginner-guide'),body=guide?.querySelector('.guide-body');if(!body)return;
  guide.querySelector(':scope>summary').textContent='本节巩固';
  const review=document.createElement('details');review.className='optional-learning-review';review.innerHTML='<summary>概念回顾、示例与知识联系</summary><div></div>';const content=review.querySelector('div');
  for(const selector of ['.section-keypoint','.knowledge-links']){const node=body.querySelector(selector);if(node)content.append(node);}
  const dl=body.querySelector(':scope>dl');if(dl){const example=document.createElement('section');example.className='review-example';const title=document.createElement('h3');title.textContent='示例分析';const p=document.createElement('p');p.textContent=dl.querySelector('dd')?.textContent||'';example.append(title,p);content.append(example);dl.remove();}
  body.querySelector(':scope>.scaffold-intro')?.remove();body.querySelector(':scope>.scaffold-hints')?.remove();
  for(const selector of ['.guide-terms','.guide-original','.guide-save-status','.source-clarification']){const node=body.querySelector(selector);if(node)content.append(node);}
  body.prepend(review);
  const demo=body.querySelector('.guide-demo');if(demo)demo.textContent='操作演示与分层提示';
  const repair=body.querySelector('.repair-path>summary');if(repair)repair.textContent='答错后：复习与同类练习';
 });
})();
