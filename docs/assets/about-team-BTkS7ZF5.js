import{c as n,a as d,r as c}from"./heroImage-C6ilu6mO.js";import{r as m}from"./storyBlocks-DSitioSz.js";const l=[{name:"Sara Al-Hassan",role:"Executive Director",bio:"Former EAP lecturer who co-founded Noor Community to bridge access gaps for displaced scholars."},{name:"Omar Rahman",role:"Director of Programmes",bio:"Leads curriculum design, ensuring every module aligns with trauma-informed pedagogy."},{name:"Nadia Suleiman",role:"Head of Impact & Data",bio:"Designs dashboards and facilitates learning reviews with donors, partners, and alumni."},{name:"David Chen",role:"Volunteer Network Lead",bio:"Supports 120+ educators through onboarding, coaching, and community care circles."}];function p(e){document.title="About Noor Community | Our Team";const i=n({title:"A distributed team with lived experience",body:"Our leadership includes former learners, refugee advocates, and educators who craft programmes with empathy and rigour."});e.append(i),d(i,"diverse team meeting");const a=document.createElement("section");a.classList.add("section"),a.innerHTML=`
    <header>
      <h2>Leadership & Staff</h2>
      <p>Meet the people guiding our programmes, partnerships, and storytelling.</p>
    </header>
    <div class="card-grid"></div>
  `;const s=a.querySelector(".card-grid");l.forEach(r=>{const o=document.createElement("md-elevated-card");o.innerHTML=`
      <div class="card-content">
        <h3>${r.name}</h3>
        <p><strong>${r.role}</strong></p>
        <p>${r.bio}</p>
      </div>
    `,s.append(o)}),e.append(a);const t=document.createElement("section");t.classList.add("section"),t.innerHTML=`
    <header>
      <h2>Alumni advisory council</h2>
      <p>Graduates guide decision making and co-lead new programme pilots.</p>
    </header>
    <md-list>
      <md-list-item>Layla | Co-designs mental health first aid for educators</md-list-item>
      <md-list-item>Issa | Leads policy advocacy labs in partnership with NGOs</md-list-item>
      <md-list-item>Maryam | Hosts storytelling residencies and podcast series</md-list-item>
    </md-list>
  `,e.append(t),m(e,["volunteer","student"],{title:"Faces behind the mission",description:"Discover volunteer spotlights and learner stories connected to our team members."})}const{main:u}=c({activeId:"about",headline:"Meet the Team"});p(u);
