import { InternalCSS } from '@stitches/react'
import React, { FocusEventHandler, useCallback, useState } from 'react'
import { styled } from '../../stitches.config'

const InputWrapper = styled('div', {
    $$height: '34px',
    $$textColor: '$colors$textPrimary',
    $$borderRadius: '$radii$3',
    $$borderWidth: '$borderWidths$1',
    $$borderStyle: 'solid',
    $$borderColor: '$colors$textSecondary',
    $$backgroundColor: 'transparent',
    $$hoverTextColor: '$$textColor',
    $$hoverBorderColor: '$colors$themePrimary',
    $$hoverBackgroundColor: 'transparent',
    $$waveShadowColor: '$$hoverBorderColor',
    color: '$$textColor',
    borderRadius: '$$borderRadius',
    lineHeight: '$$height',
    height: '$$height',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    variants: {
        danger: {
            true: {
                $$borderColor: '$colors$red500',
                $$hoverBorderColor: '$colors$red400',
            },
        },
        disabled: {
            true: {
                $$textColor: '$colors$textSecondary',
                background: '$textTertiary',
            },
        },
    },
})

const InputPrefix = styled('div', {
    height: '$$height',
    borderRadius: '$$borderRadius',
    borderWidth: '$$borderWidth',
    borderStyle: '$$borderStyle',
    borderColor: '$$borderColor',
    borderRight: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: '0px $3',
})

const InputSuffix = styled('div', {
    height: '$$height',
    borderRadius: '$$borderRadius',
    borderWidth: '$$borderWidth',
    borderStyle: '$$borderStyle',
    borderColor: '$$borderColor',
    borderLeft: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: '0px $3',
})

const InputContainer = styled('div', {
    height: '$$height',
    position: 'relative',
    display: 'inline-block',
    borderRadius: '$$borderRadius',
    borderWidth: '$$borderWidth',
    borderStyle: '$$borderStyle',
    borderColor: '$$borderColor',
    variants: {
        disabled: {
            false: {
                '&:hover': {
                    $$backgroundColor: '$$hoverBackgroundColor',
                    $$borderColor: '$$hoverBorderColor',
                },
            },
        },
        focus: {
            true: {
                borderColor: '$$hoverBorderColor',
            },
        },
        prefix: {
            true: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            },
        },
        suffix: {
            true: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            },
        },
    },
})

const InputBackground = styled('div', {
    position: 'absolute',
    top: -1,
    bottom: -1,
    left: -1,
    right: -1,
    opacity: 0.3,
    borderRadius: '$$borderRadius',
    transition: 'background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease',
    variants: {
        focus: {
            true: {
                boxShadow: '0 0 0 3px $$waveShadowColor',
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
        prefix: {
            true: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            },
        },
        suffix: {
            true: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            },
        },
    },
})

const StyledInput = styled('input', {
    display: 'flex',
    height: '$$height',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$2',
    color: '$$textColor',
    backgroundColor: '$$backgroundColor',
    boxSizing: 'border-box',
    fontSize: '$2',
    fontWeight: '$1',
    fontStretch: 'normal',
    fontFamily: '$untitled',
    borderRadius: '$$borderRadius',
    border: 0,
    outline: 0,
    padding: '0px $3',
    position: 'relative',
    variants: {
        disable: {
            true: {
                cursor: 'not-allowed',
            },
        },
        prefix: {
            true: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            },
        },
        suffix: {
            true: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            },
        },
    },
})

export interface IInputProps<T> {
    value?: T
    defaultValue?: T
    onChange?: (newValue?: T) => void
    css?: InternalCSS
    inputContainerCSS?: InternalCSS
    inputCSS?: InternalCSS
    backgroundCSS?: InternalCSS
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    onFocus?: FocusEventHandler<HTMLInputElement>
    onBlur?: FocusEventHandler<HTMLInputElement>
    danger?: boolean
    disabled?: boolean
}

export function Input<T extends string | number>({
    css,
    inputContainerCSS,
    inputCSS,
    backgroundCSS,
    value,
    defaultValue,
    onChange,
    prefix,
    suffix,
    onFocus,
    onBlur,
    danger,
    disabled,
}: IInputProps<T>) {
    const [focus, setFocus] = useState(false)

    const handleFocus = useCallback(
        (e) => {
            if (disabled) {
                return
            }
            setFocus(true)
            onFocus?.(e)
        },
        [disabled, onFocus]
    )

    const handleBlur = useCallback(
        (e) => {
            if (disabled) {
                return
            }
            setFocus(false)
            onBlur?.(e)
        },
        [disabled, onBlur]
    )

    const handleChange = useCallback(
        (e) => {
            onChange?.(e?.target?.value)
        },
        [onChange]
    )

    return (
        <InputWrapper css={css} danger={danger} disabled={disabled}>
            {prefix && <InputPrefix>{prefix}</InputPrefix>}
            <InputContainer
                disabled={disabled}
                css={inputContainerCSS}
                focus={focus}
                prefix={!!prefix}
                suffix={!!suffix}
            >
                <InputBackground css={backgroundCSS} focus={focus} prefix={!!prefix} suffix={!!suffix} />
                <StyledInput
                    disabled={disabled}
                    disable={disabled}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={handleChange}
                    css={inputCSS}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    prefix={!!prefix}
                    suffix={!!suffix}
                />
            </InputContainer>
            {suffix && <InputSuffix>{suffix}</InputSuffix>}
        </InputWrapper>
    )
}
