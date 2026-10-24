/* Reads content.js and builds the page. You rarely need to edit this file. */
(() => {
  const S = window.SITE, $ = (s) => document.querySelector(s), app = $("#app");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ic = (n) => `<span class="ms">${esc(n)}</span>`;
  const pills = (a) => (a && a.length ? `<div class="pills">${a.map((t) => `<span class="pill">${esc(t)}</span>`).join("")}</div>` : "");
  const ext = (u, inner, cls = "") => `<a class="${cls}" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  const head = (e, t) => `<div><div class="eyebrow">// ${esc(e)}</div><h2>${esc(t)}</h2></div>`;
  const live = (a) => (a || []).filter((x) => !x.hidden);
  const L = { github: ["GitHub", "code", "Lab write-ups, configs, and scripts."], linkedin: ["LinkedIn", "work", "Experience, credentials, and updates."] };
  const lk = (k) => L[k] || [k[0].toUpperCase() + k.slice(1), "link", ""];   // add new link types here if you want a custom icon
  const tn = (o, i) => "t-" + (o.tone || ["green", "cyan", "blue"][i % 3]);   // colors cycle unless "tone" is set

  const pcard = (p, i) => `<article class="card lift ${tn(p, i)}"><div class="row"><div class="ico">${ic(p.icon || "folder_open")}</div><span class="badge">${esc(p.label || "")}</span></div>
    <div><h3>${esc(p.title)}</h3>${p.sub ? `<p class="sub">${esc(p.sub)}</p>` : ""}</div><p>${esc(p.description)}</p>${pills(p.tags)}
    <div class="foot"><span class="mono dim">${esc(p.status || "")}</span>${p.url ? ext(p.url, `View on GitHub ${ic("arrow_outward")}`, "more") : `<span class="mono dim">Link coming soon</span>`}</div></article>`;
  const role = (r) => `<div class="card"><div class="row"><div><h3>${esc(r.role)}</h3><p class="accent">${esc(r.org)}</p></div><span class="mono dim">${esc(r.period)}</span></div>
    <ul>${(r.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>${pills(r.skills)}</div>`;

  const sections = {
    hero: () => `<section class="card hero"><div><h1>${esc(S.name)}</h1><p class="role">${esc(S.role)}</p><p class="lead">${esc(S.hero.summary)}</p>${pills(S.hero.tags)}</div>
      <div class="actions">${(S.hero.buttons || []).map((b) => (b.to in S.pages ? `<a class="btn ${b.primary ? "primary" : ""}" href="#${b.to}">${ic(b.icon)}${esc(b.label)}</a>` : "")).join("")}${S.resume ? ext(S.resume, ic("download") + "Download Résumé", "btn") : ""}</div></section>`,
    expertise: () => `<section>${head("Core competencies", "Areas of Expertise")}<div class="grid g3">${live(S.expertise).map((e, i) =>
      `<div class="card lift ${tn(e, i)}"><div class="row"><div class="ico">${ic(e.icon)}</div><span class="badge">${esc(e.label)}</span></div><h3>${esc(e.title)}</h3><p>${esc(e.text)}</p>${pills(e.skills)}</div>`).join("")}</div></section>`,
    featured: () => { const all = live(S.projects), f = all.filter((p) => p.featured), list = (f.length ? f : all).slice(0, 6);
      return list.length ? `<section>${head("Portfolio", "Featured Projects")}<div class="grid g3">${list.map(pcard).join("")}</div><p class="more-row"><a class="more" href="#projects">All projects ${ic("arrow_forward")}</a></p></section>` : ""; },
    projects: () => `<section><input id="q" class="search" type="search" placeholder="Filter by name, tool, or topic…" aria-label="Filter projects"><div id="plist" class="grid g3"></div></section>`,
    summary: () => `<section class="card"><div class="row"><div><h1 class="h-sm">${esc(S.name)}</h1><p class="sub">${esc(S.role)}</p></div>${S.resume ? ext(S.resume, ic("download") + "Download Résumé (PDF)", "btn primary") : ""}</div>
      <div><div class="eyebrow">Professional Summary</div><p class="summ">${esc(S.summary)}</p></div></section>`,
    certs: () => `<section>${head("Credentials", "Certifications")}<div class="grid g3">${live(S.certs).map((c, i) =>
      `<div class="card ${tn(c, i)}"><div class="row"><div class="ico">${ic(c.icon || "verified")}</div><span class="badge">${esc(c.status)}</span></div><div><h3>${esc(c.name)}</h3><p class="sub mono">${esc(c.note || "")}</p></div><p>${esc(c.text || "")}</p></div>`).join("")}</div></section>`,
    skills: () => `<section>${head("Capabilities", "Technical Skills")}<div class="grid g3">${live(S.skills).map((c, i) => `<div class="card ${tn(c, i)}"><h3 class="inl">${ic(c.icon)}${esc(c.title)}</h3><ul class="rows">${c.items.map((it) => { const [n, t] = [].concat(it); return `<li class="srow"><span>${esc(n)}</span>${t ? `<span class="mono">${esc(t)}</span>` : ""}</li>`; }).join("")}</ul></div>`).join("")}</div></section>`,
    experience: () => `<section>${head("Work", "IT Work Experience")}<div class="stack">${live(S.experience).map(role).join("")}</div></section>`,
    education: () => `<section>${head("Academics", "Education")}<div class="grid g2">${live(S.education).map((e) =>
      `<div class="card"><div class="row"><div><h3>${esc(e.degree)}</h3><p class="accent">${esc(e.school)}</p></div><span class="mono dim">${esc(e.date)}</span></div><p>${esc(e.text || "")}</p></div>`).join("")}</div></section>`,
    other: () => `<section>${head("Additional", "Additional Experience")}<div class="stack">${live(S.otherExperience).map(role).join("")}</div></section>`,
    cta: () => `<section class="card cta"><div><h3>${esc(S.cta.title)}</h3><p>${esc(S.cta.text)}</p></div><a class="btn primary" href="#contact">${ic("mail")}Get in touch</a></section>`,
    contact: () => { const c = S.contact; return `<section class="card chero t-green"><div class="ctext"><span class="status"><i></i>${esc(c.status)}</span><h1 class="h-sm">${esc(c.heading)}</h1><p>${esc(c.text)}</p><p class="mono email">${esc(S.email)}</p></div>
      <div class="actions"><button class="btn primary" id="copy">${ic("content_copy")}<span>Copy email</span></button><a class="btn" href="mailto:${esc(S.email)}">${ic("mail")}Send email</a>${S.resume ? ext(S.resume, ic("download") + "Download Résumé", "btn") : ""}</div></section>`; },
    openTo: () => { const c = S.contact; return `<div class="grid g2"><div class="card t-cyan"><h3 class="inl">${ic("work")}Roles I’m open to</h3><div class="pills big">${(c.roles || []).map((r) => `<span class="pill">${ic(r.icon)}${esc(r.title)}</span>`).join("")}</div></div>
      <div class="card t-blue"><h3 class="inl">${ic("location_on")}Work arrangement</h3><div class="arr">${(c.arrangements || []).map((a) => `<div>${ic(a.icon)}<b>${esc(a.label)}</b></div>`).join("")}</div></div></div>`; },
    links: () => `<section>${head("Find me online", "Elsewhere")}<div class="grid g3">${Object.entries(S.links || {}).filter(([, u]) => u).map(([k, u], i) => { const [l, icon, d] = lk(k); return `<a class="card lift ${tn({}, i)}" href="${esc(u)}" target="_blank" rel="noopener noreferrer"><div class="row"><div class="ico">${ic(icon)}</div>${ic("arrow_outward")}</div><div><h3>${esc(l)}</h3><p class="sub mono">${esc(u.replace(/^https?:\/\/(www\.)?/, ""))}</p></div><p>${esc(d)}</p></a>`; }).join("")}</div></section>`
  };

  $("#brand-name").textContent = S.name; $("#brand-role").textContent = S.role;
  $("#foot").innerHTML = `<div class="fbar"><div><b>${esc(S.name)}</b> · ${esc(S.role)}<div class="mono dim">© ${new Date().getFullYear()} ${esc(S.name)}</div></div><nav>${Object.entries(S.links || {}).filter(([, u]) => u).map(([k, u]) => ext(u, `${esc(lk(k)[0])} ${ic("open_in_new")}`, "flink")).join("")}<a class="flink" href="#contact">Contact</a></nav></div>`;
  $("#menu").onclick = () => $("#top").classList.toggle("open");

  function render() {
    const ids = Object.keys(S.pages).filter((k) => S.pages[k].enabled !== false);
    let id = location.hash.slice(1); if (!ids.includes(id)) id = ids[0];
    const pg = S.pages[id];
    $("#nav").innerHTML = ids.map((k) => `<a href="#${k}"${k === id ? ' aria-current="page"' : ""}>${esc(S.pages[k].label)}</a>`).join("");
    $("#top").classList.remove("open");
    app.innerHTML = `<div class="wrap">${pg.title ? `<div class="page-title"><h1>${esc(pg.title)}</h1><p class="lead">${esc(pg.intro || "")}</p></div>` : ""}${pg.sections.map((n) => (sections[n] ? sections[n]() : `<p class="dim">Unknown section "${esc(n)}" in content.js</p>`)).join("")}</div>`;
    const q = $("#q");
    if (q) { const list = live(S.projects), draw = () => { const t = q.value.toLowerCase(), r = list.filter((p) => JSON.stringify(p).toLowerCase().includes(t));
      $("#plist").innerHTML = r.length ? r.map(pcard).join("") : `<p class="dim">No matching projects.</p>`; }; q.oninput = draw; draw(); }
    const cp = $("#copy"); if (cp) cp.onclick = () => navigator.clipboard.writeText(S.email).then(() => { cp.lastChild.textContent = "Copied!"; setTimeout(() => (cp.lastChild.textContent = "Copy email"), 1500); });
    document.title = `${S.name} | ${pg.label}`; window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", render); render();
})();
