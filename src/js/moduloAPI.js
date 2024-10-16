export const URL_API_LIVROS = "https://api-aula.up.railway.app/livros"


export async function chamadaPOST(url, titulo, descricao) {
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titulo,
            description: descricao
        })
    }
    
    const response = await fetch(url, settings)
    const Response = response.json()
    return Response
    
}

export async function chamadaGET(url) {
    const Response = await fetch(url)
    const response = Response.json()
    return response
}


export function construirTabelaComLivros(livros) {
    const corpoTabela = document.getElementById("tabela-livros__tbody")
    corpoTabela.innerHTML = ""

    livros.forEach( livro => {
        corpoTabela.innerHTML +=
        `<tr>
            <td>${livro.id}</td>
            <td>${livro.title}</td>
            <td>${livro.description}</td>
        </tr>`

    })

}

