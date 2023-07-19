<script lang="ts">
  import { page } from "$app/stores";
</script>

<!-- Navigation bar -->
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="flex-1">
      <span class="normal-case text-xl ml-4 font-bold">Chat Roomer</span>
    </div>
  </div>
  {#if $page.data.session}
    <div class="navbar-center">
      <span class="normal-case text-xl">
        Welcome
        <span class="font-bold">{$page.data.session.user?.name}</span>
      </span>
    </div>
  {:else}
    <span class="normal-case text-xl">Hi!</span>
  {/if}
  <div class="navbar-end">
    {#if $page.data.session}
      <button class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          /></svg
        >
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            /></svg
          >
          <span class="badge badge-xs badge-primary indicator-item" />
        </div>
      </button>
    {:else}
      <a href="/auth/signin">
        <button class="btn btn-accent btn-outline">Sign In</button></a>
    {/if}
  </div>
</div>

<!-- Rest of the Page -->
<div class="min-h-screen my-[-100px] flex items-center justify-center">
  <div class="max-w-3xl w-full p-8 rounded-lg shadow-md">
    <h1 class="text-4xl font-bold mb-8">Welcome to the Chat Roomer!</h1>
    <p class="text-xl mb-4">
      Start connecting with friends and family, and stay in touch with our
      simple and intuitive chat app.
    </p>
    <p class="text-xl mb-4">
      With our app, you can send messages, share media, and stay connected with
      your loved ones, no matter where they are in the world.
    </p>
    <a href="/auth/signin">
      <button class="btn my-10 btn-accent">
        Get Started
      </button>
    </a>
  </div>
</div>