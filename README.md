# @openclaw/orq-provider

OpenClaw plugin that adds [Orq AI](https://orq.ai) as a model provider. Routes requests through the Orq AI router, giving you access to 30+ models from Anthropic, Google, OpenAI, Groq, and Cerebras via a single API key.

## Install

```bash
openclaw plugins install @openclaw/orq-provider
openclaw gateway restart
```

## Setup

1. Get an API key at [cloud.orq.ai](https://cloud.orq.ai)
2. Run onboarding or set the key directly:

```bash
# Via onboarding
openclaw onboard --orq-api-key <your-key>

# Or via environment variable
export ORQ_API_KEY=<your-key>
```

## Available models

The plugin registers models from multiple providers through the Orq router:

| Provider  | Models                                                  |
| --------- | ------------------------------------------------------- |
| Anthropic | Claude Opus 4.5, Sonnet 4.5, Haiku 4.5                  |
| Google    | Gemini 2.5 Pro/Flash, 3 Pro/Flash Preview (AI + Vertex) |
| OpenAI    | GPT-5, GPT-5 Mini, GPT-5 Nano, GPT-5.2                  |
| Groq      | Llama 3.x/4.x, Kimi K2, GPT OSS, Qwen 3                 |
| Cerebras  | GPT OSS 120B, Llama 3.x, Qwen 3                         |

The default model is `orq/openai/gpt-5.2`.

## Development

```bash
# Install locally for testing
openclaw plugins install ./path/to/openclaw-orq-provider

# Or link from the openclaw repo
cd ../openclaw
pnpm install
```

## License

MIT
