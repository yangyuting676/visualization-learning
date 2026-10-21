/* Decorative artwork is separate from teaching charts and hidden from assistive technology. */
(()=>{
 const root=new URL('../',document.currentScript.src);
 function homeArt(){const heading=document.querySelector('.home-heading');if(!heading||heading.querySelector('.home-art'))return;const art=document.createElement('div');art.className='home-art';art.setAttribute('aria-hidden','true');const img=document.createElement('img');img.src=new URL('assets/data-figures/hero-atlas.svg',root).href;img.alt='Gapminder historical data';img.setAttribute('data-real-figure','');img.width=480;img.height=300;img.decoding='async';art.append(img);heading.append(art);}
 const main=document.querySelector('#main');if(main){homeArt();new MutationObserver(homeArt).observe(main,{childList:true});}
 const header=document.querySelector('.lesson-reading-layout .lesson-header');if(!header)return;
 const id=Number(location.pathname.match(/lesson-0([1-5])/)[1]);
 const marks={
  1:'<path d="M12 76h110"/><g fill="currentColor" stroke="none"><rect x="22" y="46" width="13" height="30" rx="3" opacity=".45"/><rect x="44" y="27" width="13" height="49" rx="3" opacity=".7"/><rect x="66" y="12" width="13" height="64" rx="3"/><rect x="88" y="37" width="13" height="39" rx="3" opacity=".6"/></g>',
  2:'<path d="M66 18v20M26 61V38h80v23M66 38v23"/><g fill="currentColor" stroke="none"><rect x="56" y="7" width="20" height="16" rx="4"/><rect x="16" y="61" width="20" height="16" rx="4"/><rect x="56" y="61" width="20" height="16" rx="4"/><rect x="96" y="61" width="20" height="16" rx="4"/></g>',
  3:'<g stroke="none"><rect x="20" y="13" width="25" height="25" rx="5" fill="#4a759f"/><rect x="53" y="13" width="25" height="25" rx="5" fill="#4f8f82"/><rect x="86" y="13" width="25" height="25" rx="5" fill="#b18452"/><rect x="20" y="46" width="25" height="25" rx="5" fill="#4a759f" opacity=".4"/><rect x="53" y="46" width="25" height="25" rx="5" fill="#4f8f82" opacity=".4"/><rect x="86" y="46" width="25" height="25" rx="5" fill="#b18452" opacity=".4"/></g>',
  4:'<path d="M12 76h110M17 68c14-1 15-45 30-35s19 36 31 10 17-39 35-31"/><g fill="white"><circle cx="29" cy="52" r="4"/><circle cx="48" cy="36" r="4"/><circle cx="70" cy="53" r="4"/><circle cx="95" cy="18" r="4"/></g>',
  5:Array.from({length:28},(_,k)=>`<rect x="${17+k%7*14}" y="${12+Math.floor(k/7)*17}" width="10" height="12" rx="2" fill="currentColor" stroke="none" opacity="${[.22,.45,.72,.95][(k*3+k%5)%4]}"/>`).join('')
 };
 const emblem=document.createElement('div');emblem.className='chapter-emblem';emblem.setAttribute('aria-hidden','true');emblem.innerHTML=`<svg viewBox="0 0 132 88" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${marks[id]}</svg>`;header.append(emblem);
})();
