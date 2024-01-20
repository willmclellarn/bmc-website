import { Frame } from '@react95/core'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const tomlCode = `
    [dependencies]
    etf-contract-utils = { git = "https://github.com/ideal-lab5/contracts", default-features = false, features = ["ink-as-dependency"] }

    [features]
    std = [
        "etf-contract-utils/std",
    ]
  `;

const envConfigCode = `
    use etf_contract_utils::ext::EtfEnvironment;
    #[ink::contract(env = EtfEnvironment)]
    mod your_smart_contract {
        use crate::EtfEnvironment;
        ...
    }`;

const chainExtCode = `
    let rand: [u8;48] = self.env()
        .extension()
        .secret();`;

function Randomness() {

    const [copiedToml, setCopiedToml] = useState(false);
    const [copiedEnv, setCopiedEnv] = useState(false);
    const [copiedExt, setCopiedExt] = useState(false);

    const handleCopy = (id) => {
        switch (id) {
            case 'toml':
                setCopiedToml(true);
                setTimeout(() => setCopiedToml(false), 1500);
                break;
            case 'env':
                setCopiedEnv(true);
                setTimeout(() => setCopiedEnv(false), 1500);
                break;
            case 'ext':
                setCopiedExt(true);
                setTimeout(() => setCopiedExt(false), 1500);
                break;
            default:
                // do nothing
        }
    //   setCopied(true);
      
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
                <h2>Publicly Verifiable Onchain Randomness</h2>
                <p>
                    The <a target="_blank" rel="noreferrer"href="https://github.com/ideal-lab5/contracts">ETF contracts tools</a> provide ink! smart contracts with the ability to fetch
                    randomness from the chain via a chain extension. We are working on
                    potential EVM support in the future.

                    Randomness can be injected into smart contract functions using the
                    ETFEnvironment type. In an ink! smart contract, include the dependency:
                </p>
                <div>
                    <CopyToClipboard text={tomlCode} onCopy={() => handleCopy('toml')}>
                        <button>{copiedToml ? 'Copied!' : 'Copy'}</button>
                    </CopyToClipboard>
                    <SyntaxHighlighter language="rust" style={solarizedlight}>
                        {tomlCode}
                    </SyntaxHighlighter>
                </div>
                <p>
                    Contracts must be configured to use the ETFEnvironment in order to use the chain extension
                </p>
                <div>
                    <CopyToClipboard text={envConfigCode} onCopy={() => handleCopy('env')}>
                        <button>{copiedEnv ? 'Copied!' : 'Copy'}</button>
                    </CopyToClipboard>
                    <SyntaxHighlighter language="rust" style={solarizedlight}>
                        {envConfigCode}
                    </SyntaxHighlighter>
                </div>
                <p>
                    Each latest block header contains a new 48-byte secret which can be used as a source of randomness 
                     by calling the chain extension:
                </p>
                <div>
                    <CopyToClipboard text={chainExtCode} onCopy={() => handleCopy('ext')}>
                        <button>{copiedExt ? 'Copied!' : 'Copy'}</button>
                    </CopyToClipboard>
                    <SyntaxHighlighter language="rust" style={solarizedlight}>
                        {chainExtCode}
                    </SyntaxHighlighter>
                </div>
            </Frame>
        </div>
    )
}

export default Randomness