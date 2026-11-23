(function(){
var NS="http://www.w3.org/2000/svg";
function mk(t,a,p,x){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);if(x!=null)e.textContent=x;if(p)p.appendChild(e);return e}
function fmt(n){return String(n).replace(/\B(?=(\d{3})+$)/g,',')}
var host={};
function svgIn(id,w,h,label){var d=document.getElementById(id);return mk('svg',{viewBox:'0 0 '+w+' '+h,role:'img','aria-label':label},d)}
function hatch(defs,id,col){var p=mk('pattern',{id:id,width:7,height:7,patternUnits:'userSpaceOnUse',patternTransform:'rotate(45)'},defs);
  mk('rect',{width:7,height:7,style:'fill:var(--gap)'},p);mk('rect',{width:3.4,height:7,style:'fill:var('+col+')'},p)}

/* generic stacked columns: labels, series [{n,c,v[]}], provisional index set */
function stacked(id,uid,W,H,labels,series,prov,aria,opts){
  opts=opts||{};
  if(opts.pct){var tt=labels.map(function(_,j){return series.reduce(function(a,s){return a+(s.v[j]||0)},0)});series=series.map(function(s){return {n:s.n,c:s.c,v:s.v.map(function(v,j){return 100*v/tt[j]})}})}
  var svg=svgIn(id,W,H,aria),defs=mk('defs',{},svg);
  series.forEach(function(s,i){hatch(defs,uid+'h'+i,s.c)});
  var L=opts.pct?40:34,R=8,T=opts.legendRows?opts.legendRows*22+14:14,B=opts.note?58:34,pw=W-L-R,ph=H-T-B;
  var tot=labels.map(function(_,j){return series.reduce(function(a,s){return a+(s.v[j]||0)},0)});
  var mx=Math.round(Math.max.apply(null,tot)*1e4)/1e4,top=Math.ceil(mx/(opts.step||200))*(opts.step||200),k=ph/top;
  for(var g=0;g<=top;g+=(opts.step||200)){var y=T+ph-g*k;
    mk('line',{x1:L,x2:W-R,y1:y,y2:y,style:'stroke:var(--line);stroke-width:'+(g?1:1.5)},svg);
    mk('text',{x:L-6,y:y+4,'text-anchor':'end','font-size':11,'class':'tm'},svg,fmt(g)+(opts.pct?'%':''))}
  var n=labels.length,bw=pw/n,w=bw*.66;
  labels.forEach(function(lab,j){
    var x=L+j*bw+(bw-w)/2,y=T+ph;
    series.forEach(function(s,i){var v=s.v[j]||0;if(!v)return;var h=v*k;y-=h;
      var st=prov.indexOf(j)>=0?'fill:url(#'+uid+'h'+i+');stroke:var('+s.c+');stroke-width:1.5':'fill:var('+s.c+');stroke:var(--gap);stroke-width:.8';
      mk('rect',{x:x,y:y,width:w,height:Math.max(h,.6),rx:1.5,style:st+';--d:'+(j*.09+i*.03).toFixed(2)+'s','data-k':i,'class':'bar grow'},svg)});
    if(!opts.pct)mk('text',{x:x+w/2,y:y-6,'text-anchor':'middle','font-size':12.5,'font-weight':700,'class':'t fade',style:'--d:'+(j*.09+.5).toFixed(2)+'s'},svg,fmt(tot[j])+(prov.indexOf(j)>=0?'*':''));
    mk('text',{x:x+w/2,y:T+ph+20,'text-anchor':'middle','font-size':13,'class':'tm'},svg,lab+(opts.pct&&prov.indexOf(j)>=0?'*':''))});
  if(opts.note)mk('text',{x:L,y:H-8,'font-size':12,'class':'tm'},svg,opts.note);
  /* legend */
  var lx=L,ly=10,perRow=opts.perRow||3,cw=(pw)/perRow;
  series.forEach(function(s,i){var cx=L+(i%perRow)*cw,cy=ly+Math.floor(i/perRow)*22;
    var gl=mk('g',{'data-k':i,'class':'bar'},svg);
    mk('rect',{x:cx,y:cy-9,width:13,height:11,rx:2,style:'fill:var('+s.c+')'},gl);mk('text',{x:cx+19,y:cy,'font-size':12.5,'class':'tm'},gl,s.n)});
  return svg}

/* Fig 1: participants by role (values read from workbook chart) */
(function(){
  var Y=['2021','2022','2023','2024','2025','2026'];
  stacked('f1','a',560,420,Y,[
    {n:'Students',c:'--s2',v:[75,171,293,404,553,508]},
    {n:'Staff',c:'--s4',v:[25,106,262,347,590,631]},
    {n:'Role unknown',c:'--s3',v:[2,31,34,32,127,112]}],[5],
    'Stacked bars of engagements per year by participant role. 2021: 102. 2022: 308. 2023: 589. 2024: 783. 2025: 1,270. 2026: 1,251, provisional.',{legendRows:1,perRow:3});
})();

/* Fig 2: engagements by school, share of records with a recorded School */
(function(){
  stacked('f2','b',560,440,['2021','2022','2023','2024','2025','2026'],[
    {n:'Clinical Medicine',c:'--s1',v:[12,98,149,196,280,207]},
    {n:'Biological Sciences',c:'--s2',v:[17,66,115,117,218,164]},
    {n:'Physical Sciences',c:'--s3',v:[34,72,115,152,181,179]},
    {n:'Technology',c:'--s4',v:[36,38,133,145,293,231]},
    {n:'Humanities and Social Sciences',c:'--s5',v:[3,17,28,66,55,55]},
    {n:'Arts and Humanities',c:'--s6',v:[0,17,19,62,57,75]}],[5],
    'Stacked bars showing the share of engagement records by University School for each year from 2021 to 2026. Clinical Medicine rises from 12% in 2021 to around a quarter of records from 2022. 2026 covers January to November and is provisional.',
    {legendRows:3,perRow:2,step:20,pct:true,note:'Share of records with a School recorded. * 2026 covers January to November; provisional.'});
})();

/* Fig 3: categories by year */
(function(){
  var Y=['2021','2022','2023','2024','2025','2026'];
  stacked('f3','b',560,420,Y,[
    {n:'Training courses',c:'--s1',v:[0,239,221,75,64,73]},
    {n:'Workshops',c:'--s2',v:[0,0,8,272,677,570]},
    {n:'Summits and events',c:'--s3',v:[0,0,203,129,291,506]},
    {n:'AI Clinic',c:'--s4',v:[0,0,0,115,105,61]},
    {n:'Funding applications',c:'--s5',v:[0,25,62,125,111,8]},
    {n:'Other',c:'--s6',v:[102,44,95,67,22,33]}],[5],
    'Stacked bars of engagements per year by category. Workshops grow from 8 in 2023 to 677 in 2025. Training courses fall from 239 in 2022 to about 70 a year.',{legendRows:2,perRow:3});
})();

/* Fig 4: AI Clinic by quarter */
(function(){
  var M={'2024-01':12,'2024-02':9,'2024-03':3,'2024-04':8,'2024-05':7,'2024-06':5,'2024-07':5,'2024-08':6,'2024-09':30,'2024-10':15,'2024-11':13,'2024-12':2,'2025-01':20,'2025-02':7,'2025-03':2,'2025-04':7,'2025-05':8,'2025-06':6,'2025-07':12,'2025-08':12,'2025-09':9,'2025-10':12,'2025-11':6,'2025-12':4,'2026-01':4,'2026-02':8,'2026-03':6,'2026-04':0,'2026-05':5,'2026-06':7,'2026-07':4,'2026-08':0,'2026-09':4,'2026-10':8,'2026-11':15};
  var Q={},qs=[];Object.keys(M).forEach(function(m){var q=m.slice(0,4)+'-Q'+Math.ceil(+m.slice(5)/3);if(!(q in Q)){Q[q]=0;qs.push(q)}Q[q]+=M[m]});
  var W=560,H=352,L=34,T=24,B=70,pw=W-L-6,ph=H-T-B,top=50,k=ph/top,bw=pw/qs.length;
  var svg=svgIn('f4',W,H,'Bar chart of AI Clinic engagements per quarter from Q1 2024 to Q4 2026. Peak of 41 in Q3 2024. Q4 2026 covers October and November only.'),defs=mk('defs',{},svg);hatch(defs,'c0','--s2');
  [0,10,20,30,40,50].forEach(function(g){var y=T+ph-g*k;mk('line',{x1:L,x2:W-6,y1:y,y2:y,style:'stroke:var(--line);stroke-width:'+(g?1:1.5)},svg);mk('text',{x:L-6,y:y+4,'text-anchor':'end','font-size':11,'class':'tm'},svg,String(g))});
  qs.forEach(function(q,i){var v=Q[q],h=v*k,x=L+i*bw+bw*.16,w=bw*.68,pv=(i==qs.length-1);
    mk('rect',{x:x,y:T+ph-h,width:w,height:h,rx:2,'class':'grow',style:(pv?'fill:url(#c0);stroke:var(--s2);stroke-width:1.2':'fill:var(--s2)')+';--d:'+(i*.05).toFixed(2)+'s'},svg);
    mk('text',{x:x+w/2,y:T+ph-h-5,'text-anchor':'middle','font-size':12,'font-weight':700,'class':'t'},svg,String(v)+(pv?'*':''));
    mk('text',{x:x+w/2,y:T+ph+16,'text-anchor':'middle','font-size':11,'class':'tm'},svg,q.slice(5));
    if(q.slice(5)=='Q1')mk('text',{x:x,y:T+ph+33,'font-size':12,'class':'tm'},svg,q.slice(0,4))});
  mk('text',{x:L,y:H-4,'font-size':12,'class':'tm'},svg,'* Q4 2026 covers October to November; provisional.');
})();

/* Fig 5: clinic issue types */
(function(){
  var R=[['Conceptual',34.8,34.7,4.2],['Model implementation',44.9,9.3,8.3],['LLM',30.4,17.3,16.7],['Hardware / GPU',15.9,6.7,29.2],['Grant',null,12.0,8.3],['Evaluation',8.7,5.3,null],['Data pipeline',5.8,6.7,4.2],['Diffusion',4.3,6.7,null],['Data collection',1.4,6.7,8.3]];
  var W=560,H=450,L=158,T=34,rh=40,bh=10,pw=W-L-34,k=pw/48,svg=svgIn('f5',W,H,'Grouped horizontal bars of the share of coded AI Clinic tickets by issue type for 2024, 2025 and 2026 to date. Model implementation falls from 45% in 2024 to 9% in 2025. Hardware and GPU rises to 29% in 2026.'),defs=mk('defs',{},svg);hatch(defs,'d2','--s1');
  var C=['--s3','--s2','--s1'],N=['2024','2025','2026 to date*'];
  N.forEach(function(n,i){var x=L+i*116;mk('rect',{x:x,y:4,width:13,height:11,rx:2,style:i==2?'fill:url(#d2);stroke:var(--s1);stroke-width:1.2':'fill:var('+C[i]+')'},svg);mk('text',{x:x+19,y:14,'font-size':12.5,'class':'tm'},svg,n)});
  [0,10,20,30,40].forEach(function(g){var x=L+g*k;mk('line',{x1:x,x2:x,y1:T,y2:T+R.length*rh,style:'stroke:var(--line);stroke-width:1'},svg);mk('text',{x:x,y:T+R.length*rh+16,'text-anchor':'middle','font-size':11,'class':'tm'},svg,g+'%')});
  R.forEach(function(r,i){var y0=T+i*rh,g=mk('g',{'data-k':i,'class':'bar'},svg);
    mk('text',{x:L-8,y:y0+rh/2+4,'text-anchor':'end','font-size':13.5,'font-weight':400,'class':'t'},g,r[0]);
    for(var j=1;j<4;j++){var v=r[j];if(v==null)continue;var y=y0+5+(j-1)*(bh+2.2);
      mk('rect',{x:L,y:y,width:v*k,height:bh,rx:1.5,'class':'growx',style:(j==3?'fill:url(#d2);stroke:var(--s1);stroke-width:1.2':'fill:var('+C[j-1]+')')+';--d:'+(i*.07+(j-1)*.05).toFixed(2)+'s'},g);
      mk('text',{x:L+v*k+5,y:y+10,'font-size':10.5,'font-weight':j==2?700:400,'class':j==2?'t':'tm'},g,Math.round(v)+'%')}});
  mk('text',{x:L,y:H-4,'font-size':12,'class':'tm'},svg,'* 2026 covers January to November; provisional.');
})();

/* Fig 6: approved projects by school and call year */
(function(){
  stacked('f6','e',560,310,['2022','2023','2024','2025'],[
    {n:'Clinical Medicine',c:'--s1',v:[1,3,5,6]},
    {n:'Biological Sciences',c:'--s2',v:[4,1,3,9]},
    {n:'Physical Sciences',c:'--s3',v:[2,3,3,4]},
    {n:'Technology',c:'--s4',v:[2,2,3,1]},
    {n:'Arts, humanities and social sciences',c:'--s5',v:[0,2,3,1]},
    {n:'Other / not recorded',c:'--s6',v:[0,0,2,0]}],[],
    'Stacked bars of approved funded projects by call year and School of the applicant. 2022: 9. 2023: 11. 2024: 19. 2025: 21.',{legendRows:3,perRow:2,step:5});
})();

/* ---- Sankey: cross-category transitions between consecutive distinct events ---- */
var CATS=['Training course or school','Workshop','Summit or event','AI Café','AI Clinic','Programme or residency','Community engagement','Seminar or self-study','Funding application'];
var LAB={'Training course or school':'Training course','Workshop':'Workshop','Summit or event':'Summit or event','AI Café':'AI Café','AI Clinic':'AI Clinic','Programme or residency':'Programme or residency','Community engagement':'Community engagement','Seminar or self-study':'Seminar or self-study','Funding application':'Funding application'};
var COL={'Training course or school':'#05385e','Workshop':'#5963f5','Summit or event':'#87e3c7','AI Café':'#8f97fa','AI Clinic':'#2f9e8a','Programme or residency':'#3b6a94','Community engagement':'#e0b8b0','Seminar or self-study':'#9aa7b8','Funding application':'#bfc2e3'};
var TR=[["Programme or residency", "Community engagement", 14], ["Community engagement", "Summit or event", 39], ["Programme or residency", "Training course or school", 77], ["Training course or school", "Summit or event", 67], ["Training course or school", "Workshop", 72], ["Training course or school", "AI Clinic", 21], ["AI Clinic", "Summit or event", 33], ["Summit or event", "Funding application", 27], ["Funding application", "Summit or event", 61], ["Summit or event", "Workshop", 92], ["Programme or residency", "Funding application", 4], ["Summit or event", "Training course or school", 14], ["Training course or school", "Community engagement", 13], ["Community engagement", "Training course or school", 7], ["Summit or event", "Community engagement", 19], ["Community engagement", "AI Clinic", 4], ["AI Clinic", "Workshop", 46], ["Workshop", "Training course or school", 35], ["Workshop", "AI Clinic", 48], ["AI Clinic", "Funding application", 31], ["Funding application", "Workshop", 50], ["Workshop", "Summit or event", 129], ["Programme or residency", "Workshop", 2], ["Community engagement", "Workshop", 8], ["Programme or residency", "Summit or event", 10], ["Training course or school", "Funding application", 17], ["Funding application", "Community engagement", 6], ["Funding application", "Training course or school", 6], ["Training course or school", "Programme or residency", 6], ["Summit or event", "AI Clinic", 23], ["AI Clinic", "Training course or school", 5], ["Summit or event", "AI Café", 2], ["AI Café", "Summit or event", 2], ["Workshop", "Funding application", 15], ["Funding application", "Seminar or self-study", 6], ["Seminar or self-study", "Summit or event", 17], ["Summit or event", "Seminar or self-study", 2], ["Seminar or self-study", "Workshop", 6], ["Workshop", "AI Café", 4], ["AI Café", "Workshop", 7], ["AI Clinic", "AI Café", 1], ["Summit or event", "Programme or residency", 1], ["Community engagement", "Seminar or self-study", 1], ["Training course or school", "Seminar or self-study", 2], ["Seminar or self-study", "AI Clinic", 2], ["AI Clinic", "Community engagement", 1], ["Workshop", "Community engagement", 4], ["Community engagement", "Funding application", 1], ["AI Café", "Training course or school", 1], ["Funding application", "AI Clinic", 14], ["Workshop", "Seminar or self-study", 6], ["Funding application", "AI Café", 2], ["AI Café", "AI Clinic", 4], ["AI Café", "Funding application", 1], ["AI Café", "Community engagement", 1], ["AI Clinic", "Seminar or self-study", 2]];
function relax(ys,gap,hi){var o=ys.slice(),i;for(i=1;i<o.length;i++)if(o[i]<o[i-1]+gap)o[i]=o[i-1]+gap;if(o[o.length-1]>hi){o[o.length-1]=hi;for(i=o.length-2;i>=0;i--)o[i]=Math.min(o[i],o[i+1]-gap)}return o}
var sk=document.getElementById('sk-host'),full=false,NT=0;TR.forEach(function(t){NT+=t[2]});
document.getElementById('sk-fn').textContent='Transitions between consecutive distinct engagements of the same person, across different categories only (n = '+fmt(NT)+'). Block heights are exact counts. Ribbons are approximate.';
function build(){
  sk.textContent='';
  var W=Math.max(300,sk.clientWidth||900),compact=W<560;
  var H0=compact?Math.round(W*1.3):Math.round(Math.min(Math.max(W*.5,440),full?Math.max(480,window.innerHeight-170):Math.max(520,window.innerHeight-170)));
  var top=30,gap=compact?4:6,nw=compact?10:16,pl=compact?4:220,pr=compact?4:220;
  var out={},inn={};CATS.forEach(function(c){out[c]=0;inn[c]=0});TR.forEach(function(t){out[t[0]]+=t[2];inn[t[1]]+=t[2]});
  var oc=CATS.slice().sort(function(a,b){return out[b]-out[a]}),ic=CATS.slice().sort(function(a,b){return inn[b]-inn[a]});
  var k=(H0-top-gap*(CATS.length-1))/NT;
  var ln={},rn={},y=0;
  oc.forEach(function(c){var h=Math.max(3,out[c]*k);ln[c]={y:y,h:h,o:0};y+=h+gap});
  y=0;ic.forEach(function(c){var h=Math.max(3,inn[c]*k);rn[c]={y:y,h:h,o:0};y+=h+gap});
  var H=Math.max(y,0)+top+4,x0=pl+nw,x1=W-pr-nw,xm=(x0+x1)/2;
  var svg=mk('svg',{viewBox:'0 0 '+W+' '+H,role:'img','aria-label':'Flow diagram of movement between engagement categories. '+fmt(NT)+' cross-category transitions. Workshops and summits are the most common destinations.'},sk);
  mk('text',{x:compact?4:pl,y:16,'font-size':13,'font-weight':700,'class':'t'},svg,'From');
  mk('text',{x:W-(compact?4:pr),y:16,'text-anchor':'end','font-size':13,'font-weight':700,'class':'t'},svg,'To');
  var rs=TR.slice().sort(function(a,b){return oc.indexOf(a[0])-oc.indexOf(b[0])||ic.indexOf(a[1])-ic.indexOf(b[1])});
  rs.forEach(function(t){t.a=ln[t[0]].y+ln[t[0]].o;ln[t[0]].o+=t[2]*k});
  TR.slice().sort(function(a,b){return ic.indexOf(a[1])-ic.indexOf(b[1])||oc.indexOf(a[0])-oc.indexOf(b[0])}).forEach(function(t){t.c=rn[t[1]].y+rn[t[1]].o;rn[t[1]].o+=t[2]*k});
  var gl=mk('g',{},svg);function ln0(t){return oc.indexOf(t[0])}
  rs.forEach(function(t){var a=t.a+top,b=a+t[2]*k,c=t.c+top,d=c+t[2]*k;
    mk('path',{d:'M'+x0+' '+a+'C'+xm+' '+a+' '+xm+' '+c+' '+x1+' '+c+'L'+x1+' '+d+'C'+xm+' '+d+' '+xm+' '+b+' '+x0+' '+b+'Z',fill:COL[t[0]],'fill-opacity':.34,stroke:COL[t[0]],'stroke-opacity':.55,'stroke-width':.6,'stroke-dasharray':'3 2','data-f':CATS.indexOf(t[0]),'data-t':CATS.indexOf(t[1]),'class':'bar rb',style:'--d:'+(.25+ln0(t)*.05).toFixed(2)+'s'},gl)});
  function nodes(order,nm,xx,anchor,dx,which){
    var ys=relax(order.map(function(c){return nm[c].y+top+nm[c].h/2+4}),15,H);
    order.forEach(function(c,i){var g=mk('g',{'data-n':CATS.indexOf(c),'data-w':which,'class':'bar nd',tabindex:0},svg);
      mk('rect',{x:xx,y:nm[c].y+top,width:nw,height:nm[c].h,rx:1.5,fill:COL[c]},g);
      if(!compact){var tx=mk('text',{x:xx+dx,y:ys[i],'text-anchor':anchor,'font-size':13.5,'class':'t'},g);
        tx.appendChild(document.createTextNode(LAB[c]+'  '));mk('tspan',{'class':'tm'},tx,String(which=='f'?out[c]:inn[c]))}})}
  if(compact){var kd=document.createElement('div');kd.className='sk-key';
    kd.innerHTML='<span></span><b>From</b><b>To</b>'+oc.map(function(c){return '<span><i style="background:'+COL[c]+'"></i>'+LAB[c]+'</span><span>'+out[c]+'</span><span>'+inn[c]+'</span>'}).join('');sk.appendChild(kd)}
  nodes(oc,ln,pl,'end',-10,'f');nodes(ic,rn,W-pr-nw,'start',nw+10,'t');
  /* hover / focus: highlight ribbons of a node */
  var rb=[].slice.call(svg.querySelectorAll('.rb')),nd=[].slice.call(svg.querySelectorAll('.nd'));
  /* ribbon hover: lift this path, dim the rest, show its count */
  var tip=document.createElement('div');tip.className='sk-tip';tip.hidden=true;sk.appendChild(tip);
  var hv=mk('path',{d:'','class':'hv'},svg);
  function ribOff(){hv.setAttribute('d','');tip.hidden=true;rb.forEach(function(r){r.style.opacity=''})}
  rb.forEach(function(r,i){var t=rs[i];
    r.addEventListener('mouseenter',function(){
      rb.forEach(function(o){o.style.opacity=o===r?'0':'.07'});
      hv.setAttribute('d',r.getAttribute('d'));hv.style.fill=COL[t[0]];hv.style.stroke=COL[t[0]];
      tip.innerHTML='<b>'+LAB[t[0]]+' → '+LAB[t[1]]+'</b><br>'+fmt(t[2])+' '+(t[2]==1?'person-transition':'transitions');tip.hidden=false});
    r.addEventListener('mousemove',function(e){var q=sk.getBoundingClientRect(),x=e.clientX-q.left+14,y=e.clientY-q.top+14;
      tip.style.left=Math.min(x,q.width-tip.offsetWidth-4)+'px';tip.style.top=y+'px'});
    r.addEventListener('mouseleave',ribOff)});
  function hl(n,w){rb.forEach(function(r){var on=n==null||(w=='f'?+r.getAttribute('data-f')===n:+r.getAttribute('data-t')===n);r.style.opacity=on?'':'.08'});}
  nd.forEach(function(g){var n=+g.getAttribute('data-n'),w=g.getAttribute('data-w');
    ['mouseenter','focus'].forEach(function(ev){g.addEventListener(ev,function(){hl(n,w)})});
    ['mouseleave','blur'].forEach(function(ev){g.addEventListener(ev,function(){hl(null)})})});
}
build();
(function(){
  var card=document.getElementById('sk-card'),btn=document.getElementById('sk-full');
  function set(v){full=v;card.classList.toggle('full',v);btn.textContent=v?'Close full screen':'View full screen';btn.setAttribute('aria-expanded',v);document.body.style.overflow=v?'hidden':'';if(v)card.scrollTop=0;build()}
  btn.addEventListener('click',function(){set(!full)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&full){set(false);btn.focus()}});
})();
var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(build,150)});



