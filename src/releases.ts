export type releaseType = {
  version: string;
  date: string;
  new_features?: string[];
  bug_fixes?: string[];
  links: {
    [key: string]: string;
  };
};

export default [
  {
    version: "0.8.0",
    date: "12/25/2024",
    new_features: [
      "Auto updater added.",
      "Mac Intel chip supported now.",
    ],
    links: {
      "MAI.Translator-arm64-0.8.0.zip":
        "https://github.com/terrence-ou/MAI-Translator/releases/download/v0.8.0/MAI.Translator-darwin-arm64-0.8.0.zip",
      "Source Code (zip)":
        "https://github.com/terrence-ou/MAI-Translator/archive/refs/tags/v0.8.0.zip",
    },
  },
  {
    version: "0.7.1",
    date: "11/06/2024",
    new_features: [
      "Updated ai-fetcher package to support Claude's new sonnet model.",
    ],
    links: {
      "MAI.Translator-arm64-0.7.1.zip":
        "https://github.com/terrence-ou/MAI-Translator/releases/download/v0.7.1/MAI.Translator-arm64-0.7.1.zip",
      "Source Code (zip)":
        "https://github.com/terrence-ou/MAI-Translator/archive/refs/tags/v0.7.1.zip",
    },
  },
  {
    version: "0.7.0",
    date: "11/01/2024",
    bug_fixes: [
      "The hidden .md files will be deleted along with the corresponding .txt files.",
      "Corrected unexpected UI interaction issue when attempting to delete the translation record.",
      "Added test cases, now the code coverage is over 80%.",
    ],
    links: {
      "MAI.Translator-arm64-0.7.0.zip":
        "https://github.com/terrence-ou/MAI-Translator/releases/download/v0.7.0/MAI.Translator-arm64-0.7.0.zip",
      "Source Code (zip)":
        "https://github.com/terrence-ou/MAI-Translator/archive/refs/tags/v0.7.0.zip",
    },
  },
  {
    version: "0.6.1",
    date: "10/26/2024",
    new_features: ["Latest Claude Sonnet 3.5 model enabled."],
    links: {
      "MAI.Translator-arm64-0.6.1.zip":
        "https://github.com/terrence-ou/MAI-Translator/releases/download/v0.6.1/MAI.Translator-arm64-0.6.1.zip",
      "Source Code (zip)":
        "https://github.com/terrence-ou/MAI-Translator/archive/refs/tags/v0.6.1.zip",
    },
  },
  {
    version: "0.6.0",
    date: "10/22/2024",
    new_features: [
      "Added a right-click menu for the side bar history card, with 'save as' and 'delete' actions available.",
      "Added 'clear' button to the result text area.",
    ],
    bug_fixes: ["Corrected the text opacity issue."],
    links: {
      "MAI.Translator-arm64-0.6.0.zip":
        "https://github.com/terrence-ou/MAI-Translator/releases/download/v0.6.0/MAI.Translator-arm64-0.6.0.zip",
      "Source Code (zip)":
        "https://github.com/terrence-ou/MAI-Translator/archive/refs/tags/v0.6.0.zip",
    },
  },
  {
    version: "0.5.4",
    date: "10/06/2024",
    bug_fixes: ["Sidebar display bug fixed."],
    links: {
      "MAI.Translator-arm64-0.5.4.zip":
        "https://github.com/terrence-ou/MAI-Translator/releases/download/v0.5.4/MAI.Translator-arm64-0.5.4.zip",
      "Source Code (zip)":
        "https://github.com/terrence-ou/MAI-Translator/archive/refs/tags/v0.5.4.zip",
    },
  },
  {
    version: "0.5.3",
    date: "10/03/2024",
    new_features: ["Text reading voice selection added."],
    bug_fixes: [
      "The audio play button disabled when the OpenAI key not provided.",
    ],
    links: {
      "MAI.Translator-arm64-0.5.3.zip":
        "https://github.com/terrence-ou/MAI-Translator/releases/download/v0.5.3/MAI.Translator-arm64-0.5.3.zip",
      "Source Code (zip)":
        "https://github.com/terrence-ou/MAI-Translator/archive/refs/tags/v0.5.3.zip",
    },
  },
] as releaseType[];
