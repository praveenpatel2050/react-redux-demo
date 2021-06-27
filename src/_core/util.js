export function createReducer( initialState, handlers) {
    const reducer = ( state = initialState, action ) => {
        const { type } = action;

        if ( 'production' !== process.env.NODE_ENV && 'type' in action && ! type ) {
            throw new TypeError(
                'Reducer called with undefined type.' +
                ' Verify that the action type is defined in _core/action-types.js'
            );
        }

        if ( handlers.hasOwnProperty( type ) ) {
            return handlers[ type ]( state, action );
        }

        return state;
    };

    reducer.hasCustomPersistence = true;
    /*reducer.subscribe = (value) => {

    };*/
    return reducer;
}
