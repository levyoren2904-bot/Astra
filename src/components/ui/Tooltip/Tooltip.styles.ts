import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Arrow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #fbfbfb;
  filter: drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.1));
`

export const Card = styled.div`
  background: #fbfbfb;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 2px 2px 16px 0px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
`

export const Label = styled.p`
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #5d607a;
  margin: 0;
  text-align: right;
  line-height: normal;
`

export const PopoverContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  padding-top: 6px;
`
