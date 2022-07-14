const logger = param => store => next => action => {
    console.log(action, " dispatched")
    next(action)
    console.log(param, " ", store.getState())
}

export default logger