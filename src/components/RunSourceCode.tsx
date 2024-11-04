const RunSourceCode = () => {
  return (
    <div id="run-source-code">
      <p className="font-medium font-serif text-xl mb-6 hover:cursor-pointer">
        Run Source Code
      </p>

      <div className="flex flex-col gap-6">
        <section>
          <h3 className="doc-header">Install Node.js and NPM</h3>
          <p className="doc-body">
            <span className="font-medium">Note:</span> If you already have{" "}
            <span className="font-mono">npm</span> and{" "}
            <span className="font-mono">node.js</span> installed, you can skip
            this step.
          </p>
          <p className="doc-body">
            The app is developed using TypeScript with Electron and React, with
            dependencies managed via NPM. To run or build the source code,
            you’ll need both <span className="font-mono">Node.js</span> and{" "}
            <span className="font-mono">npm</span> installed on your system. You
            can download them from the following link:
          </p>
          <ul className="doc-ul">
            <li className="doc-li">
              <span className="font-medium mr-3">Node.js: </span>
              <a href="https://nodejs.org/en/download/package-manager">
                https://nodejs.org/en/download/package-manager
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="doc-header">
            Clone repository and install dependencies
          </h3>
          <p className="doc-body">
            1. Open a terminal window and use the following command to clone the
            MAI Translator repository to your local directory:
          </p>
          <p className="doc-code">
            git clone https://github.com/terrence-ou/MAI-Translator.git
          </p>
          <p className="doc-body">
            2. Navigate to the MAI Translator project folder:
          </p>
          <p className="doc-code">cd MAI-Translator</p>
          <p className="doc-body">
            3. Install the necessary packages by running:
          </p>
          <p className="doc-code">npm install</p>
          <p className="doc-body">4. Start the app in development mode:</p>
          <p className="doc-code">npm run dev</p>
        </section>
      </div>
    </div>
  );
};

export default RunSourceCode;
