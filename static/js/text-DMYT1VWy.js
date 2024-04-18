const i=(t,n)=>n.length===1?`${n[0]} reacted ${t} emoji`:n.length>10?`${n.slice(0,9).join(", ")} and ${n.length-10} more reacted with ${t} emoji`:`${n.slice(0,n.length-1).join(", ")} and ${n[n.length-1]} reacted ${t} emoji`,o=t=>t.length===1?t[0]:t.length>10?`${t.slice(0,9).join(", ")} and ${t.length-10} more`:`${t.slice(0,t.length-1).join(", ")} and ${t[t.length-1]}`,l=t=>{const n=t.split(`
`);for(let e=0;e<n.length;e++){if(n[e].charAt(0)===">"){n[e]=`>${n[e]}`;continue}n[e]=`> ${n[e]}`}return n.join(`
`)};export{o as a,i as f,l as t};
