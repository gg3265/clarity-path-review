export function renderErrorPage(error?: any): string {
  const errorMessage = error?.message || String(error) || "Unknown error";
  const errorStack = error?.stack || "";
  
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Catastrophic Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 40rem; width: 100%; text-align: left; padding: 2rem; background: #fff; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); border-radius: 0.5rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; color: #dc2626; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      pre { background: #fef2f2; color: #991b1b; padding: 1rem; border-radius: 0.375rem; overflow-x: auto; font-size: 0.875rem; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Catastrophic SSR Error</h1>
      <p>The server encountered a fatal error during rendering.</p>
      <pre><code>${errorMessage}
${errorStack}</code></pre>
    </div>
  </body>
</html>`;
}
