import { useState } from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}!`)
    }

    const [name, setName] = useState()
    const [password, setPassord] = useState()

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Digite o seu nome" 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="name">Senha:</label>
                    <input type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Digite a senha" 
                    onChange={(e) => setPassord(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form