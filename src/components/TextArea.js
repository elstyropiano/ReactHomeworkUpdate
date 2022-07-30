import styled from 'styled-components'

export default ({ setTextareaValue, textareaValue }) => (
  <S.TextArea
    maxLength="1000"
    onChange={(event) => setTextareaValue(event.target.value)}
    placeholder="Write message"
    value={textareaValue}
  />
)

const S = {
  TextArea: styled.textarea`
    font-size: 18px;
    height: 40vh;
    max-width: 1200px;
    resize: none;
    width: 60vw;
  `,
}
