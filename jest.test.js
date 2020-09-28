test('test common match', () => {
    expect(2 + 2).toBe(4)
    expect(2 + 2).not.toBe(5)
})

test('test to be true or false', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('test number', () => {
    expect(4).toBeGreaterThan(3)
    expect(2).toBeLessThan(4)
})

test('tetst object', () => {
    expect({ name: 'jack' }).toEqual({ name: 'jack' })
})