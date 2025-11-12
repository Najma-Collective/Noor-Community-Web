import{c as m,a as l,r as n}from"./heroImage-CFuz-Y39.js";import{a,b as c}from"./programmes-CLQhGAcm.js";import{a as d}from"./storyBlocks-CTpwkMXs.js";function p(s){document.title="Noor Community Programmes | Skills & Exam Preparation";const t=m({title:a["skills-exams"].title,body:a["skills-exams"].description,actions:[{label:"Join Exam Prep",href:"./join-students.html"},{label:"Fund Exam Fees",href:"./donate.html"}]});s.append(t),l(t,a["skills-exams"].heroQuery);const e=document.createElement("section");e.classList.add("section"),e.innerHTML=`
    <header>
      <h2>Exam success indicators</h2>
      <p>Adaptive coaching and mentorship drive measurable score gains.</p>
    </header>
    <ul class="outcomes-list"></ul>
  `;const r=e.querySelector(".outcomes-list");c["skills-exams"].forEach(i=>{const o=document.createElement("li");o.textContent=i,r.append(o)}),s.append(e),d(s,"skills-exams")}const{main:u}=n({activeId:"programmes",headline:"Skills & Exam Preparation"});p(u);
