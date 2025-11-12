import{c as o,a as n,i as d,s as l,r as c}from"./heroImage-CFuz-Y39.js";const s=[{id:"student",label:"Student Stories"},{id:"volunteer",label:"Volunteer Spotlights"},{id:"impact",label:"Impact Insights"}];function m(a){return l.filter(i=>i.type===a)}function p(a){document.title="Stories | Noor Community";const i=o({title:"Stories that move people to act",body:"Read how learners, volunteers, and partners turn language learning into opportunity."});a.append(i),n(i,"community storytelling session");const e=document.createElement("section");e.classList.add("section"),e.setAttribute("data-tabs",""),e.innerHTML=`
    <header>
      <h2>Explore by theme</h2>
      <p>Use the tabs to discover narratives from across the community.</p>
    </header>
    <md-primary-tabs>
      ${s.map(t=>`<md-primary-tab aria-controls="panel-${t.id}">${t.label}</md-primary-tab>`).join("")}
    </md-primary-tabs>
    <div class="tab-panels">
      ${s.map(t=>`
            <div data-tab-panel id="panel-${t.id}">
              <div class="story-grid" role="list">
                ${m(t.id).map(r=>`
                      <md-elevated-card id="${r.id}" class="story-card">
                        <div class="card-content">
                          <h3>${r.title}</h3>
                          <p>${r.summary}</p>
                          <a class="story-link" href="${r.url}">Read more</a>
                        </div>
                      </md-elevated-card>
                    `).join("")}
              </div>
            </div>
          `).join("")}
    </div>
  `,a.append(e),d(e)}const{main:u}=c({activeId:"stories",headline:"Stories"});p(u);
