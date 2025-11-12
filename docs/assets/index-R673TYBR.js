import{c as l,a as c,b as p,d as u,e as h,g,r as y}from"./heroImage-CFuz-Y39.js";import{p as b,a as t}from"./programmes-CLQhGAcm.js";import{i as v}from"./impact-H8d1dACO.js";import{r as f}from"./storyBlocks-CTpwkMXs.js";const w=[{quote:"Noor Community gave me the confidence to interview for roles I once thought were out of reach. The mentors never let me forget that my story matters.",name:"Leila, Programme Alumna"},{quote:"Our volunteers gain as much as they give. Coaching across time zones taught me to listen deeply and celebrate small wins every session.",name:"David, Volunteer Facilitator"},{quote:"Partnering with Noor Community means seeing data and stories come together. We trust the team because they share results with humility.",name:"Zahra Foundation, Impact Partner"}];function L(e){document.title="Noor Community | Home";const d=l({title:"Where displaced learners grow agency through language",body:"Noor Community connects refugees, migrants, and volunteers to transformative English programmes, wraparound mentorship, and storytelling that moves decision makers to act.",actions:b});e.append(d),c(d,t.overview.heroQuery);const a=document.createElement("section");a.classList.add("section"),a.innerHTML=`
    <header>
      <h2>Programmes designed for real journeys</h2>
      <p>Every pathway blends trauma-informed pedagogy, career mentoring, and community accountability.</p>
    </header>
  `,a.append(p([{title:t["general-business"].title,description:t["general-business"].description,link:"./programmes-general-business.html",linkLabel:"View General & Business English"},{title:t.eap.title,description:t.eap.description,link:"./programmes-eap.html",linkLabel:"View EAP"},{title:t["skills-exams"].title,description:t["skills-exams"].description,link:"./programmes-skills-exams.html",linkLabel:"View Skills & Exam Prep"}])),e.append(a);const r=document.createElement("section");r.classList.add("section"),r.innerHTML=`
    <header>
      <h2>Impact that pairs data with dignity</h2>
      <p>We publish the metrics that donors need while centring the agency of our learners.</p>
    </header>
  `,r.append(u(v)),e.append(r);const n=document.createElement("section");n.classList.add("section"),n.setAttribute("data-tabs",""),n.innerHTML=`
    <header>
      <h2>Choose your Noor Community journey</h2>
      <p>Three clear pathways support applications, volunteering, and donor engagement.</p>
    </header>
    <md-primary-tabs>
      <md-primary-tab aria-controls="tab-students">For Students</md-primary-tab>
      <md-primary-tab aria-controls="tab-volunteers">For Volunteers</md-primary-tab>
      <md-primary-tab aria-controls="tab-donors">For Donors</md-primary-tab>
    </md-primary-tabs>
    <div class="tab-panels">
      <div data-tab-panel id="tab-students">
        <p>Get tailored learning plans, peer accountability groups, and scholarship navigation support.</p>
        <md-filled-button href="./join-students.html">Apply Now</md-filled-button>
      </div>
      <div data-tab-panel id="tab-volunteers">
        <p>Coach learners across time zones with ready-made curriculum, coaching guides, and community care.</p>
        <md-filled-button href="./join-volunteers.html">Volunteer</md-filled-button>
      </div>
      <div data-tab-panel id="tab-donors">
        <p>Sustain programmes, fund devices, and underwrite exam fees with transparent reporting every quarter.</p>
        <md-filled-button href="./donate.html">Support the Work</md-filled-button>
      </div>
    </div>
  `,e.append(n),e.append(h(w));const o=document.createElement("section");o.classList.add("section"),o.innerHTML=`
    <header>
      <h2>Latest stories from the community</h2>
      <p>Explore lived experiences across programmes, impact, and volunteering.</p>
    </header>
    <div class="story-grid" role="list"></div>
  `;const m=o.querySelector(".story-grid");g(3).forEach(s=>{const i=document.createElement("md-elevated-card");i.classList.add("story-card"),i.innerHTML=`
      <div class="card-content">
        <h3>${s.title}</h3>
        <p>${s.summary}</p>
        <a class="story-link" href="${s.url}">Read more</a>
      </div>
    `,m.append(i)}),e.append(o),f(e,["student","volunteer"],{title:"Related journeys",description:"See how our programmes, impact, and volunteer network intersect."})}const{main:k}=y({activeId:"home",headline:"Noor Community"});L(k);
