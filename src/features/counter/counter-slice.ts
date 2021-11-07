import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment
        incremented(state){
            state.value++;
        },
        // decrement
        decremented(state){
            state.value--;
        },
        // reset
        amountResetted(state){
            state.value = 0;
        },
        // add amount
        amountAdded(state, action: PayloadAction<number>) {
            state.value = action.payload;
        }
    }
});

export const {incremented, decremented, amountResetted, amountAdded} = counterSlice.actions;
export default counterSlice.reducer;