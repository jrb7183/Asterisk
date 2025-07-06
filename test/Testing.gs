const soundChanges = listSCs("dV > r / V_C={p, t, k} > {b, d, g} / #_=t>d/_V================");
const groupDict = groupDictCreator("C = [g, b, d, r]V = [a,e,o,i,u] L = [r, l,  w, j]P=[g,b,d]");


// unSoundChange tests
console.log(unSoundChange(soundChanges, ["barg"], groupDict));
console.log(unSoundChange(soundChanges, ["bararg"], groupDict));
console.log(unSoundChange(soundChanges, ["bard"], groupDict));
// console.log(unSoundChange(soundChanges, ["bardg"], groupDict));
// console.log(unSoundChange(soundChanges, ["bardgb"], groupDict));
// console.log(unSoundChange(soundChanges, ["ardgob"], groupDict));
// console.log(unSoundChange(soundChanges, ["ardgowbd"], groupDict));
// console.log(unSoundChange(soundChanges, ["bardgwo"], groupDict));
// console.log(unSoundChange(soundChanges, ["brardgo"], groupDict));
// console.log(unSoundChange(soundChanges, ["brawdgo"], groupDict));
// console.log(unSoundChange(soundChanges, ["bardgro"], groupDict));
// console.log(unSoundChange(soundChanges, ["bardgowbd"], groupDict));
// console.log(unSoundChange(soundChanges, ["bardgorbd"], groupDict));
// console.log(unSoundChange(soundChanges, ["barddddd"], groupDict));
// console.log(unSoundChange(soundChanges, ["barp"], groupDict));
// console.log(unSoundChange(soundChanges, ["brg"], groupDict));


//groupDictCreator tests

// console.log(groupDictCreator("C = [g, b, r, d]V = [a,e,o,i,u]L = [r, l,  w, j]P=[g,b,d]"));

//listSCs tests

// console.log(listSCs("dV > r / V_C"));
// console.log(listSCs("dV > r / V_C={p, t, k} > {b, d, g} / V_V"));
// console.log(listSCs("dV > r / V_C={p, t, k} w > b / V_V============================================"));
// console.log(listSCs("ɰ > w / $ _={g,ɢ} > {k,q}={g,ɢ} > ɰ / V _ V={iw,ew,aw,ow,uw} > {û,ô,ô,ô,û} / _ C={ij,ej,aj,oj,uj} > {î, ei, ai, oi, oi} * / _ C=ŋ > n={mm,ɲɲ,ŋŋ} > {mw,jj,ŋɰ}=h > * / _ $=h > * / _ C={i,e,a,o,u} h > {î,ê,â,ô,û} *=ʔ > * / $ _={i,e,a,o,u} > * / $ _ C {î,ê,â,ô,û}={ɲ,ʎ} > j / _ $={pː,tː,kː,qː} > {pp,tt,kk,qq}={pʰ,tʰ,kʰ,qʰ} > {p,t,k,q}={p,t,k,q} > {b,d,g,ɢ}={β,ð,ɣ} > {w,ʔ,ɰ}={pʰpʰ,tʰtʰ,kʰkʰ,qʰqʰ} > {hp,ht,hk,hq}={pp,tt,kk,qq} > {pː,tː,kː,qː}={β,ð,ɣ} > {b,d,g} / _ {î,ê,â,ô,û}={ββ,ðð,ɣɣ} > {b,d,g}={p,t,k,q} > {pʰ,tʰ,kʰ,qʰ} / $ _={pʰ,tʰ,kʰ,qʰ} > {ɸ,s,x,x} / $ _==="));