const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('#nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=document.querySelectorAll('section[id]'), links=document.querySelectorAll('#nav a');
window.addEventListener('scroll',()=>{let current='';sections.forEach(s=>{if(scrollY>=s.offsetTop-140)current=s.id});links.forEach(a=>a.style.color=a.getAttribute('href')==='#'+current?'#fff':'');},{passive:true});
