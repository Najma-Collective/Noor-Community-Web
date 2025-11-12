import{c as a,a as o,b as n,r as l}from"./heroImage-C6ilu6mO.js";import{a as e,p as m}from"./programmes-CLQhGAcm.js";import{r as d}from"./storyBlocks-DSitioSz.js";function c(t){document.title="Noor Community Programmes | Overview";const s=a({title:e.overview.title,body:e.overview.description,actions:m});t.append(s),o(s,e.overview.heroQuery);const i=document.createElement("section");i.classList.add("section"),i.innerHTML=`
    <header>
      <h2>Three core pathways</h2>
      <p>All pathways combine live instruction, asynchronous labs, wellbeing coaching, and storytelling.</p>
    </header>
  `,i.append(n([{title:e["general-business"].title,description:e["general-business"].description,link:"./programmes-general-business.html"},{title:e.eap.title,description:e.eap.description,link:"./programmes-eap.html"},{title:e["skills-exams"].title,description:e["skills-exams"].description,link:"./programmes-skills-exams.html"}])),t.append(i);const r=document.createElement("section");r.classList.add("section"),r.innerHTML=`
    <header>
      <h2>Wraparound support</h2>
      <p>Beyond language instruction, we deliver the tools and relationships to stay engaged.</p>
    </header>
    <md-list>
      <md-list-item>Care teams with social workers and alumni mentors.</md-list-item>
      <md-list-item>Device lending libraries and micro-grants for connectivity.</md-list-item>
      <md-list-item>Career and scholarship coaching tailored to learner goals.</md-list-item>
    </md-list>
  `,t.append(r),d(t,["student"],{title:"Programme stories",description:"Learner voices illustrate outcomes from each pathway."})}const{main:p}=l({activeId:"programmes",headline:"Our Programmes"});c(p);
