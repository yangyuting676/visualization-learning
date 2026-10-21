/* Original course identity and locally generated visualization previews. */
(()=>{
 const base=new URL('../',document.currentScript.src);
 const image=n=>new URL('assets/'+n,base).href;
 const entries=[
  ['data-figures/chapter-01.svg','人口层级','按洲组织142个国家/地区，比较人口构成。','data-atlas.html#figure-1','Population hierarchy','Group 142 countries by continent and compare populations.'],
  ['data-figures/chapter-04.svg','经济与寿命','气泡、密度等值线与边际分布联合表达。','data-atlas.html#figure-4','Economy and longevity','Read bubbles, density contours and marginal distributions together.'],
  ['data-figures/chapter-05.svg','长期变化','比较1952—2007年各国寿命轨迹。','data-atlas.html#figure-5','Long-term change','Compare country life-expectancy trajectories from 1952 to 2007.']
 ];
 function home(){const heading=document.querySelector('.home-heading');if(!heading||heading.dataset.courseBrand)return;heading.dataset.courseBrand='25';heading.closest('.home-overview').classList.add('home-branded');heading.querySelector('.home-art')?.remove();
  const h1=heading.querySelector('h1');h1.textContent='可视化导论';const signature=document.createElement('div');signature.className='course-signature';signature.innerHTML=`<img src="${image('course-logo-mark.svg')}" width="76" height="76" alt=""><div class="course-wordmark"></div>`;h1.before(signature);signature.querySelector('.course-wordmark').append(h1);const subtitle=document.createElement('p');subtitle.className='course-brand-subtitle';subtitle.textContent='Visualization';h1.after(subtitle);
  const art=document.createElement('div');art.className='course-tech-art';art.innerHTML=`<img src="${image('data-figures/hero-atlas.svg')}" width="720" height="720" alt="Gapminder人口层级图" data-real-figure decoding="async">`;heading.querySelector('.home-progress').before(art);
  const gallery=document.createElement('section');gallery.className='course-visual-gallery';gallery.setAttribute('aria-labelledby','visual-gallery-title');gallery.innerHTML=`<div class="visual-gallery-heading"><h2 id="visual-gallery-title">从图形认识可视化</h2></div><div class="visual-gallery-grid">${entries.map(([src,title,desc,href,enTitle,enDesc])=>`<a href="${new URL(href,base).href}"><figure><img src="${image(src)}" width="560" height="250" alt="${title} · Gapminder公开历史数据" data-real-figure><figcaption><h3><span data-lang="zh-CN">${title}</span><span data-lang="en-US" hidden>${enTitle}</span></h3><p data-lang="zh-CN">${desc}</p><p data-lang="en-US" hidden>${enDesc}</p><span aria-hidden="true">↗</span></figcaption></figure></a>`).join('')}</div>`;heading.after(gallery);window.__i18n?.apply();
 }
 const main=document.querySelector('#main');if(main){home();new MutationObserver(home).observe(main,{childList:true});}
 const back=document.querySelector('.course-topbar>a.brand');if(back&&!back.querySelector('.course-brand-mark')){const mark=document.createElement('img');mark.className='course-brand-mark';mark.src=image('course-logo-mark.svg');mark.alt='';mark.width=30;mark.height=30;back.prepend(mark);}
})();
