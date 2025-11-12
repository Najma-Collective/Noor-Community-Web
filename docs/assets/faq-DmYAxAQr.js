import{c as i,a as d,r as c}from"./heroImage-C6ilu6mO.js";import{r as u}from"./storyBlocks-DSitioSz.js";const l=[{question:"Who can apply for Noor Community programmes?",answer:"Our programmes serve refugees, displaced learners, and newcomers aged 16+ who are pursuing education or employment pathways in English-speaking contexts."},{question:"How are classes delivered?",answer:"We blend live virtual sessions, on-demand speaking labs, and local learning hubs co-created with partners."},{question:"What qualifications do volunteers need?",answer:"We welcome certified teachers, graduate students, and industry professionals. Every volunteer completes trauma-informed onboarding and ongoing coaching."},{question:"How is my donation used?",answer:"80% funds direct programme delivery. 15% invests in educator support and digital infrastructure. 5% sustains impact measurement and storytelling."}];function p(t){document.title="FAQ | Noor Community";const a=i({title:"Frequently Asked Questions",body:"Find quick answers about eligibility, volunteering, and how we steward resources."});t.append(a),d(a,"faq discussion community");const e=document.createElement("section");e.classList.add("section"),e.setAttribute("data-accordion",""),e.innerHTML=`
    <header>
      <h2>Questions & answers</h2>
      <p>Contact us anytime for more details—we respond within two business days.</p>
    </header>
    <div class="accordion"></div>
  `;const r=e.querySelector(".accordion");l.forEach((o,s)=>{const n=document.createElement("div");n.classList.add("accordion-item"),n.innerHTML=`
      <button class="accordion-trigger" data-accordion-trigger>${o.question}</button>
      <div class="accordion-panel" data-accordion-panel>
        <p>${o.answer}</p>
      </div>
    `,r.append(n),s===0&&(n.querySelector("[data-accordion-panel]").hidden=!1,n.querySelector("[data-accordion-trigger]").setAttribute("aria-expanded","true"))}),t.append(e),u(t,["student","volunteer"],{title:"Still deciding?",description:"Explore stories that answer the questions we hear most."})}const{main:m}=c({activeId:"home",headline:"Frequently Asked Questions"});p(m);
