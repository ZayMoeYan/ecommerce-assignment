import {createAppSlice} from "@/lib/createAppSlice";
import {ReducerCreators} from "@reduxjs/toolkit";

export type CounterSlice = {
    count: number
}

const initialState: CounterSlice = {
    count: 0
}

export const counterSlice = createAppSlice({
    name: 'counter',
    initialState,
    reducers: (create: ReducerCreators<CounterSlice>) => ({
        increment: (state: CounterSlice) => {
            state.count += 1;
        },
        decrement: (state: CounterSlice) => {
            if(state.count !== 0) {
                state.count -= 1;
            }
        },
        resetCount: (state: CounterSlice) => {
            state.count = 0;
        },
    }),
    selectors: {
        selectCount: (state) => state.count
    }
})

export const { increment, decrement, resetCount } = counterSlice.actions;
export const { selectCount } = counterSlice.selectors;
