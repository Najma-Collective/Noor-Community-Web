import{c as n,a as i,s as c,r as d}from"./heroImage-C6ilu6mO.js";function m(a){document.title="Impact Stories | Noor Community";const s=n({title:"Stories that make data human",body:"Learners, volunteers, and partners share milestones that bring our metrics to life."});a.append(s),i(s,"student success story");const e=document.createElement("section");e.classList.add("section"),e.innerHTML=`
    <header>
      <h2>Story library</h2>
      <p>Browse narratives connected to programmes, impact, and volunteering.</p>
    </header>
    <div class="story-grid" role="list"></div>
  `;const o=e.querySelector(".story-grid");c.forEach(t=>{const r=document.createElement("md-elevated-card");r.id=t.id,r.classList.add("story-card"),r.innerHTML=`
      <div class="card-content">
        <h3>${t.title}</h3>
        <p>${t.summary}</p>
        <a class="story-link" href="${t.url}">Read more</a>
      </div>
    `,o.append(r)}),a.append(e)}const{main:l}=d({activeId:"impact",headline:"Impact Stories"});m(l);
