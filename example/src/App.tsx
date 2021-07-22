import React from 'react'

import { Button } from 'lias-ui'

const App = () => {
    return (
        <div
            style={{
                padding: 100,
            }}
        >
            <Button
                type='primary'
                danger
                prefix={<span>❤️</span>}
                onClick={(e) => {
                    console.log(e)
                }}
            >
                测试而已
            </Button>
        </div>
    )
}

export default App
