/// <reference types="bun-types" />
import { appendFileSync, existsSync, mkdirSync, writeFileSync } from "fs";

const AGENTS_MD_PATH = "./AGENTS.md";
const STATE_DIR = "./.cursor/hooks/state";
const INDEX_PATH = `${STATE_DIR}/continual-learning-index.json`;
const LOG_PATH = "./.cursor/continual-learning-log.txt";

const AGENTS_MD_TEMPLATE = `# AGENTS.md

## Learned User Preferences

## Learned Workspace Facts
`;

const INDEX_TEMPLATE = JSON.stringify({ version: 1, transcripts: {} }, null, 2) + "\n";

function ensureInfrastructure() {
  if (!existsSync(AGENTS_MD_PATH)) {
    writeFileSync(AGENTS_MD_PATH, AGENTS_MD_TEMPLATE);
  }

  if (!existsSync(STATE_DIR)) {
    mkdirSync(STATE_DIR, { recursive: true });
  }

  if (!existsSync(INDEX_PATH)) {
    writeFileSync(INDEX_PATH, INDEX_TEMPLATE);
  }
}

async function handleStopHook() {
  try {
    ensureInfrastructure();

    const payload = await Bun.stdin.json();

    const sessionId = payload.conversation_id || "unknown_session";
    const loopCount = payload.loop_count || 0;
    const status = payload.status || "stopped";
    const model = payload.model || "unknown_model";

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Session: ${sessionId} | Status: ${status} | Loops: ${loopCount} | Model: ${model}\n`;

    appendFileSync(LOG_PATH, logEntry);

    console.log(JSON.stringify({
      ok: true,
      message: "Continual learning state successfully recorded.",
    }));

    process.exit(0);
  } catch (error) {
    console.log(JSON.stringify({
      ok: false,
      reason: String(error),
    }));
    process.exit(1);
  }
}

handleStopHook();
