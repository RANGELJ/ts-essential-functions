const buildDebouncedFunction = <FunctionParams extends unknown[], FunctionReturn>(
    milliseconds: number,
    func: (...params: FunctionParams) => FunctionReturn,
) => {
    let timer: ReturnType<typeof setTimeout> | undefined

    return (...params: FunctionParams) => {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            func(...params)
        }, milliseconds)
    }
}

export default buildDebouncedFunction
