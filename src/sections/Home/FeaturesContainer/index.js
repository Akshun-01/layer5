import React from "react";

// Default imports
import Features from "../../../components/Features/index.js";
import CommentingImageDark from "./images/commenting.svg";
import CommentingImageLight from "./images/commenting-white.svg";
import TwoColLayout from "../../../components/Features/TwoColLayout.js";
// Named imports
import { Container } from "./style.js";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode.js";

// Functional component
const FeaturesContainer = () => {
  const { isDark } = useStyledDarkMode();
  const featuresInfo = [
    {
      title: "Collaborate with Precision",
      show_custom_cursor: true,
      animationOne: true,
      redirectLink: "/cloud-native-management/meshmap/collaborate/peer-reviews",
      desc: "Real-time collaboration for cloud and cloud native designs with live-editing, instant feedback, deploy dry runs, and secure access controls.",
      imgLink: isDark ? CommentingImageDark : CommentingImageLight,
      cursor: false
    },
    // {
    //   title: "Multi-Cloud by design",
    //   show_custom_cursor: false,
    //   animationOne: true,
    //   redirectLink: "",
    //   desc: "Incorporate AWS and GCP components into Meshery designs for comprehensive and intuitive system mapping, documentation, and orchestration.",
    //   imgLink: isDark ? AWSImage : AWSImageLight,
    //   cursor: true,
    //   redirectLinkWithImage: [
    //     {
    //       text: "Amazon Web Services",
    //       image: isDark ? AWSLogoDark : AWSLogoLight,
    //       redirect: "/cloud-native-management/generate-aws-architecture-diagram"
    //     },
    //     {
    //       text: "Google Cloud Platform",
    //       image: GCPLogo,
    //       redirect: "/cloud-native-management/generate-gcp-architecture-diagram"
    //     }
    //   ]
    // },
  ];

  return (
    <>
      <Container>
        <h1 className="title">
          Deploy <i>faster </i>together with <span>Confidence</span>
        </h1>
        <p className="subtitle">
          Give your team full application visibility at every layer so the team
          can ship, refactor and onboard faster.
        </p>
        {/* Tools to help you scale your cloud native infrastructure */}
        {/* Elevate teamwork with integrated communication channels, ensuring efficient and secure project success. */}
        {/* a suite of annotation and visualization tools, allowing users to draw, annotate, and collaborate in real-time on their cloud native designs. */}

        {
          featuresInfo.map((feature) => (
            <Features
              key={feature.title}
              title={feature.title}
              show_custom_cursor={feature.show_custom_cursor}
              animationOne={feature.animationOne}
              redirectLink={feature.redirectLink}
              desc={feature.desc}
              imgLink={feature.imgLink}
              cursor={feature.cursor}
              redirectLinkWithImage={feature.redirectLinkWithImage}
            />))
        }
        <TwoColLayout />
      </Container>
    </>
  );
};

export default FeaturesContainer;
