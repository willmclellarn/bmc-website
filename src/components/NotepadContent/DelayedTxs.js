import { Frame } from '@react95/core'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const setupCode = `
    npm i @ideallabs/etf.js
  `;

const etfSetupCode = `
let etf = new Etf('wss://etf1.idealabs.network:443')
await etf.init()`;

const code = `
// the call to delay
let innerCall = etf.api.tx.balances
  .transferKeepAlive('5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', 100);
// calculate a deadline (slot)
let latest = etf.getLatestSlot();
// 20 blocks from now
let deadline = latest + 20;
// prepare delayed call
let outerCall = etf.delay(innerCall, 127, deadline);
await outerCall.signAndSend(alice, result => {
  if (result.status.isInBlock) {
    console.log('in block')
  }
});
`;

function DelayedTxs() {

    const [copiedSetup, setCopiedSetup] = useState(false);
    const [copiedEtf, setCopiedEtf] = useState(false);
    const [copiedCode, setCopiedCode] = useState(false);

    const handleCopy = (id) => {
        switch (id) {
            case 'setup':
                setCopiedSetup(true);
                setTimeout(() => setCopiedSetup(false), 1500);
            case 'code':
                setCopiedCode(true);
                setTimeout(() => setCopiedCode(false), 1500);
            case 'etf':
                setCopiedEtf(true);
                setTimeout(() => setCopiedEtf(false), 1500);
            default:
            // do nothing
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
                <h2>Delayed Transactions</h2>
                <h3>Setup</h3>
                <p>
                    Secure delayed transactions on the ETF network work by using timelock encryption to encrypt call data and then scheduling
                    the future decryption and execution of these calls. They ensure that call data is hidden until executed. 
                    
                    The <a target="_blank" href="https://github.com/ideal-lab5/etf.js">etf.js</a> library exposes an API to construct, sign, and submit 
                     secure delayed transactions. 
                </p>
                <div>
                    <p>
                        Add it to a project with npm
                    </p>
                    <CopyToClipboard text={setupCode} onCopy={() => handleCopy('setup')}>
                        <button>{copiedSetup ? 'Copied!' : 'Copy'}</button>
                    </CopyToClipboard>
                    <SyntaxHighlighter language="rust" style={solarizedlight}>
                        {setupCode}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <p>
                        Initalize ETF to connect to a network:
                    </p>
                    <CopyToClipboard text={etfSetupCode} onCopy={() => handleCopy('etf')}>
                        <button>{copiedEtf ? 'Copied!' : 'Copy'}</button>
                    </CopyToClipboard>
                    <SyntaxHighlighter language="rust" style={solarizedlight}>
                        {etfSetupCode}
                    </SyntaxHighlighter>
                    <p>
                        To create a secure delayed transaction for 20 blocks from now, first create a call and then use the etf.js library to prepare a delayed transaction:
                    </p>
                    <CopyToClipboard text={code} onCopy={() => handleCopy('code')}>
                        <button>{copiedCode ? 'Copied!' : 'Copy'}</button>
                    </CopyToClipboard>
                    <SyntaxHighlighter language="rust" style={solarizedlight}>
                        {code}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <h3>Examples</h3>
                    <ul>
                        <li>
                            <p>
                                <a target='_blank' href="https://github.com/ideal-lab5/etf.js/tree/main/examples/react-delayed-txs">react-delayed-txs</a>
                                A simple react example of submitting a delayed transaction from the browser.
                            </p>
                        </li>
                        <li>
                            <a target='_blank' href='https://github.com/ideal-lab5/terrabit'>TerraBit</a> is a web3 game/demo that uses onchain randomness to let users own unique
                             onchain 'seeds' which are used to build procedurally generated hex worlds. It also incorporates secure delayed transactions to enable a 'transmutation' protocol 
                             where participants can trustlessly and non-interactively swap their worlds.
                        </li>
                    </ul>
                </div>
            </Frame>
        </div>
    )
}

export default DelayedTxs