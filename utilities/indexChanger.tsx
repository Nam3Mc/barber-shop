import { useState } from "react"
import { Barber } from "../types/barber.interface"

export default function IndexChanger ( arr: Barber[], visibleCount: number = 3 ) {
    const [startIndex, setStartIndex] = useState(0)

    const canGoNext = startIndex + visibleCount < arr.length
    const canGoPrev = startIndex > 0

    const handleNext = () => {
        if (canGoNext) setStartIndex(startIndex + 1)
    }

    const handlePrev = () => {
        if (canGoPrev) setStartIndex(startIndex-1)
    }

    const visibleItems = arr.slice(startIndex, startIndex + visibleCount)

    return {
        visibleItems,
        handleNext,
        handlePrev,
        canGoNext,
        canGoPrev
    }
}