import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postData: [
        {id: '1', message: 'Well done', likeCount:'3'},
        {id: '2', message: 'It\'s me Mario', likeCount:'4'}
    ],
    profile: null,
    status: ''
}

test('after deleting length of message shoulde be decremented', () => {
    // 1.test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postData.length).toBe(1);
});

test('length of posts shoulde be incremented', () => {
    // 1.test data
    let action = addPostActionCreator("Test post");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postData.length).toBe(3);
});

test('message of new post shoulde be correct', () => {
    // 1.test data
    let action = addPostActionCreator("Test post");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postData[2].message).toBe("Test post");
});



