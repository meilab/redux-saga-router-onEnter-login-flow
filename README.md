Login flow using redux-saga react-router onEnter hooks

##Features
* redux-saga: handle the Async actions
  * retrieve images from flickr
  * login flow
* react-router:
  * onEnter: hooks to control the login flow.
    * redirect to login page if not logged in
    * redirect to user target page after login success
    * dynamic router split
    * dynamic redux store split using `store.replaceReducer` for Component `Gallery`
* redux-form: Store the form in redux store
* Ramda: functional data process