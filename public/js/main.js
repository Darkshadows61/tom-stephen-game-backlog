//Constants
//Tom
    const deleteTomText = document.querySelectorAll('#tom-trash')
    const thumbTomText = document.querySelectorAll('#tom-thumbs-up')
    const thumbDownTomText = document.querySelectorAll('#tom-thumbs-down')
    const finishTomText = document.querySelectorAll('#tom-finish')
    const thumbTomFinish = document.querySelectorAll('#tom-thumbs-up-finish')
    const thumbDownTomFinish = document.querySelectorAll('#tom-thumbs-down-finish')
    const finishTomDelete = document.querySelectorAll('#tom-trash-finish')
    //Stephen
    const deleteStephenText = document.querySelectorAll('#stephen-trash')
    const thumbStephenText = document.querySelectorAll('#stephen-thumbs-up')
    const thumbDownStephenText = document.querySelectorAll('#stephen-thumbs-down')
    const finishStephenText = document.querySelectorAll('#stephen-finish')
    const thumbStephenFinish = document.querySelectorAll('#stephen-thumbs-up-finish')
    const thumbDownStephenFinish = document.querySelectorAll('#stephen-thumbs-down-finish')
    const finishStephenDelete = document.querySelectorAll('#stephen-trash-finish')
//Sean
    const deleteSeanText = document.querySelectorAll('#sean-trash')
    const thumbSeanText = document.querySelectorAll('#sean-thumbs-up')
    const thumbDownSeanText = document.querySelectorAll('#sean-thumbs-down')
    const finishSeanText = document.querySelectorAll('#sean-finish')
    const thumbSeanFinish = document.querySelectorAll('#sean-thumbs-up-finish')
    const thumbDownSeanFinish = document.querySelectorAll('#sean-thumbs-down-finish')
    const finishSeanDelete = document.querySelectorAll('#sean-trash-finish')

//Tom Array
Array.from(deleteTomText).forEach((element)=>{
    element.addEventListener('click', deleteTomGame)
})
Array.from(thumbTomText).forEach((element)=>{
    element.addEventListener('click', addOneTomLike)
})
Array.from(thumbDownTomText).forEach((element =>{
    element.addEventListener('click', subOneTomLike)
}))
Array.from(finishTomText).forEach((element) =>{
    element.addEventListener('click', finishTomGame)
    element.addEventListener('click', deleteTomGame)
})
Array.from(thumbTomFinish).forEach((element)=>{
    element.addEventListener('click', addOneTomLikeFinish)
})
Array.from(thumbDownTomFinish).forEach((element =>{
    element.addEventListener('click', subOneTomLikeFinish)
}))
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

async function subOneTomLike(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('subOneTomLike', {
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

async function addOneTomLikeFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('addOneTomLikeFinish', {
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

async function subOneTomLikeFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('subOneTomLikeFinish', {
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


//Stephen Array
Array.from(deleteStephenText).forEach((element)=>{
    element.addEventListener('click', deleteStephenGame)
})
Array.from(thumbStephenText).forEach((element)=>{
    element.addEventListener('click', addOneStephenLike)
})
Array.from(thumbDownStephenText).forEach((element =>{
    element.addEventListener('click', subOneStephenLike)
}))
Array.from(finishStephenText).forEach((element) =>{
    element.addEventListener('click', finishStephenGame)
    element.addEventListener('click', deleteStephenGame)
})
Array.from(thumbStephenFinish).forEach((element)=>{
    element.addEventListener('click', addOneStephenLikeFinish)
})
Array.from(thumbDownStephenFinish).forEach((element =>{
    element.addEventListener('click', subOneStephenLikeFinish)
}))
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

async function subOneStephenLike(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('subOneStephenLike', {
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

async function addOneStephenLikeFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('addOneStephenLikeFinish', {
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

async function subOneStephenLikeFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('subOneStephenLikeFinish', {
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
//Sean Array
Array.from(deleteSeanText).forEach((element)=>{
    element.addEventListener('click', deleteSeanGame)
})
Array.from(thumbSeanText).forEach((element)=>{
    element.addEventListener('click', addOneSeanLike)
})
Array.from(thumbDownSeanText).forEach((element =>{
    element.addEventListener('click', subOneSeanLike)
}))
Array.from(finishSeanText).forEach((element) =>{
    element.addEventListener('click', finishSeanGame)
    element.addEventListener('click', deleteSeanGame)
})
Array.from(thumbSeanFinish).forEach((element)=>{
    element.addEventListener('click', addOneSeanLikeFinish)
})
Array.from(thumbDownSeanFinish).forEach((element =>{
    element.addEventListener('click', subOneSeanLikeFinish)
}))
Array.from(finishSeanDelete).forEach((element) =>{
    element.addEventListener('click', deleteSeanGameFinish)
})

//Sean Async Await
async function deleteSeanGame(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    try{
        const res = await fetch('deleteSeanGame', {
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

async function deleteSeanGameFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    try{
        const res = await fetch('deleteSeanGameFinish', {
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

async function addOneSeanLike(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('addOneSeanLike', {
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

async function subOneSeanLike(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('subOneSeanLike', {
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

async function finishSeanGame(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('finishSeanGame', {
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

async function addOneSeanLikeFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('addOneSeanLikeFinish', {
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

async function subOneSeanLikeFinish(){
    const name = this.parentNode.childNodes[1].innerText
    const platform = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const res = await fetch('subOneSeanLikeFinish', {
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