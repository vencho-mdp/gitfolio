const generateWebsite = (repos, userData) => `
 <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Awesome Portfolio</title>
    </head>
    <body>
        <h1>My Awesome Portfolio</h1>
        <h2>My name is ${userData.name}</h2>
        <h3>My Github Repositories</h3>
        <ul>
            ${repos.map((repo) => `<li>${repo.name}</li>`).join('')}
        </ul>
    </body>
    </html>
`
export default (repos, userData) => {
    return generateWebsite(repos, userData)
} 