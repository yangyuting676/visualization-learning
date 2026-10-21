/* Course color experiment: fixed domains, CIELAB interpolation and empirical quintiles. */
window.CourseColor=(()=>{'use strict';
 const groups=['Africa','Americas','Asia','Europe','Oceania'],colors=['#527ca1','#4f9389','#b28b55','#8babc4','#316f70'];
 const clamp=x=>Math.max(0,Math.min(1,x));
 const seq=d3.interpolateLab('#e4efed','#2b706b');
 const low=d3.interpolateLab('#46789f','#f3f5f4'),high=d3.interpolateLab('#f3f5f4','#a7793e');
 const diverge=x=>x<=.5?low(x*2):high((x-.5)*2);
 function model(rows,s){
  const numeric=s.measure!=='continent',domain=s.measure==='deviation'?[-35,35]:[35,85];
  const value=d=>s.measure==='continent'?groups.indexOf(d.continent):s.measure==='deviation'?d.lifeExp-70:d.lifeExp;
  const values=numeric?rows.map(value).sort(d3.ascending):[];
  const q=d3.scaleQuantile(values,[0,1,2,3,4]);
  const thresholds=q.quantiles();
  const quantile=numeric&&s.palette==='seq'&&s.mapping==='quantile';
  function rgb(v){
   if(s.palette==='cat')return colors[numeric?q(v):v];
   const u=numeric?clamp((v-domain[0])/(domain[1]-domain[0])):v/4;
   if(s.palette==='seq')return d3.color(seq(quantile?q(v)/4:u)).formatHex();
   return d3.color(diverge(u)).formatHex();
  }
  const shown=v=>s.gray?d3.lab(d3.lab(rgb(v)).l,0,0).formatHex():rgb(v);
  return {numeric,domain,value,thresholds,quantile,rgb,shown,bin:v=>numeric?q(v):v,lightness:v=>d3.lab(rgb(v)).l};
 }
 return {model,view:options=>CourseColorAnalysis.view(options),bind:options=>CourseColorAnalysis.bind(options)};
})();
