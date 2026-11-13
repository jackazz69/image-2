'use client';
import { useState } from "react"
import Link from "next/link"
import { Template } from "../components/Template"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const entrar = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui entra a verificação real (API, NextAuth, etc.)
    console.log("Login:", { email, senha })
    alert(`Login enviado para: ${email}`)
  }

  return (
    <main>
      <Template>
        <h1>Login</h1>

        <form onSubmit={entrar}>
          <div>
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <br />
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>

          <button type="submit">Entrar</button>
        </form>

        <Link href="/">
          <button>Voltar</button>
        </Link>
      </Template>
    </main>
  )
}