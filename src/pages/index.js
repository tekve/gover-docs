import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Translate, { translate } from "@docusaurus/Translate";

function FeatureCard({ titleId, titleDefault, descId, descDefault, link }) {
  return (
    <div className="col col--4">
      <div className="card margin-bottom--lg">
        <div className="card__header">
          <h3>
            <Translate id={titleId}>{titleDefault}</Translate>
          </h3>
        </div>
        <div className="card__body">
          <p>
            <Translate id={descId}>{descDefault}</Translate>
          </p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={link}>
            <Translate id="homepage.learnMore">Learn More</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({ id: "homepage.layoutTitle", message: "Home" })}
      description={translate({
        id: "homepage.layoutDesc",
        message:
          "Gover Documentation - Compliance, Risk & Governance Made Simple",
      })}
    >
      <main>
        <section className="margin-vert--xl">
          <div className="container">
            <div className="row">
              <FeatureCard
                titleId="homepage.gettingStarted.title"
                titleDefault="Getting Started"
                descId="homepage.gettingStarted.desc"
                descDefault="New to Gover? Learn the basics and get up and running quickly."
                link="/docs/getting-started/intro"
              />
              <FeatureCard
                titleId="homepage.userGuide.title"
                titleDefault="User Guide"
                descId="homepage.userGuide.desc"
                descDefault="Detailed guides for frameworks, controls, risks, documents, and tasks."
                link="/docs/user-guide/frameworks/overview"
              />
              <FeatureCard
                titleId="homepage.adminGuide.title"
                titleDefault="Admin Guide"
                descId="homepage.adminGuide.desc"
                descDefault="Configure your organization, manage users, and customize settings."
                link="/docs/admin-guide/organization-settings"
              />
            </div>
            <div className="row margin-top--lg">
              <FeatureCard
                titleId="homepage.frameworks.title"
                titleDefault="Framework Guides"
                descId="homepage.frameworks.desc"
                descDefault="Specific guidance for GDPR, ISO 27001, NIS2, and more."
                link="/docs/frameworks/gdpr"
              />
              <FeatureCard
                titleId="homepage.ai.title"
                titleDefault="AI Assistant"
                descId="homepage.ai.desc"
                descDefault="Learn how to use Gover's AI for intelligent suggestions."
                link="/docs/user-guide/ai-assistant/overview"
              />
              <FeatureCard
                titleId="homepage.risks.title"
                titleDefault="Risk Management"
                descId="homepage.risks.desc"
                descDefault="Identify, assess, and treat risks with customizable scoring."
                link="/docs/user-guide/risks/overview"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
