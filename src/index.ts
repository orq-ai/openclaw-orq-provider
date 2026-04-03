import { defineSingleProviderPluginEntry } from "openclaw/plugin-sdk/provider-entry";
import { applyOrqConfig } from "./onboard.js";
import { buildOrqModelDefinitions, ORQ_BASE_URL, ORQ_DEFAULT_MODEL_REF } from "./orq-models.js";

const PROVIDER_ID = "orq";

async function buildOrqProvider() {
  return {
    baseUrl: ORQ_BASE_URL,
    api: "openai-completions" as const,
    models: buildOrqModelDefinitions(),
  };
}

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
        hint: "API key",
        optionKey: "orqApiKey",
        flagName: "--orq-api-key",
        envVar: "ORQ_API_KEY",
        promptMessage: "Enter Orq API key",
        defaultModel: ORQ_DEFAULT_MODEL_REF,
        applyConfig: (cfg) => applyOrqConfig(cfg),
        noteMessage: [
          "Orq AI provides an OpenAI-compatible router for multiple model providers.",
          "Get your API key at: https://my.orq.ai",
        ].join("\n"),
        noteTitle: "Orq AI",
        wizard: {
          groupLabel: "Orq AI Router",
        },
      },
    ],
    catalog: {
      buildProvider: buildOrqProvider,
    },
  },
});
