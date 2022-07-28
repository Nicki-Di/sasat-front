const logger = store => next => action => {
    console.log("Action: ", action)
    next(action) // first do the action
    console.log("Store: ", store.getState()) // then log the store
}

export default logger