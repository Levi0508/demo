import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  box-sizing: border-box;
  flex-shrink: 0;
`

export interface IFooterProps {
  height?: string
  style?: React.CSSProperties
  className?: string
}

export const Footer: React.FC<PropsWithChildren<IFooterProps>> = (props) => {
  const { height = '60px', children, style, className } = props
  return (
    <StyledFooter style={{ height, ...style }} className={className}>
      {children}
    </StyledFooter>
  )
}
