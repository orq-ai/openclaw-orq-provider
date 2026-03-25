import {
  createDefaultModelsPresetAppliers,
  type OpenClawConfig,
} from "openclaw/plugin-sdk/provider-onboard";
import { buildOrqModelDefinitions, ORQ_BASE_URL, ORQ_DEFAULT_MODEL_REF } from "./orq-models.js";

const orqPresetAppliers = createDefaultModelsPresetAppliers({
  primaryModelRef: ORQ_DEFAULT_MODEL_REF,
  resolveParams: (_cfg: OpenClawConfig) => ({
    providerId: "orq",
    api: "openai-completions",
    baseUrl: ORQ_BASE_URL,
    defaultModels: buildOrqModelDefinitions(),
    aliases: [{ modelRef: ORQ_DEFAULT_MODEL_REF, alias: "Orq" }],
  }),
});

export function applyOrqProviderConfig(cfg: OpenClawConfig): OpenClawConfig {
  return orqPresetAppliers.applyProviderConfig(cfg);
}

export function applyOrqConfig(cfg: OpenClawConfig): OpenClawConfig {
  return orqPresetAppliers.applyConfig(cfg);
}
