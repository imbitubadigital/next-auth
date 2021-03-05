import * as S from '../styles/pages/login'
import Head from 'next/head'

const Login: React.FC = () => {
  return (
    <>
      <Head>
        <title>Página de Login</title>
      </Head>
      <S.Container>
        <S.Content>
          <h1>Faça seu login</h1>
          <input type="email" placeholder="Seu email" required />
          <input type="password" placeholder="Sua senha" required />
          <button type="submit">Entrar</button>
        </S.Content>
      </S.Container>
    </>
  )
}

export default Login
