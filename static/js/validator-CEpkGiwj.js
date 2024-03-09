const e={email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,username:/^[A-Za-z][A-Za-z0-9_]{4,31}$/},s=a=>e.email.test(a),t=a=>a?e.username.test(a):!1;export{s as a,t as i};
