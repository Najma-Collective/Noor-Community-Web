import{c as a,a as r,r as n}from"./heroImage-C6ilu6mO.js";import{r as s}from"./storyBlocks-DSitioSz.js";function c(e){document.title="Join Noor Community | For Students";const i=a({title:"Apply as a Noor Community learner",body:"We welcome refugees and newcomers aged 16+ who are committed to advancing education, careers, and community leadership.",actions:[{label:"Start your application",href:"https://airtable.com/apply-noor-community"}]});e.append(i),r(i,"students celebrating success");const o=document.createElement("section");o.classList.add("section"),o.innerHTML=`
    <header>
      <h2>Eligibility snapshot</h2>
      <p>Use this checklist to confirm Noor Community is the right fit.</p>
    </header>
    <md-list>
      <md-list-item>Residing in or recently relocated from displacement contexts.</md-list-item>
      <md-list-item>Commitment to 6–8 hours per week for live and independent study.</md-list-item>
      <md-list-item>Access to a device (loaners available) and reliable internet (support offered).</md-list-item>
    </md-list>
  `,e.append(o);const t=document.createElement("section");t.classList.add("section"),t.setAttribute("data-accordion",""),t.innerHTML=`
    <header>
      <h2>Application process</h2>
      <p>Follow these steps—we will guide you from form submission to orientation.</p>
    </header>
    <div class="accordion">
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Step 1 — Share your goals</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Complete the short interest form describing your education or career goals. A member of our team will respond within five days.</p>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Step 2 — Language snapshot</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Take a collaborative language check so we can tailor your pathway. We celebrate multilingual skills—this is not a pass/fail test.</p>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion-trigger>Step 3 — Orientation & onboarding</button>
        <div class="accordion-panel" data-accordion-panel>
          <p>Join a virtual orientation to meet your mentors, review wellbeing resources, and receive tech setup support.</p>
        </div>
      </div>
    </div>
  `,e.append(t),s(e,["student"],{title:"Learner journeys",description:"Discover how applicants grow into mentors and advocates."})}const{main:d}=n({activeId:"join",headline:"For Students"});c(d);
