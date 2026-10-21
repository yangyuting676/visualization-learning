/* Adds shared progress and section notes without replacing original demos. */
(() => {
 const chapter=Number(location.pathname.match(/lesson-0([1-5])/)[1]);
 const nav=[...document.querySelectorAll('.chapter-nav a[data-chapter]')];
 const S=VisStore;
 let current='';
 const header=document.querySelector('.lesson-header');
 const bar=document.createElement('div');bar.className='learning-tools';bar.innerHTML='<span class="tool-topic" id="tool-topic"></span><a class="tool-back" href="../index.html#courses">课程目录</a><button type="button" id="learn-done"></button><button type="button" id="learn-notes" aria-expanded="false" aria-controls="learning-notes">本节笔记</button><a href="../index.html#review">知识自测 ↗</a>';
 const notes=document.createElement('section');notes.className='learning-notes';notes.id='learning-notes';notes.innerHTML='<label for="learn-note-text">本节学习笔记</label><textarea id="learn-note-text" maxlength="30000" placeholder="用自己的话解释本节概念，记录实验观察和疑问。"></textarea><p id="learn-note-status" role="status">自动保存至当前浏览器</p><a href="../index.html#notes">整理笔记与备份记录 ↗</a>';
 header.after(bar,notes);
 document.querySelectorAll('.chapter').forEach(section=>{const title=section.querySelector('h2');if(title){const goals=document.createElement('div');goals.className='learn-goals';goals.textContent='学习建议：读懂讲解，查看关键代码，再改变演示参数验证理解。完成后手动记录进度。';title.after(goals);}});
 function id(){return nav.some(a=>a.dataset.chapter===location.hash.slice(1))?location.hash.slice(1):nav[0].dataset.chapter;}
 function update(forcedId){const next=typeof forcedId==='string'?forcedId:id();if(current!==next){current=next;S.visit(current);notes.querySelector('textarea').value=S.get().notes[current]||'';document.querySelector('#learn-note-status').textContent=S.available()?'自动保存至当前浏览器':'浏览器存储不可用，请到笔记页导出记录';}const done=S.get().done.includes(current);document.querySelector('#learn-done').textContent=done?'已阅读 ✓ · 撤销':'标记本节已阅读';document.querySelector('#learn-done').classList.toggle('done',done);document.querySelector('#learn-done').setAttribute('aria-pressed',done);document.querySelector('#tool-topic').textContent=nav.find(a=>a.dataset.chapter===current)?.textContent||'本节学习';nav.forEach(a=>a.classList.toggle('learn-section-done',S.get().done.includes(a.dataset.chapter)));}
 document.querySelector('#learn-done').onclick=()=>{const ok=S.toggle(current);update();window.dispatchEvent(new Event('vis-reading-refresh'));if(!ok)document.querySelector('#learn-note-status').textContent='阅读记录未保存，请导出备份';};
 document.querySelector('#learn-notes').onclick=e=>{const open=notes.classList.toggle('open');e.target.setAttribute('aria-expanded',open);if(open)notes.querySelector('textarea').focus();};
 notes.querySelector('textarea').oninput=e=>{const ok=S.note(current,e.target.value);document.querySelector('#learn-note-status').textContent=ok?'已自动保存 · '+new Date().toLocaleTimeString('zh-CN'):'存储失败，请立即到笔记页导出备份';};
 nav.forEach(a=>a.addEventListener('click',()=>update(a.dataset.chapter)));
 window.addEventListener('hashchange',update);window.addEventListener('pageshow',update);window.addEventListener('vis-external-state',()=>{update();const editor=notes.querySelector('textarea');if(document.activeElement!==editor)editor.value=S.get().notes[current]||'';});update();
})();
