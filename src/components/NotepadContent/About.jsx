import { Frame } from "@react95/core";
import React from "react";

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
        <h2>The Bull Marketing Company</h2>
        <p>
          Welcome to <b>The Bull Marketing Company</b>, where we take your
          crypto marketing to the next level. If you're not with us, you're
          clearly missing out. Why? Because we are the <b>meme maxis</b> of the
          industry, powered by cutting-edge <b>AI-Powered</b> strategies. Do you
          want to know the key to increasing profits? Just cut costs by 50%!
          Simple, right?
          <br />
          <br />
          Check out our{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://thebullmarketing.com"
          >
            portfolio
          </a>{" "}
          to see our bulls in action.
        </p>

        <h3>Go Full Bull</h3>
        <p>
          Here at The Bull Marketing Company, we believe in going full bull or
          nothing at all. Our team of degenerate chads lives and breathes Wall
          Street, crypto, and memes. We know what it takes to pump your brand
          and make it <b>alpha</b>.
          <ul>
            <li>
              <b>Meme maxis</b>: Our campaigns are not just ads; they are meme
              masterpieces that go viral.
            </li>
            <li>
              <b>AI-Powered</b>: We use advanced AI to analyze trends and
              optimize your reach.
            </li>
            <li>
              <b>Be alpha, get alpha</b>: We don't just follow trends; we set
              them. Choose rich, choose us.
            </li>
          </ul>
        </p>

        <h3>Bulls Only</h3>
        <p>
          If you're here talking bear, you're in the wrong place.{" "}
          <b>That's bear talk</b>, and we're all about the bulls.
          <ul>
            <li>
              <b>Pre-rich</b>: Our clients are always on the verge of greatness.
              Don't be left behind.
            </li>
            <li>
              <b>Choose rich</b>: It's a simple choice. Go with the best or get
              left in the dust.
            </li>
            <li>
              <b>Bulls only</b>: Our community is exclusive, and only the
              boldest brands make the cut.
            </li>
          </ul>
        </p>
      </Frame>
    </div>
  );
}

export default About;
