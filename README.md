# @openclaw/orq-provider

OpenClaw plugin that adds [Orq AI](https://orq.ai) as a model provider. Routes requests through the Orq AI router, giving you access to 45+ models from multiple providers via a single API key.

## Install

### Option A: Use the orq-ai OpenClaw fork (recommended)

This plugin is bundled as a submodule in the [orq-ai OpenClaw fork](https://github.com/orq-ai/openclaw). Clone and install:

```bash
git clone --recurse-submodules https://github.com/orq-ai/openclaw.git
cd openclaw
pnpm install
```

The Orq provider is available out of the box — no extra plugin install step needed.

### Option B: Install as a standalone plugin

If you're running upstream OpenClaw:

```bash
git clone https://github.com/orq-ai/openclaw-orq-provider.git
openclaw plugins install ./openclaw-orq-provider

# Then restart the gateway
openclaw gateway restart
```

## Setup

1. Get an API key at [my.orq.ai](https://my.orq.ai)
2. Add `"orq"` to `plugins.allow` in `openclaw.json`:
   ```json
   "plugins": {
     "allow": ["orq", ...]
   }
   ```
3. Register the API key using one of these methods:

   **Interactive** — walks you through setup with prompts:
   ```bash
   openclaw onboard
   # Select "orq-api-key" when prompted for auth choice
   ```

   **One-liner** — no prompts:
   ```bash
   openclaw onboard --non-interactive --accept-risk \
     --auth-choice orq-api-key \
     --orq-api-key <your-key>
   ```

   **Environment variable** — the plugin reads this at startup:
   ```bash
   export ORQ_API_KEY=<your-key>
   ```

4. Restart the gateway: `openclaw gateway restart`

> **Note:** The onboard command may change your primary model. Check `agents.defaults.model.primary` in your config after running it.

## Available models

The plugin registers models from multiple providers through the Orq router:

| Provider   | Models                                                                   |
| ---------- | ------------------------------------------------------------------------ |
| Anthropic  | Claude Opus 4.5, Sonnet 4.5, Haiku 4.5                                  |
| Google     | Gemini 2.5 Pro/Flash, 3 Pro/Flash Preview, 3.1 Pro/Flash Lite Preview   |
| OpenAI     | GPT-5, GPT-5 Mini/Nano, GPT-5.2, GPT-5.4, GPT-5.4 Mini/Nano/Pro       |
| Groq       | Llama 3.x/4.x, Kimi K2, GPT OSS, Qwen 3                                |
| Cerebras   | GPT OSS 120B, Llama 3.x, Qwen 3                                         |
| DeepSeek   | DeepSeek Chat, DeepSeek Reasoner                                         |
| MoonshotAI | Kimi K2.5                                                                |
| Alibaba    | Qwen 3.5 Plus, Qwen 3.5 397B                                            |
| Z.AI       | GLM-5, GLM-4.7 Flash (free)                                             |
| MiniMax    | MiniMax M2.7                                                             |

The default model is `orq/openai/gpt-5.4-mini`.

## Development

```bash
# Install locally for testing
openclaw plugins install ./path/to/openclaw-orq-provider

# Or use the submodule in the openclaw fork
cd ../openclaw
pnpm install
```

## License

MIT
