

// loader initial value
export const Loader_INI = 0


// loader reducer
export const LoaderReducer = (state, { type, payload }) => {

    switch (type) {
        case 'LOADER_START':            
            return 100
         
        case 'LOADER_END':
            return 0
    
        default:
            return state
    }

}