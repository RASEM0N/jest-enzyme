import commonSlice, {
    increment,
    decrement,
    incrementStore,
    decrementStore,
    commonReducer,
} from '../common.bundle'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { store } from '../index'

describe('store', () => {
    // it('should', () => {
    //     return expectSaga(incrementStore)
    //         .withReducer(commonReducer)
    //         .delay(200)
    //         .dispatch(increment())
    //         .hasFinalState({
    //             number: 0,
    //         })
    //         .run()
    //         .then((result) => {
    //             console.log(result)
    //         })
    // })

    describe('with store', () => {
        it('decrement + increment', () => {
            store.dispatch(decrement())
            expect(store.getState().common.number).toBe(-1)

            store.dispatch(increment())
            expect(store.getState().common.number).toBe(0)
        })
    })

    describe('common module', () => {
        let commonReducer

        beforeAll(() => {
            commonReducer = commonSlice.reducer
        })

        it('increment', () => {
            expect(commonReducer(undefined, increment())).toEqual({
                number: 1,
            })
        })

        it('decrement', () => {
            expect(commonReducer(undefined, decrement())).toEqual({
                number: -1,
            })
        })

        it('async increment', () => {
            testSaga(incrementStore).next().delay(3000).next().put(increment()).finish()
        })

        it('async decrement', () => {
            testSaga(decrementStore).next().delay(3000).next().put(decrement()).finish()
        })
    })
})
