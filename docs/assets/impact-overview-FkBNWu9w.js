import{c as d,a as p,d as l,r as m}from"./heroImage-C6ilu6mO.js";import{i as h,t as u,a as y}from"./impact-H8d1dACO.js";import{r as g}from"./storyBlocks-DSitioSz.js";function v(e){document.title="Our Impact | Noor Community";const c=d({title:"Impact & Theory of Change",body:"We measure more than test scores. Our data honours learner agency and informs strategic decisions."});e.append(c),p(c,"impact presentation classroom");const r=document.createElement("section");r.classList.add("section"),r.innerHTML=`
    <header>
      <h2>Key indicators</h2>
      <p>We track participation, progression, and wellbeing across every cohort.</p>
    </header>
  `,r.append(l(h)),e.append(r);const a=document.createElement("section");a.classList.add("section"),a.innerHTML=`
    <header>
      <h2>Theory of change</h2>
      <p>Our approach links inputs to long-term community impact.</p>
    </header>
    <div class="card-grid"></div>
  `;const s=a.querySelector(".card-grid");u.forEach(o=>{const t=document.createElement("md-filled-card");t.innerHTML=`
      <div class="card-content">
        <h3>${o.title}</h3>
        <p>${o.description}</p>
      </div>
    `,s.append(t)}),e.append(a);const n=document.createElement("section");n.classList.add("section"),n.innerHTML=`
    <header>
      <h2>Transparency practices</h2>
      <p>Stakeholders receive timely, honest reporting that blends data and narrative.</p>
    </header>
    <ul class="outcomes-list"></ul>
  `;const i=n.querySelector(".outcomes-list");y.forEach(o=>{const t=document.createElement("li");t.textContent=o,i.append(t)}),e.append(n),g(e,["impact"],{title:"Impact stories",description:"Dive deeper into the stories behind our metrics."})}const{main:f}=m({activeId:"impact",headline:"Our Impact"});v(f);
