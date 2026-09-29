import{bG as h,bH as y,bI as j}from"./vendor-Cb-puWKW.js";import{f as w,j as t,L as k}from"./react-vendor-BtYuXclW.js";import{u as N}from"./index-Cw29hdXN.js";h(y)`
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
`;const H=h.div`
  margin: 2rem 0px;
`,P=v=>{const e=w.c(23),{links:a,right:g,translations:o}=v,{t:s}=N();let b;e[0]!==s?(b=r=>typeof r=="string"?s(r):r,e[0]=s,e[1]=b):b=e[1];const l=b;let i;e[2]!==s?(i=s("Breadcrumb"),e[2]=s,e[3]=i):i=e[3];let p;e[4]===Symbol.for("react.memo_cache_sentinel")?(p=t.jsx("span",{"aria-hidden":"true",className:"hidden h-7 w-[3px] shrink-0 rounded-full bg-fg-gold sm:block"}),e[4]=p):p=e[4];let n;if(e[5]!==a||e[6]!==l||e[7]!==o){let r;e[9]!==a.length||e[10]!==l||e[11]!==o?(r=(x,u)=>t.jsx("span",{className:"flex items-center",children:x.active?t.jsx("span",{"aria-current":"page",className:"font-display text-lg font-medium tracking-tight text-primary-text sm:text-xl",children:o?.[x.title]||l(x.title)}):t.jsxs(t.Fragment,{children:[t.jsx(k,{to:x.url,className:"rounded text-secondary-text transition-colors duration-200 hover:text-fg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-gold/60",children:o?.[x.title]||l(x.title)}),u!==a.length-1&&t.jsx(j,{className:"mx-2 text-[14px] text-fg-subtle rtl:rotate-180"})]})},u),e[9]=a.length,e[10]=l,e[11]=o,e[12]=r):r=e[12],n=a.map(r),e[5]=a,e[6]=l,e[7]=o,e[8]=n}else n=e[8];let c;e[13]!==n?(c=t.jsx("div",{className:"flex flex-wrap items-center text-sm font-medium text-secondary-text",children:n}),e[13]=n,e[14]=c):c=e[14];let d;e[15]!==i||e[16]!==c?(d=t.jsxs("nav",{"aria-label":i,className:"flex min-w-0 items-center gap-3",children:[p,c]}),e[15]=i,e[16]=c,e[17]=d):d=e[17];let m;e[18]!==g?(m=g&&t.jsx("div",{className:"flex items-center gap-3",children:t.jsx("div",{className:"flex items-center gap-3 text-sm font-medium text-primary-text",children:g})}),e[18]=g,e[19]=m):m=e[19];let f;return e[20]!==d||e[21]!==m?(f=t.jsxs("div",{className:"my-4 flex w-full flex-col items-start justify-between gap-3 rounded-2xl border border-main-border bg-blocks-color px-4 py-3.5 shadow-[var(--fg-shadow-sm)] sm:my-6 sm:flex-row sm:items-center sm:px-6 sm:py-4",children:[d,m]}),e[20]=d,e[21]=m,e[22]=f):f=e[22],f};export{P,H as a};
