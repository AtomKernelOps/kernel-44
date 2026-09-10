   ```svelte
    <script>
      import CommHub from './CommHub.svelte';
      import Orchestrator from './Orchestrator.svelte';
      import Dashboard from './Dashboard.svelte';
      import SecurityMonitor from './SecurityMonitor.svelte';

      let currentView = 'Hub'; 
    </script>

    <div class="app-container">
      <header>
        <h1>Kernel-44</h1>
        <SecurityMonitor />
        <nav>
          <button on:click={() => currentView = 'Hub'}>Hub</button>
          <button on:click={() => currentView = 'Orchestrator'}>Build</button>
          <button on:click={() => currentView = 'Dashboard'}>Pulse</button>
        </nav>
      </header>
      <main>
        {#if currentView === 'Hub'} <CommHub />
        {:else if currentView === 'Orchestrator'} <Orchestrator />
        {:else} <Dashboard />
        {/if}
      </main>
    </div>

    <style>
      :global(body) { margin: 0; font-family: sans-serif; }
      .app-container { max-width: 500px; margin: 0 auto; padding: 1rem; }
      nav { display: flex; gap: 10px; margin-top: 1rem; }
    </style>
    ```
*   **Scroll down** and click the green **"Commit changes"** button.
