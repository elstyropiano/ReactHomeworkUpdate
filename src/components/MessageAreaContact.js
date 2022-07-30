import styled from 'styled-components'

export default ({ form }) => (
  <S.MainWrapper>
    {Object.keys(form).length !== 0 && (
      <div>
        <div>
          <span>User:</span>
          {` ${form.inputValue}`}
        </div>
        <div>
          <span>Message:</span>
          {` ${form.textareaValue}`}
        </div>
      </div>
    )}
  </S.MainWrapper>
)

const S = {
  MainWrapper: styled.div`
    margin-top: 10px;
    max-width: 1200px;
    width: 60vw;

    & div {
      margin-top: 10px;
      overflow-wrap: break-word;
      width: 600px;
      & span {
        font-weight: 600;
      }

      @media only screen and (max-width: 1000px) {
        max-width: 400px;
      }
    }
  `,
}
