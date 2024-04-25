export function getPostData(id){
    const postOne = {
        title: 'One',
        id: '1',
        date: '2/3/2020'
    }

    const postTwo = {
        title: 'Two',
        id: '2',
        date: '2/3/2021'
    }

    if(id == 'one'){
        return postOne
    }else if(id == 'two'){
        return postTwo
    }
    
}

export function getAllPostIds() {
    return [{
        params: {
            id: 'one'
        }
    },{
        params: {
            id: 'two'
        }
    }]
}