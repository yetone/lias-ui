import React, { MouseEventHandler, useCallback, useRef, useState } from 'react'
import { styled, keyframes } from '../../stitches.config'

const waveAnimation = keyframes({
    '0%': {
        opacity: '0.6',
        boxShadow: '0 0 0 0 $$waveShadowColor',
    },
    '50%': { opacity: '0.4', boxShadow: '0 0 0 2px $$waveShadowColor' },
    '100%': { opacity: '0.1', boxShadow: '0 0 0 3px $$waveShadowColor' },
})

const StyledButton = styled('button', {
    '$$textColor': '$colors$textPrimary',
    '$$borderColor': '$colors$textSecondary',
    '$$backgroundColor': 'transparent',
    '$$hoverTextColor': '$colors$themePrimary',
    '$$hoverBorderColor': '$colors$themePrimary',
    '$$hoverBackgroundColor': 'transparent',
    '$$waveShadowColor': '$$hoverBorderColor',
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'gap': '$2',
    'backgroundColor': '$$backgroundColor',
    'boxSizing': 'border-box',
    'borderWidth': '$1',
    'borderStyle': 'solid',
    'borderColor': '$$borderColor',
    'color': '$$textColor',
    'cursor': 'pointer',
    'fontSize': '$2',
    'fontWeight': '$1',
    'fontStretch': 'normal',
    'fontFamily': '$untitled',
    'borderRadius': '$1',
    'outline': 0,
    'padding': '$2 $3',
    'position': 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: -1,
        bottom: -1,
        left: -1,
        right: -1,
        borderRadius: '$1',
        boxShadow: '0 0 0 0 $$waveShadowColor',
        opacity: 0,
    },
    '&:hover': {
        color: '$$hoverTextColor',
        backgroundColor: '$$hoverBackgroundColor',
        borderColor: '$$hoverBorderColor',
    },
    'variants': {
        primary: {
            true: {
                $$textColor: '$colors$backgroundPrimary !important',
                $$hoverTextColor: '$$textColor !important',
                $$borderColor: '$colors$themePrimary',
                $$backgroundColor: '$$borderColor',
                $$hoverBorderColor: '$colors$themeSecondary',
                $$hoverBackgroundColor: '$$hoverBorderColor',
            },
        },
        danger: {
            true: {
                $$textColor: '$colors$red500',
                $$hoverTextColor: '$colors$red500',
                $$borderColor: '$colors$red500',
                $$hoverBorderColor: '$colors$red400',
            },
        },
        wave: {
            true: {
                '&::after': {
                    animation: `${waveAnimation} 500ms`,
                },
            },
        },
    },
})

export interface IButtonProps {
    children: React.ReactNode
    type?: 'primary' | 'default'
    danger?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    prefix?: React.ReactNode
    suffix?: React.ReactNode
}

export function Button({ prefix, suffix, children, type = 'default', danger, onClick }: IButtonProps) {
    const [wave, setWave] = useState(false)
    const waveTimerRef = useRef<number>()
    const handleClick = useCallback(
        (e) => {
            setWave(false)
            setImmediate(() => {
                if (waveTimerRef.current) {
                    window.clearTimeout(waveTimerRef.current)
                }
                setWave(true)
                waveTimerRef.current = window.setTimeout(() => {
                    setWave(false)
                }, 530)
            })
            onClick?.(e)
        },
        [onClick]
    )

    return (
        <StyledButton primary={type === 'primary'} danger={danger} wave={wave} onClick={handleClick}>
            {prefix && <span className='prefix'>{prefix}</span>}
            <span>{children}</span>
            {suffix && <span className='suffix'>{suffix}</span>}
        </StyledButton>
    )
}
