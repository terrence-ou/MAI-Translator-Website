import { Settings } from "lucide-react";

const HowToUse = () => {
  return (
    <div>
      <p
        className="font-medium font-serif text-xl mb-6 hover:cursor-pointer"
        // onClick={() => navigate("/releases")}
      >
        Download & Run APP
      </p>
      <div className="flex flex-col gap-6">
        <section>
          <h3 className="doc-header">Download the APP</h3>
          <p className="doc-body">
            Currently, the app is only tested and optimized for the Apple
            Silicon platform due to a limited development environment. You can
            download the app by clicking the “Download” button in the upper
            right corner of this page.
          </p>
        </section>
        <section>
          <h3 className="doc-header">Obtain API Keys from AI Providers</h3>
          <p className="doc-body">
            MAI Translator integrates with multiple AI models, including DeepL,
            OpenAI, and Claude, to deliver accurate translation results. To
            enable translation functionality, you’ll need to add API keys from
            each provider. Use the following links to obtain API keys for each
            service:
          </p>
          <ul className="doc-ul">
            <li className="doc-li">
              <span className="font-medium mr-3">DeepL:</span>
              <a href="https://www.deepl.com/en/pro-api">
                https://www.deepl.com/en/pro-api
              </a>
            </li>
            <li className="doc-li">
              <span className="font-medium mr-3">OpenAI:</span>
              <a href="https://platform.openai.com/docs/overview">
                https://platform.openai.com/docs/overview
              </a>
            </li>
            <li className="doc-li">
              <span className="font-medium mr-3">Claude:</span>
              <a href="https://console.anthropic.com/dashboard">
                https://console.anthropic.com/dashboard
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="doc-header">Configure API Keys</h3>
          <p className="doc-body">
            Click the{" "}
            <span className="font-medium">
              settings icon{" "}
              <Settings className="inline" height={17} strokeWidth={"1.5px"} />
            </span>{" "}
            in the top right corner of the app to open the settings menu.
          </p>
          <p className="doc-body">
            In the settings menu, paste the API keys you obtained from the
            providers listed above. Make sure to add them to the app as soon as
            you retrieve them, as you may not be able to access the keys again
            after closing the provider pages.
          </p>
        </section>
        <section>
          <h3 className="doc-header">Select the Appropriate AI Model</h3>
          <p className="doc-body">
            AI models vary in pricing and performance. For instance:
          </p>
          <ul className="doc-ul">
            <li className="doc-li">
              <span className="font-medium">GPT-4o</span>: $2.50 per million
              input tokens and $10.00 per million output tokens.
            </li>
            <li className="doc-li">
              <span className="font-medium">GPT-4o-mini</span>: $0.150 per
              million input tokens and $0.600 per million output tokens.
            </li>
          </ul>
          <p className="doc-body">
            Consider these costs when selecting models for your translation
            tasks to ensure optimal balance between budget and performance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HowToUse;
