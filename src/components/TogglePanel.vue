<template>
  <div class="container">
    <h2 class="trigger">
      <button :aria-expanded="toggleStatus === 'open' ? 'true' : 'false'" @click.prevent="toggle">
        <slot name="trigger"></slot>
      </button>
      <svg viewBox="0 0 512 512" aria-hidden="true">
        <path d="M60 99.333l196 196 196-196 60 60-256 256-256-256z"></path>
      </svg>
    </h2>
    <div class="panel" :class="{ 'open': toggleStatus === 'open' }">
      <slot name="panel"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleStatus: 'collapsed'
    };
  },
  methods: {
    toggle() {
      this.toggleStatus = this.toggleStatus === 'collapsed' ? 'open' : 'collapsed';
    }
  }
};
</script>