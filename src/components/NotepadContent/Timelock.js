import { Frame } from "@react95/core";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const setupCode = `
    npm i @ideallabs/etf.js
  `;

const etfSetupCode = `
let etf = new Etf('wss://etf1.idealabs.network:443')
await etf.init()`;

const tlockCode = `
let message = new TextEncoder().encode("encrypt me!");
let slot = etf.getLatestSlot();
// 10 blocks from now, 20 blocks from now, 30....
let slotSchedule = [slot + 10, slot + 20, slot + 30]
// if both slot + 10 and slot + 20 have valid blocks, then it will be enough for decryption
let threshold = 2;
let seed = "random-seed";
let out = etf.encrypt(message, threshold, slotSchedule, seed);
`;

const decryptCode = `
let m = await etf.decrypt(ciphertext, nonce, capsule, slotSchedule)
let message = String.fromCharCode(...m)
`;

function Timelock() {
  const [copiedSetup, setCopiedSetup] = useState(false);
  const [copiedEtf, setCopiedEtf] = useState(false);
  const [copiedTlock, setCopiedTlock] = useState(false);
  const [copiedDecrypt, setCopiedDecrypt] = useState(false);

  const handleCopy = (id) => {
    switch (id) {
      case "setup":
        setCopiedSetup(true);
        setTimeout(() => setCopiedSetup(false), 1500);
        break;
      case "etf":
        setCopiedEtf(true);
        setTimeout(() => setCopiedEtf(false), 1500);
        break;
      case "tlock":
        setCopiedTlock(true);
        setTimeout(() => setCopiedTlock(false), 1500);
        break;
      case "decrypt":
        setCopiedDecrypt(true);
        setTimeout(() => setCopiedDecrypt(false), 1500);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Frame
        bg="white"
        boxShadow="in"
        height="100%"
        padding={20}
        style={{
          overflowY: "auto",
          maxHeight: "60vh",
        }}
      >
        <h2>Timelock Encryption</h2>
        <h3>Setup</h3>
        <p>
          The{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ideal-lab5/etf.js"
          >
            etf.js
          </a>{" "}
          library exposes timelock encryption capabilities for javascript-based
          applications. It is a wrapper around a wasm build of the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ideal-lab5/etf-sdk"
          >
            etf-sdk
          </a>{" "}
          rust library, containing the core timelock encryption implementation.
        </p>
        <div>
          <p>Add it to a project with npm</p>
          <CopyToClipboard text={setupCode} onCopy={() => handleCopy("setup")}>
            <button>{copiedSetup ? "Copied!" : "Copy"}</button>
          </CopyToClipboard>
          <SyntaxHighlighter language="rust" style={solarizedlight}>
            {setupCode}
          </SyntaxHighlighter>
        </div>
        <div>
          <p>Initalize ETF to connect to a network:</p>
          <CopyToClipboard text={etfSetupCode} onCopy={() => handleCopy("etf")}>
            <button>{copiedEtf ? "Copied!" : "Copy"}</button>
          </CopyToClipboard>
          <SyntaxHighlighter language="rust" style={solarizedlight}>
            {etfSetupCode}
          </SyntaxHighlighter>
        </div>
        <div>
          <h3>Encryption</h3>
          <p>
            Use etf to encrypt messages for the future. It can accept a
            threshold of future slots to encrypt for.
          </p>
          <CopyToClipboard text={tlockCode} onCopy={() => handleCopy("tlock")}>
            <button>{copiedTlock ? "Copied!" : "Copy"}</button>
          </CopyToClipboard>
          <SyntaxHighlighter language="rust" style={solarizedlight}>
            {tlockCode}
          </SyntaxHighlighter>
        </div>
        <div>
          <h3>Decryption</h3>
          <p>
            Use etf to decrypt messages when blocks have been authored in the
            specified slots in the slot schedule.
          </p>
          <CopyToClipboard
            text={decryptCode}
            onCopy={() => handleCopy("decrypt")}
          >
            <button>{copiedDecrypt ? "Copied!" : "Copy"}</button>
          </CopyToClipboard>
          <SyntaxHighlighter language="rust" style={solarizedlight}>
            {decryptCode}
          </SyntaxHighlighter>
        </div>
        <div>
          <h3>Examples</h3>
          <ul>
            <li>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ideal-lab5/etf.js/tree/main/examples/react-tlock"
                >
                  react-tlock
                </a>
                A simple example to demonstrate usage of timelock encryption and
                decryption in a react app.
              </p>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ideal-lab5/block-battalion"
              >
                block-battalion
              </a>{" "}
              is a web3 game/demo that useState timelock encryption to create a
              global event clock for all players. Based on a pre-defined 'slot
              schedule', players participate in a game of bit roulette by
              submitting timelocked ciphertexts prior to a deadline and
              revealing/calculating results after.
            </li>
          </ul>
        </div>
      </Frame>
    </div>
  );
}

export default Timelock;
