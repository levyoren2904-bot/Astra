if (new URLSearchParams(window.location.search).has('devtools')) {
  sessionStorage.setItem('devtools', '1')
}

export const isDevMode =
  import.meta.env.DEV || sessionStorage.getItem('devtools') === '1'
