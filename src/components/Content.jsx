import React from "react";

const Content = () => {
  return (
    <div>
      <div className="max-w-[1320] md:py-[80] py-5 flex mx-auto sm:flex-row flex-col">
        <div className="basis-[45%] pb-5">
          <img
            src="https://wittysparks.com/wp-content/uploads/2020/05/businessman-happy-with-bitcoin-funding-investment-1536x1063.jpg"
            className="w-full"
          />
        </div>
        <div className="basis-[55%] px-5">
          <h1 className="text-4xl pb-5 ">
            BlockchainBoost : Empowering Innovation through Blockchain
            Crowdfunding
          </h1>
          <p className="py-3">
            At BlockchainBoost, we're changing the way the world funds
            innovation. Our blockchain-powered platform makes it easier and more
            secure for creators to raise funds and for supporters to invest in
            projects they're passionate about.
          </p>
          <p className="py-3">
            Decentralization means that there is no central authority
            controlling the platform, making it more secure and transparent.
            Transparency allows all parties to see how funds are being used.
            Security makes it difficult to hack or defraud the platform. Low
            fees make it more affordable for creators to raise funds and for
            supporters to invest in projects.
          </p>
          <p className="py-3">
            Whether you're a creator with a great idea or a supporter who wants
            to invest in innovative projects, we invite you to join us at
            BlockchainBoost. Together, we can build a more equitable and
            inclusive future for crowdfunding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
