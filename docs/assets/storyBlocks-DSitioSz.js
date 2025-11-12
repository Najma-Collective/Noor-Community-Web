import{f as l,h as m}from"./heroImage-C6ilu6mO.js";function n(e){const r=document.createElement("md-elevated-card");return r.classList.add("story-card"),r.innerHTML=`
    <div class="card-content">
      <h3>${e.title}</h3>
      <p>${e.summary}</p>
      <a href="${e.url}" class="story-link" aria-label="Read ${e.title}">
        Read the story
      </a>
    </div>
  `,r}function h(e,r,a=2){const i=m(r).slice(0,a);if(!i.length)return;const t=document.createElement("section");t.classList.add("related-stories"),t.innerHTML=`
    <header>
      <h2>Related Stories</h2>
      <p>See how community members experience this programme.</p>
    </header>
    <div class="story-grid" role="list"></div>
  `;const o=t.querySelector(".story-grid");i.forEach(s=>{o.append(n(s))}),e.append(t)}function u(e,r,a={}){const i=l(r);if(!i.length)return;const{title:t="More Stories",description:o=""}=a,s=document.createElement("section");s.classList.add("related-stories"),s.innerHTML=`
    <header>
      <h2>${t}</h2>
      ${o?`<p>${o}</p>`:""}
    </header>
    <div class="story-grid" role="list"></div>
  `;const d=s.querySelector(".story-grid");i.forEach(c=>{d.append(n(c))}),e.append(s)}export{h as a,u as r};
