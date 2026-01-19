#!/usr/bin/env node
import { exec } from 'child_process';

const isWin = process.platform === 'win32';

const cmd = isWin
  ? `powershell -NoProfile -Command "Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -and $_.CommandLine -match 'preview' -and ($_.CommandLine -match 'npm' -or $_.Name -match 'node' -or $_.CommandLine -match 'vite') } | ForEach-Object { Write-Output \"KILLING PID:$($_.ProcessId) $($_.Name)\"; Stop-Process -Id $_.ProcessId -Force }"`
  : `sh -c "pgrep -f preview | xargs -r kill -9 || true"`;

exec(cmd, { maxBuffer: 1024 * 1024 }, (err, stdout, stderr) => {
  if (stdout) console.log(stdout.trim());
  if (stderr) console.error(stderr.trim());
  if (err) {
    console.error('Error running stop command:', err.message || err);
    process.exit(1);
  } else {
    console.log('Done.');
    process.exit(0);
  }
});
