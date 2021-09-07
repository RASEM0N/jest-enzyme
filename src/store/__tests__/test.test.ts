import { expectSaga } from 'redux-saga-test-plan'
import { delay } from 'redux-saga/effects'

const saga = function* () {
    yield delay(200)

    return {
        hello: 'world',
    }
}

describe('test', () => {
    it('expectSaga', () => {
        return expectSaga(saga)
            .delay(200)
            .returns({
                hello: 'world',
            })
            .run()
    })
})
