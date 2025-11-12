import{c as i,a as l,r as m}from"./heroImage-C6ilu6mO.js";import{a as r,b as c}from"./programmes-CLQhGAcm.js";import{a as u}from"./storyBlocks-DSitioSz.js";function d(s){document.title="Noor Community Programmes | General & Business English";const a=i({title:r["general-business"].title,body:r["general-business"].description,actions:[{label:"Apply as a Student",href:"./join-students.html"},{label:"Read a Learner Story",href:"./stories.html#amira-progress"}]});s.append(a),l(a,r["general-business"].heroQuery);const e=document.createElement("section");e.classList.add("section"),e.innerHTML=`
    <header>
      <h2>What learners gain</h2>
      <p>Career-ready communication and leadership skills rooted in learner goals.</p>
    </header>
    <ul class="outcomes-list"></ul>
  `;const n=e.querySelector(".outcomes-list");c["general-business"].forEach(o=>{const t=document.createElement("li");t.textContent=o,n.append(t)}),s.append(e),u(s,"general-business")}const{main:p}=m({activeId:"programmes",headline:"General & Business English"});d(p);
