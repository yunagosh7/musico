import React from 'react'

type Props = {
    className?: string;
}

export default function PlayIcon({
    className = ""
}: Props) {
    return (
        <svg className={className}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="PlayArrowIcon">
            <path d="M8 5v14l11-7z">
            </path>
        </svg>
    )
}