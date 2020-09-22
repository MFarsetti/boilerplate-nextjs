import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/Logo.png"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, React JS, Next JS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/Illustration.png"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
