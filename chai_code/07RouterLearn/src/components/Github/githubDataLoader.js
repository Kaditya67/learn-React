const githubDataLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Kaditya67')
    return response.json()
}

export default githubDataLoader
