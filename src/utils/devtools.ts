export const isDevMode =
  import.meta.env.DEV || new URLSearchParams(window.location.search).has('devtools')
