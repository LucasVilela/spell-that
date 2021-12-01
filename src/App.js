import React, { useState } from "react";
import "./styles.css";

const alphabet = {
  a: "(Ei) Alpha",
  b: "(Bi) Bravo",
  c: "(Ci) Charlie",
  d: "(Di) Delta",
  e: "(I) Echo",
  f: "(Ef) Foxtrot",
  g: "(LLi) Golf",
  h: "(EICH) Hotel",
  i: "(Ai) India",
  j: "(Yei) Juliet",
  k: "(Kei) Kilo",
  l: "(El) Lima",
  m: "(Em) Mike",
  n: "(En) November",
  o: "(Ou) Oscar",
  p: "(Pi) Papa",
  q: "(Kiu) Qubec",
  r: "(Ar) Romeo",
  s: "(Es) Sierra",
  t: "(Ti) Tango",
  u: "(Yu) Uniform",
  v: "(Vi) Victor",
  w: "(Dobliyu) Whiskey",
  x: "(Ex) X-ray",
  y: "(Wai) Yankee",
  z: "(ZI - Zet) Zulu",
  "@": "@at",
  ".": "dot",
};

export default function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="App">
        <h1>Spell {input} for me</h1>
        <label>
          <input className="form__input" type="text" name="name" onChange={e => setInput(e.target.value.toLocaleLowerCase())} />
        </label>
        <div style={{ textAlign: "left" }}>
          {input.split("").map((i, index) => (
            <p className="letter" key={index}>
              {alphabet[i]}
            </p>
          ))}
        </div>
      </div>
      <a id="bottom" href="http://www.lucasvilela.com" target="blank">
        Made by Lucas
      </a>
    </>
  );
}
