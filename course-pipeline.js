/* The displayed record count, aggregation and bound marks share the same year slice. */
window.CoursePipeline=(()=>{'use strict';
 const pageSize=10;
 function view({rows,s,aggregate,rawTable,table,bars,t,gn,num,esc,select,numeric,options}){
  const all=rows.slice().sort((a,b)=>a.country.localeCompare(b.country)),a=aggregate(),count=all.length;
  const stages=[['raw',t(`原始记录 ${count}行`,`Source records: ${count} rows`)],['aggregate',t(`按洲聚合 ${a.length}行`,`Group by continent: ${a.length} rows`)],['view',t(`视觉映射 ${a.length}个条形`,`Visual mapping: ${a.length} bars`)]];
  const page=Math.min(Math.max(0,s.page),Math.ceil(count/pageSize)-1),start=page*pageSize,end=Math.min(count,start+pageSize),pages=Math.ceil(count/pageSize);
  const steps=`<nav class="course-lab-pipeline pipeline-controls" aria-label="${t('数据处理阶段','Data processing stages')}">${stages.map(([id,label],i)=>`<button type="button" data-pipeline-stage="${id}" ${id===s.stage?'aria-current="step"':''} aria-pressed="${id===s.stage}" class="${id===s.stage?'active':''}"><span>${i+1}. ${esc(label)}</span><small>${s.seen&(1<<i)?t('已查看','Viewed'):t('待查看','Not viewed')}</small></button>${i<2?'<b aria-hidden="true">→</b>':''}`).join('')}</nav>`;
  const pager=`<div class="pipeline-pagination" role="group" aria-label="${t('原始记录分页','Source record pagination')}"><span role="status">${t(`第 ${start+1}—${end} 条 / 共 ${count} 条；第 ${page+1}/${pages} 页`,`Rows ${start+1}–${end} of ${count}; page ${page+1}/${pages}`)}</span><div><button type="button" class="button" data-pipeline-page="${page-1}" ${page===0?'disabled':''}>${t('上一页','Previous page')}</button><button type="button" class="button" data-pipeline-page="${page+1}" ${page>=pages-1?'disabled':''}>${t('下一页','Next page')}</button></div></div>`;
  const sums=a.map(d=>({ ...d,sum:all.filter(x=>x.continent===d.group).reduce((n,x)=>n+x.lifeExp,0)}));
  const grouped=table([[t('洲 分组键','Continent / group key'),t('国家/地区数 n','Countries/areas n'),t('寿命合计 / 年','Sum of life expectancy / years'),t('国家等权均值 / 年','Equal-country mean / years')],...sums.map(d=>[gn(d.group),d.n,num(d.sum,3),num(d.value,3)])]);
  let content,readout;
  if(s.stage==='raw'){
   content=`<h3 class="pipeline-stage-title">${t(`2007年原始记录 共${count}行`,`Source records in 2007: ${count} rows`)}</h3><p class="pipeline-context">${t('完整数据已按2007年筛选，每行代表一个国家/地区；分页只影响显示，不截断参与计算的数据。','The full dataset is filtered to 2007; each row is a country/area. Pagination affects display only and never truncates calculation inputs.')}</p>${pager}<div class="pipeline-main-table">${rawTable(all.slice(start,end))}</div>`;
   readout=t(`当前查看${count}条年度记录中的${end-start}条，可翻页读取全部记录。下一阶段按continent分组，对每组lifeExp求算术平均。`,`Showing ${end-start} of ${count} annual records; all records are available through pagination. Next, group by continent and take the arithmetic mean of lifeExp in each group.`);
  }else if(s.stage==='aggregate'){
   content=`<h3 class="pipeline-stage-title">${t(`${count}条国家记录 → ${a.length}条洲级汇总记录`,`${count} country records → ${a.length} continental summary rows`)}</h3><p class="pipeline-context">${t('分组键为洲，输出指标为国家等权寿命均值：Σ国家寿命 ÷ 国家数。人口列不参与加权。','Group by continent and compute equal-country mean life expectancy: sum of country life expectancy ÷ country count. Population is not used as a weight.')}</p><div class="pipeline-main-table">${grouped}</div><p class="pipeline-count-check">${t('分组数量核对：','Group-count check: ')}${a.map(d=>d.n).join(' + ')} = ${count}。${t('汇总使用全部年度记录。','All annual records are included.')}</p>`;
   readout=t('聚合后每行代表一个洲，不再代表一个国家。表格保留三位小数；均值由原始精度计算，不能从组均值恢复每个国家的数值。','After aggregation each row represents a continent, not a country. Values are displayed to three decimals but computed at source precision. Group means do not recover individual country values.');
  }else{
   content=`<h3 class="pipeline-stage-title">${t(`${a.length}条汇总记录 → ${a.length}个条形`,`${a.length} summary rows → ${a.length} bars`)}</h3><p class="pipeline-context">${t('一条洲级汇总记录绑定一个条形。横向长度编码均值，纵向位置和颜色区分洲，横轴从零开始。','Each continental summary row binds one bar. Length encodes the mean; vertical position and color identify continent. The horizontal axis starts at zero.')}</p><div class="pipeline-bound-bars">${bars(a)}</div>`;
   readout=t('这里显示国家等权均值，不是人口加权结果，也不是官方洲级生命表指标。条形标签显示一位小数，与汇总表使用相同的原始精度结果。','These are equal-country means, not population-weighted results or official continental life-table indicators. Bar labels show one decimal from the same full-precision results used in the summary table.');
  }
  return {controls:select('stage',t('观察流程阶段','Inspect a pipeline stage'),stages.map(([k,v])=>[k,v,v]),s.stage),figure:steps+content,readout,
   data:`<p>${t(`以下为2007年全部${count}条原始记录，未聚合。主区域分页不会改变这些输入。`,`All ${count} source records from 2007 are shown below, before aggregation. Pagination in the main view never changes these inputs.`)}</p>${rawTable(all)}`,
   task:t('依次查看三阶段，停在视觉映射阶段。填写最终条形数量，并判断仅凭洲级均值能否推断每个国家的数值。','Inspect all stages and finish at visual mapping. Enter the number of bars and decide whether continental means determine individual country values.'),
   input:numeric(t('最终条形数量','Final number of bars'),s.answer)+options('inference',t('洲级均值能否确定每个国家的数值？','Do continental means determine each country’s value?'),s.inference),hints:t('行数变化发生在分组聚合阶段。先核对各组国家数量之和，再核对一条汇总记录是否绑定一个条形。分页不是数据过滤，不能只使用当前页计算均值。','Row counts change during grouping and aggregation. Check the sum of group sizes, then one summary row per bar. Pagination is not data filtering: never calculate means from only the visible page.'),explain:t('区分年度筛选、显示分页、分组聚合和视觉映射。聚合表的粒度变为洲，因此无法仅凭洲均值恢复国家层面的差异。','Distinguish year filtering, display pagination, grouping, and visual mapping. Aggregate rows represent continents, so their means cannot recover differences between countries.')};
 }
 function bind({root,state,change}){
  root.querySelectorAll('[data-pipeline-stage]').forEach(b=>b.onclick=()=>change('stage',b.dataset.pipelineStage,`[data-pipeline-stage="${b.dataset.pipelineStage}"]`));
  root.querySelectorAll('[data-pipeline-page]').forEach(b=>b.onclick=()=>change('page',+b.dataset.pipelinePage,'.pipeline-pagination'));
 }
 return {view,bind,pageSize};
})();
