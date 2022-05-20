function todoReducer(state = [], action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter((todo) => todo.id !== action.payload);
        case 'toggle':
            return state.map((todo) => todo.id === action.payload ?
                { ...todo, isDone: !todo.isDone } : todo);
        default:
            return state;
    }
}

export default todoReducer;