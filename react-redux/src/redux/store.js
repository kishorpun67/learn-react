import  {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../features/todo/todoSlice'
const store = configureStore({
    reducer: todoSlice,
    devTools:true,
})

export {store}