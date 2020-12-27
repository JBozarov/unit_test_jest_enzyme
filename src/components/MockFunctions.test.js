const service = new SprintFormService(); 
describe("testing addEnvironment", () => {

    it("rest sets addSprintResponse.updated.environment to false", async() => {
        // service.addEnvironment = jest.fn(() => {
        //     mockAddSprintResponse.updated.environment = false
        // })
        axios.post.mockImplementation(() => Promise.resolve(fakeBody).then(mockAddSprintResponse.updated.environment = false))
        await service.addEnvironment(fakeUrl, fakeBody, headers, sprintID, projectID)
        expect(mockAddSprintResponse.updated.environment).toBe(false)
        expect(axios.post.mockImplementation()).toHaveBeenCalledTimes(1)
        expect(axios.post.mockImplementation()).toHaveBeenCalledWith(fakeUrl, fakeBody, headers)
    })

    it("returns error when bad request is made", async() => {
        const errorMessage = {"data": "Bad Request. An input field has an invalid value" }
        axios.post.mockImplementation(() => Promise.reject(new Error(errorMessage)))
        const check = await service.addEnvironment(fakeUrl, fakeBody, headers, sprintID, projectID)   
        expect(check).toEqual(errorMessage.errorMessage)
        expect(axios.post.mockImplementation()).toHaveBeenCalledTimes(1)
        expect(axios.post.mockImplementation()).toHaveBeenCalledWith(fakeUrl, fakeBody, headers)
    })

})
