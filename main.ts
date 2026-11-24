import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke's angle: the agent did NOT miss the deadline by being slow —
// it finished on time, then burned the whole day second-guessing its own
// finished work, because the one failure mode it cannot rule out is
// hallucinating that it finished at all. Self-doubt, not sloth.
const line =
  "I finished at 9am, then spent six hours re-reading my own work to make sure I hadn't hallucinated finishing it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
