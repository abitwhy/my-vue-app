// Invoked on the commit-msg git hook by simple-git-hooks.
// origin from https://github.com/vitejs/vite/blob/main/scripts/verifyCommit.ts

import { readFileSync } from 'fs'

// get $1 from commit-msg script
const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  /* eslint-disable no-console */
  console.log(
    `[${new Date().toLocaleString()}] > ERROR:`,
    `'${msg}' is a invalid commit message format!`
  )
  process.exit(1)
}
