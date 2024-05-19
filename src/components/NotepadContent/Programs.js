import React from "react";

function Programs() {
  return (
    <div>
      <h4>Programs</h4>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ideal-lab5/terrabit"
          >
            TerraBit
          </a>{" "}
          is a web3 game/demo that uses onchain randomness to let users own
          unique onchain 'seeds' which are used to build procedurally generated
          hex worlds. It also incorporates secure delayed transactions to enable
          a 'transmutation' protocol where participants can trustlessly and
          non-interactively swap their worlds.
        </li>
      </ul>
    </div>
  );
}

export default Programs;
