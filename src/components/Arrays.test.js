
import foo from '../Arrays'


const fakeArray = [1, 2, 3]

describe("testing arrays", () => {
    it("shoud add var into array ", () => {
        const fakevar = "kdjkd"
        foo(fakeArray, fakevar)
        expect(fakeArray.length).toBe(24)
    })
})
