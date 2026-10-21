/* Real-data SVGs computed from the shipped Gapminder historical excerpt. */
(()=>{
 const root=new URL('../',document.currentScript.src);
 const source=n=>new URL(`assets/data-figures/chapter-0${n}.svg?v=47`,root).href;
 function picture(n,className){const img=document.createElement('img');img.src=source(n);img.alt='Gapminder公开历史数据图';img.setAttribute('data-real-figure','');img.width=720;img.height=320;img.decoding='async';img.className=className;return img}
 function update(){
  document.querySelectorAll('.chapter-overview>a').forEach(card=>{if(card.dataset.chapterVisual)return;const n=Number(card.getAttribute('href')?.match(/lesson-0([1-5])/ )?.[1]);if(!n)return;const slot=card.querySelector('.chapter-art');if(slot){slot.replaceChildren(picture(n,'chapter-preview'));card.dataset.chapterVisual='35'}});
  document.querySelectorAll('.catalog-card').forEach(card=>{if(card.dataset.chapterVisual)return;const entry=card.querySelector('.catalog-entry'),n=Number(entry?.getAttribute('href').match(/lesson-0([1-5])/)?.[1]);if(!n)return;const visual=document.createElement('div');visual.className='catalog-visual';visual.append(picture(n,'chapter-preview'));entry.before(visual);card.dataset.chapterVisual='35'});
 }
 update();const main=document.querySelector('#main');if(main)new MutationObserver(update).observe(main,{childList:true});
 const header=document.querySelector('.lesson-header');const n=Number(location.pathname.match(/lesson-0([1-5])/)?.[1]);if(header&&n){header.classList.add('with-chapter-visual');header.querySelector('.chapter-emblem')?.remove();header.append(picture(n,'chapter-header-visual'))}
})();
