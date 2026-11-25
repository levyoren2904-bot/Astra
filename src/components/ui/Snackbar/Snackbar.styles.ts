import styled, { css, keyframes } from 'styled-components'

const enter = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`

const leave = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(16px); }
`

// Same surface as the home-page menu and tooltips: #fbfbfb, radius 16,
// the 2/2/16 shadow. Bottom corner on the reading-start side: in Hebrew (RTL)
// that is bottom-RIGHT. A logical property, so it mirrors itself with dir.
export const Root = styled.div<{ $leaving: boolean }>`
  position: fixed;
  bottom: 40px;
  inset-inline-start: 40px;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #fbfbfb;
  border-radius: 16px;
  box-shadow: 2px 2px 16px 0px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  /* keyframes inside a prop function need the css helper (styled-components v6) */
  ${({ $leaving }) =>
    $leaving
      ? css`
          animation: ${leave} 220ms ease-in forwards;
        `
      : css`
          animation: ${enter} 220ms ease-out forwards;
        `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: ${({ $leaving }) => ($leaving ? 0 : 1)};
  }
`

export const Message = styled.p`
  font-family: Rubik, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #111122;
  margin: 0;
  line-height: normal;
`

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-inline-start: 8px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: #f0f0f2;
  }
`
