import { Container, Main } from '@/styles/sharedstyles'
import { LoginContainer } from '@/styles/loginstyles'
import { LoginForm } from '@/components/LoginForm'

export default function Home() {
  return (
    <Container>
      <Main>
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </Main>
    </Container>
  )
}
