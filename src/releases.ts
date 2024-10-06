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
    version: "0.5.3",
    date: "10/04/2024",
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
