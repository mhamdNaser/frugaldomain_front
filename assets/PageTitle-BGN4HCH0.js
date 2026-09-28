import{bG as g,bH as p,bI as f}from"./vendor-gDg2uQXO.js";import{f as u,j as r,L as h}from"./react-vendor-BtYuXclW.js";g(p)`
  .laPPHD {
    background-color: transparent !important;
  }
  .hDHZZh {
    background-color: transparent !important;
  }
  margin: 0 0;
  & .rdt_Table {
    min-width: 100%;
    background-color: rgb(var(--blocks-color));
    color: rgb(var(--primary-text));
    padding: 16px;
    border-radius: 16px;

    .rdt_TableRow,
    .rdt_TableHead,
    .rdt_TableHeadRow {
      background-color: rgb(var(--blocks-color));
      color: rgb(var(--primary-text));
    }
    .rdt_TableRow {
      min-height: 56px;
      transition: background-color 0.2s ease;
    }
    .rdt_TableRow:hover {
      background-color: rgb(var(--fg-tint) / 0.6);
    }
    .rdt_TableHeadRow {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgb(var(--secondary-text));
      background-color: rgb(var(--fg-surface-raised));
    }
    .jWOtlo:not(:last-of-type),
    .idxdtx {
      border-bottom-color: rgb(var(--border-color));
    }
  }
  ~ div .rdt_Pagination {
    background-color: rgb(var(--blocks-color));
    color: rgb(var(--primary-text));
    padding: 16px;

    .dihybH {
      color: rgb(var(--primary-text));
      &:disabled {
        color: rgb(var(--disabled-text)) !important;
      }
    }
  }
`;const j=g.div`
  margin: 2rem 0px;
`,w=b=>{const e=u.c(14),{links:t,right:n,translations:a}=b;let c;e[0]===Symbol.for("react.memo_cache_sentinel")?(c=r.jsx("span",{"aria-hidden":"true",className:"hidden h-7 w-[3px] shrink-0 rounded-full bg-fg-gold sm:block"}),e[0]=c):c=e[0];let o;if(e[1]!==t||e[2]!==a){let m;e[4]!==t.length||e[5]!==a?(m=(i,x)=>r.jsx("span",{className:"flex items-center",children:i.active?r.jsx("span",{"aria-current":"page",className:"font-display text-lg font-medium tracking-tight text-primary-text sm:text-xl",children:a[i.title]||i.title}):r.jsxs(r.Fragment,{children:[r.jsx(h,{to:i.url,className:"rounded text-secondary-text transition-colors duration-200 hover:text-fg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-gold/60",children:a[i.title]||i.title}),x!==t.length-1&&r.jsx(f,{className:"mx-2 text-[14px] text-fg-subtle rtl:rotate-180"})]})},x),e[4]=t.length,e[5]=a,e[6]=m):m=e[6],o=t.map(m),e[1]=t,e[2]=a,e[3]=o}else o=e[3];let s;e[7]!==o?(s=r.jsxs("nav",{"aria-label":"Breadcrumb",className:"flex min-w-0 items-center gap-3",children:[c,r.jsx("div",{className:"flex flex-wrap items-center text-sm font-medium text-secondary-text",children:o})]}),e[7]=o,e[8]=s):s=e[8];let l;e[9]!==n?(l=n&&r.jsx("div",{className:"flex items-center gap-3",children:r.jsx("div",{className:"flex items-center gap-3 text-sm font-medium text-primary-text",children:n})}),e[9]=n,e[10]=l):l=e[10];let d;return e[11]!==s||e[12]!==l?(d=r.jsxs("div",{className:"my-4 flex w-full flex-col items-start justify-between gap-3 rounded-2xl border border-main-border bg-blocks-color px-4 py-3.5 shadow-[var(--fg-shadow-sm)] sm:my-6 sm:flex-row sm:items-center sm:px-6 sm:py-4",children:[s,l]}),e[11]=s,e[12]=l,e[13]=d):d=e[13],d};export{w as P,j as a};
