//Constants
//Tom
    const deleteTomText = document.querySelectorAll('#tom-trash')
    const thumbTomText = document.querySelectorAll('#tom-thumbs-up')
    const finishTomText = document.querySelectorAll('#tom-finish')
    const finishTomDelete = document.querySelectorAll('#tom-trash-finish')
//Stephen
    const deleteStephenText = document.querySelectorAll('#stephen-trash')
    const thumbStephenText = document.querySelectorAll('#stephen-thumbs-up')
    const finishStephenText = document.querySelectorAll('#stephen-finish')
    const finishStephenDelete = document.querySelectorAll('#stephen-trash-finish')

//Tom Array
Array.from(deleteTomText).forEach((element)=>{
    element.addEventListener('click', deleteTomGame)
})

Array.from(thumbTomText).forEach((element)=>{
    element.addEventListener('click', addOneTomLike)
})

Array.from(finishTomText).forEach((element) =>{
    element.addEventListener('click', finishTomGame)
    element.addEventListener('click', deleteTomGame)
})

Array.from(finishTomDelete).forEach((element) =>{
    element.addEventListener('click', deleteTomGameFinish)
})

//Tom async await
async function deleteTomGame(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    try{
        const res = await fetch('deleteTomGame', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
              'platform': platform
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function deleteTomGameFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    try{
        const res = await fetch('deleteTomGameFinish', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
              'platform': platform
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addOneTomLike(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('addOneTomLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
              'platform': platform,
              'likes': tLikes
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function finishTomGame(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('finishTomGame', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
              'platform': platform,
              'likes': tLikes
            })
        })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}


//Stephen Array
Array.from(deleteStephenText).forEach((element)=>{
    element.addEventListener('click', deleteStephenGame)
})

Array.from(thumbStephenText).forEach((element)=>{
    element.addEventListener('click', addOneStephenLike)
})

Array.from(finishStephenText).forEach((element) =>{
    element.addEventListener('click', finishStephenGame)
    element.addEventListener('click', deleteStephenGame)
})

Array.from(finishStephenDelete).forEach((element) =>{
    element.addEventListener('click', deleteStephenGameFinish)
})

//Stephen Async Await
async function deleteStephenGame(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    try{
        const res = await fetch('deleteStephenGame', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
              'platform': platform
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function deleteStephenGameFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    try{
        const res = await fetch('deleteStephenGameFinish', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
              'platform': platform
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addOneStephenLike(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('addOneStephenLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
              'platform': platform,
              'likes': tLikes
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function finishStephenGame(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('finishStephenGame', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'name': name,
              'platform': platform,
              'likes': tLikes
            })
        })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}