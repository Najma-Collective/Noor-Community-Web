import{c as o,a as s,b as c,r as d}from"./heroImage-C6ilu6mO.js";import{r as l}from"./storyBlocks-DSitioSz.js";const r={highlights:[{label:"Programmes",value:"80%",description:"Instruction, curriculum design, learner stipends, and technology access."},{label:"Educator Support",value:"15%",description:"Volunteer onboarding, mentorship stipends, and community care."},{label:"Impact & Storytelling",value:"5%",description:"Monitoring, evaluation, and narrative projects led by alumni."}],documents:[{label:"2024 Audited Financial Statement (PDF)",href:"#"},{label:"2024 Impact Dashboard (Google Data Studio)",href:"#"},{label:"Gift Acceptance & Ethics Policy",href:"#"}]};function p(e){document.title="Financials & Transparency | Noor Community";const n=o({title:"Financials & Transparency",body:"Stewardship, accountability, and community trust guide how we invest every donation."});e.append(n),s(n,"financial transparency nonprofit");const t=document.createElement("section");t.classList.add("section"),t.innerHTML=`
    <header>
      <h2>Where your gift goes</h2>
      <p>Our budgeting prioritises direct programme delivery and educator support.</p>
    </header>
  `,t.append(c(r.highlights)),e.append(t);const a=document.createElement("section");a.classList.add("section"),a.innerHTML=`
    <header>
      <h2>Key documents</h2>
      <p>Download the latest statements and policies.</p>
    </header>
    <md-list>
      ${r.documents.map(i=>`<md-list-item><a href="${i.href}">${i.label}</a></md-list-item>`).join("")}
    </md-list>
  `,e.append(a),l(e,["impact","partner"],{title:"Transparency in action",description:"See how impact data and partnerships reinforce trust."})}const{main:m}=d({activeId:"home",headline:"Financials & Transparency"});p(m);
