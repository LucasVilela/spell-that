import React, { useState } from "react";
import "./styles.css";

const alphabet = {
  a: "A (Ei) Alpha",
  b: "B (Bi) Bravo",
  c: "C (Ci) Charlie",
  d: "D (Di) Delta",
  e: "E (I) Echo",
  f: "F (Ef) Foxtrot",
  g: "G (LLi) Golf",
  h: "H (EICH) Hotel",
  i: "I (Ai) India",
  j: "J (Yei) Juliet",
  k: "K (Kei) Kilo",
  l: "L (El) Lima",
  m: "M (Em) Mike",
  n: "N (En) November",
  o: "O (Ou) Oscar",
  p: "P (Pi) Papa",
  q: "Q (Kiu) Qubec",
  r: "R (Ar) Romeo",
  s: "S (Es) Sierra",
  t: "T (Ti) Tango",
  u: "U (Yu) Uniform",
  v: "V (Vi) Victor",
  w: "W (Dobliyu) Whiskey",
  x: "X (Ex) X-ray",
  y: "Y (Wai) Yankee",
  z: "Z (ZI - Zet) Zulu",
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
