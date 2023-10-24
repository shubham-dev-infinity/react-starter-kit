import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type TAuth = {
    isLoggedIn: boolean;
    token: string | null
}

const initialState: TAuth = {
    isLoggedIn: false,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<{ token: string }>) => {
            const { token } = action.payload
            state.token = token
            state.isLoggedIn = true
        },
    }
})

export const { setAuth } = authSlice.actions


export default authSlice.reducer

