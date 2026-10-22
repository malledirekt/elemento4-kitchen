(function(){
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Smooth Scrolling
if(window.Lenis&&!reduce){var lenis=new Lenis({duration:1.15,smoothWheel:true});function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf);
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();lenis.scrollTo(t,{offset:-110})}})});
if(location.hash){var t=document.querySelector(location.hash);if(t)setTimeout(function(){lenis.scrollTo(t,{offset:-110,immediate:true})},50)}}
// Bilder und Texte einblenden
var txt=document.querySelectorAll('main h1,main h2,main h3,main p,main .eyebrow,main .statement,main .btns,main .pill,main .step,main .quote,main .card,main .acc details,main .csteps li,main .display');
var imgs=document.querySelectorAll('main .media img,main .stack img,main .row>img');
txt.forEach(function(el){if(!el.closest('.rv')&&!el.closest('.hero'))el.classList.add('rv')});
imgs.forEach(function(el){el.classList.add('rv-img')});
document.querySelectorAll('.steps,.quotes,.csteps').forEach(function(g){Array.prototype.forEach.call(g.children,function(c,i){c.style.setProperty('--d',(i*0.12)+'s')})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv,.rv-img,.step').forEach(function(el){io.observe(el)});
// Hero-Parallax
var bg=document.querySelector('.hero-bg');if(bg&&!reduce){var tick=function(){var y=window.scrollY;if(y<window.innerHeight)bg.style.transform='translate3d(0,'+(y*0.18)+'px,0)';requestAnimationFrame(tick)};requestAnimationFrame(tick)}
// 2-stufiges Formular
var f=document.getElementById('lead-form');if(f){var s1=f.querySelector('[data-step="1"]'),s2=f.querySelector('[data-step="2"]'),lab=f.querySelector('[data-step-label]');
f.querySelector('[data-next]').addEventListener('click',function(){var bad=[].slice.call(s1.querySelectorAll('[required]')).find(function(el){return!el.checkValidity()});if(bad){bad.reportValidity();return}s1.hidden=true;s2.hidden=false;lab.textContent='Schritt 2 von 2';s2.querySelector('input').focus()});
f.querySelector('[data-prev]').addEventListener('click',function(){s2.hidden=true;s1.hidden=false;lab.textContent='Schritt 1 von 2'});
f.addEventListener('submit',function(e){e.preventDefault();var v=function(n){return(f.elements[n]&&f.elements[n].value)||''};var b=['Projekt: '+v('projekt'),'Ort der Immobilie: '+v('ort'),'Gewünschter Zeitraum: '+v('zeitraum'),'','Name: '+v('name'),'Telefon: '+v('telefon'),'E-Mail: '+v('email'),'',v('nachricht')].join('\n');location.href='mailto:info@elemento4-kitchen.com?subject='+encodeURIComponent('Terminanfrage von '+v('name'))+'&body='+encodeURIComponent(b)})}
})();
