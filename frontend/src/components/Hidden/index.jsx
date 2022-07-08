

export const Hidden = () => {
    return (
            <>
            {/* Gradient to apply in svg */}
            <svg aria-hidden="true" style={{width: 0, height: 0, position: 'absolute'}} focusable="false">
                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                    <stop offset="0%" stop-color="#b535ff" />
                    <stop offset="100%" stop-color="#918af0" />
                </linearGradient>
            </svg>
            </>
    )
}

