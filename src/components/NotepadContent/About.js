import { Frame } from '@react95/core'
import React from 'react'

function About() {
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
                <h2>Ideal Labs</h2>
                <p>
                    We are building the ETF network, enabling <b>publicly verifiable onchain randomness</b>,
                    <b>timelock encryption</b>, and <b>secure delayed transactions</b>.
                    <br/><br/>
                    Check out the <a target='_blank' href='https://etf.idealabs.network'>docs</a> to get started.
                </p>

                <p>
                    Blockchains empower the development of decentralized applications,
                    liberating them from the constraints of centralized authorities.
                    Despite this liberation, web3 systems often lack certain capabilities
                    that are inherently present in web2 systems. Unlike web2 systems,
                    which effortlessly generate random numbers and facilitate non-interactive
                    asynchronous multiparty interactions, web3 systems encounter challenges
                    due to their trustless nature. This project aims to provide publicly
                    verifiable onchain randomness, timelock encryption, and secure delayed
                    transaction (front-running resistant) capabilities for web3 systems.
                    With these, it becomes possible to use random values within smart contracts as
                    well as enable on-chain, non-interactive, async protocols.
                    <br/><br/>
                    This project aims to enable onchain protocols that are...

                    <ul>
                        <li><b>Non-interactive</b>: Participants can engage without requiring interaction or knowledge of each other.</li>
                        <li><b>Eventually-consistent</b>: The protocol ensures completion by a predetermined deadline for all honest players.</li>
                        <li><b>Front-running resistant</b>: Participants can maintain the confidentiality of their inputs until a specified future deadline, at which point they are collectively revealed.</li>
                    </ul>
                </p>
            </Frame>
        </div>
    )
}

export default About