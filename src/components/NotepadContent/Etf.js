import { Frame } from '@react95/core'
import React from 'react'

function EtfInfo() {
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
                <h2>The ETF Network</h2>
                <p>
                The ETF network ("Encryption to the Future") is a Substrate-based blockchain that implements a novel consensus mechanism where network authorities leak secrets over time. Powered by identity based encryption and zero knoweldge proofs, the network enables:
                    <ul>
                        <li>
                            <b>publicly verifiable onchain randomness</b>: block headers contain IBE secrets and DLEQ proofs, with a new secret calcualted with each block
                        </li>
                        <li>
                            non-interactive <b>timelock encryption</b> with no restrictions: encryption and decryption are done offchain with no impact to the underlying network
                        </li>
                        <li>
                            <b>secure delayed transactions</b> with timelock encryption, providing front-running protection and other unique capabilities
                        </li>
                    </ul>


                    Read the <a target='_blank' rel="noreferrer" href='https://etf.idealabs.network'>docs</a> to get started.
                </p>
            </Frame>
        </div>
    )
}

export default EtfInfo