/* ---- entrance animation ---- */
var fws=[].slice.call(document.querySelectorAll('.fw')),skh=document.getElementById('sk-host');
fws.forEach(function(w){w.classList.add('aw')});skh.classList.add('aw');
function reveal(w){w.classList.remove('aw')}
function revealSk(){if(!skh.classList.contains('aw'))return;skh.classList.add('rv');skh.classList.remove('aw');setTimeout(function(){skh.classList.remove('rv')},2400)}
if('IntersectionObserver' in window){
  var vo=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
    if(e.target.classList.contains('vis')){var a=e.target.querySelector('.fw.act');if(a)reveal(a)}
    else if(e.target.id==='sk-card')revealSk();
    else reveal(e.target)})},{threshold:.25});
  [].forEach.call(document.querySelectorAll('.vis'),function(v){vo.observe(v)});
  fws.forEach(function(w){vo.observe(w)});
  vo.observe(document.getElementById('sk-card'));
}else{fws.forEach(reveal);revealSk()}

/* ---- scroll-linked steps ---- */
var mq=matchMedia('(max-width:820px)');
function apply(sc,i){
  var steps=sc.querySelectorAll('.step'),st=steps[i],fig=st.getAttribute('data-fig');
  [].forEach.call(steps,function(s,n){s.classList.toggle('on',n===i)});
  var f=st.dataset.focus||'all';
  [].forEach.call(sc.querySelectorAll('.fw'),function(w){
    var a=w.getAttribute('data-fig')===fig;w.classList.toggle('act',a);if(a)reveal(w);
    [].forEach.call(w.querySelectorAll('[data-k]'),function(el){el.classList.toggle('dim',a&&f!=='all'&&f.split(',').indexOf(el.getAttribute('data-k'))<0)})});
}
function clear(sc){
  [].forEach.call(sc.querySelectorAll('.step'),function(s){s.classList.remove('on')});
  [].forEach.call(sc.querySelectorAll('.dim'),function(el){el.classList.remove('dim')});
}
var scs=['sc1','sc2','sc3','sc4','sc5','sc6'].map(function(i){return document.getElementById(i)});
/* phone: each figure sits in the text flow just before its first paragraph */
function layout(){
  scs.forEach(function(sc){
    var vis=sc.querySelector('.vis'),steps=sc.querySelector('.steps');
    var fws=[].slice.call(sc.querySelectorAll('.fw'));
    if(mq.matches){fws.forEach(function(w){var first=steps.querySelector('.step[data-fig="'+w.getAttribute('data-fig')+'"]');steps.insertBefore(w,first)});clear(sc)}
    else{fws.forEach(function(w){vis.appendChild(w)});fws.forEach(function(w,i){w.classList.toggle('act',i===0)})}
  });
}
layout();
mq.addEventListener&&mq.addEventListener('change',layout);
scs.forEach(function(sc){
  var steps=sc.querySelectorAll('.step');
  if(!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting||mq.matches)return;
    apply(sc,[].indexOf.call(steps,e.target));
  })},{rootMargin:'-35% 0px -35% 0px'});
  [].forEach.call(steps,function(s){io.observe(s)});
});
})();
