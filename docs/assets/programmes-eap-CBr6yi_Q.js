import{c as n,a as c,r as m}from"./heroImage-C6ilu6mO.js";import{a as t,b as l}from"./programmes-CLQhGAcm.js";import{a as p}from"./storyBlocks-DSitioSz.js";function d(o){document.title="Noor Community Programmes | English for Academic Purposes";const a=n({title:t.eap.title,body:t.eap.description,actions:[{label:"Apply for EAP",href:"./join-students.html"},{label:"Support the Scholarship Fund",href:"./donate.html"}]});o.append(a),c(a,t.eap.heroQuery);const e=document.createElement("section");e.classList.add("section"),e.innerHTML=`
    <header>
      <h2>Academic outcomes</h2>
      <p>Students build portfolio-ready artefacts and confidence to navigate admissions.</p>
    </header>
    <ul class="outcomes-list"></ul>
  `;const s=e.querySelector(".outcomes-list");l.eap.forEach(i=>{const r=document.createElement("li");r.textContent=i,s.append(r)}),o.append(e),p(o,"eap")}const{main:u}=m({activeId:"programmes",headline:"English for Academic Purposes"});d(u);
