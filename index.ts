import { defineSingleProviderPluginEntry } from "openclaw/plugin-sdk/provider-entry";
import { applyOrqConfig } from "./onboard.js";
import { ORQ_DEFAULT_MODEL_REF } from "./orq-models.js";

const PROVIDER_ID = "orq";

export default defineSingleProviderPluginEntry({
  id: PROVIDER_ID,
  name: "Orq Provider",
  description: "Orq AI router provider plugin",
  provider: {
    label: "Orq AI Router",
    docsPath: "/providers/orq",
    auth: [
      {
        methodId: "api-key",
        label: "Orq AI API key",
        hint: "OpenAI-compatible router",
        optionKey: "orqApiKey",
        flagName: "--orq-api-key",
        envVar: "ORQ_API_KEY",
        promptMessage: "Enter Orq API key",
        defaultModel: ORQ_DEFAULT_MODEL_REF,
        applyConfig: (cfg) => applyOrqConfig(cfg),
        noteMessage: [
          "Orq AI provides an OpenAI-compatible router for multiple model providers.",
          "Get your API key at: https://cloud.orq.ai",
        ].join("\n"),
        noteTitle: "Orq AI",
        wizard: {
          groupLabel: "Orq AI Router",
        },
      },
    ],
  },
});
