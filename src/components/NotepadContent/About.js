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

                    Check out the <a target='_blank' href='https://etf.idealabs.network'>docs</a> to get started.
                </p>
            </Frame>
        </div>
    )
}

export default About