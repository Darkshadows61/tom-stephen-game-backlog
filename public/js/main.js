//Tom
    const deleteGameBacklog = document.querySelectorAll('#trash')
    const gameFinishBacklog = document.querySelectorAll('#finish')

//Array
Array.from(deleteGameBacklog).forEach((element)=>{
    element.addEventListener('click', deleteGame)
})
Array.from(gameFinishBacklog).forEach((element)=>{
    element.addEventListener('click', finishGame)
    element.addEventListener('click', deleteGame)
    })

//Async Await
async function deleteGame(){
    const player = this.parentNode.childNodes[1].innerText
    const name = this.parentNode.childNodes[3].innerText
        try{
        const res = await fetch('deleteGame', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'player': player,
                'name': name,
                                               
                })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function finishGame(){
    const player = this.parentNode.childNodes[1].innerText
    const name = this.parentNode.childNodes[3].innerText
    const platform = this.parentNode.childNodes[5].innerText
    const complete = this.parentNode.childNodes[9].innerText
       try{
        const res = await fetch('finishGame', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'player': player,
                'name': name,
                'platform': platform,
                'complete': complete
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}
