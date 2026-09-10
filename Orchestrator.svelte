```svelte
<script>
  let businessIdea = '', businessMode = 'Seed', confidenceScore = 0, status = 'Standing by...';
  async function processVision() {
    status = `Analyzing ${businessMode} vision...`;
    confidenceScore = Math.floor(Math.random() * (95 - 70 + 1) + 70);
    status = 'Blueprint generated.';
  }
</script>

<textarea bind:value={businessIdea} placeholder="What business are we building today?"></textarea>
<select bind:value={businessMode}>
  <option value="Seed">Seed</option>
  <option value="Growth">Growth</option>
  <option value="Venture">Venture</option>
</select>
<button on:click={processVision}>Generate Blueprint</button>
<p>Status: {status} | Confidence: {confidenceScore}%</p>
```
