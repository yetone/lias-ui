import React from 'react'

import { Button, Input } from 'lias-ui'

const App = () => {
    return (
        <div
            style={{
                padding: 100,
            }}
        >
            <Input
                danger
                prefix={'xixi'}
                css={{
                    marginRight: '20px',
                }}
            />
            <Input
                disabled
                suffix={'xixi'}
                value='xixi'
                css={{
                    marginRight: '20px',
                }}
            />
            <Input
                prefix={'xixi'}
                suffix={'hehe'}
                css={{
                    marginRight: '20px',
                }}
            />
            <Input
                css={{
                    marginRight: '20px',
                }}
            />
            <div
                style={{
                    marginTop: '30px',
                }}
            >
                <Button
                    css={{
                        marginRight: '20px',
                    }}
                    type='primary'
                    danger
                    // eslint-disable-next-line jsx-a11y/accessible-emoji
                    prefix={<span>❤️</span>}
                    onClick={(e) => {
                        console.log(e)
                    }}
                >
                    测试而已
                </Button>
                <Button
                    disabled
                    css={{
                        marginRight: '20px',
                    }}
                    type='primary'
                    danger
                    // eslint-disable-next-line jsx-a11y/accessible-emoji
                    prefix={<span>❤️</span>}
                    onClick={(e) => {
                        console.log(e)
                    }}
                >
                    测试而已
                </Button>
                <Button
                    css={{
                        marginRight: '20px',
                    }}
                    type='primary'
                    // eslint-disable-next-line jsx-a11y/accessible-emoji
                    prefix={<span>❤️</span>}
                    onClick={(e) => {
                        console.log(e)
                    }}
                >
                    测试而已
                </Button>
                <Button
                    disabled
                    css={{
                        marginRight: '20px',
                    }}
                    type='primary'
                    // eslint-disable-next-line jsx-a11y/accessible-emoji
                    prefix={<span>❤️</span>}
                    onClick={(e) => {
                        console.log(e)
                    }}
                >
                    测试而已
                </Button>
                <Button
                    css={{
                        marginRight: '20px',
                    }}
                    // eslint-disable-next-line jsx-a11y/accessible-emoji
                    prefix={<span>❤️</span>}
                    onClick={(e) => {
                        console.log(e)
                    }}
                >
                    测试而已
                </Button>
                <Button
                    css={{
                        marginRight: '20px',
                    }}
                    disabled
                    // eslint-disable-next-line jsx-a11y/accessible-emoji
                    prefix={<span>❤️</span>}
                    onClick={(e) => {
                        console.log(e)
                    }}
                >
                    测试而已
                </Button>
            </div>
        </div>
    )
}

export default App
