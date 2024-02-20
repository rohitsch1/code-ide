import React, { useContext, useState } from 'react'
import CodeEditor from './CodeEditor'
import styled from 'styled-components'
import { BiEditAlt, BiImport } from 'react-icons/bi'
import { ModelContext } from '../../context/ModalContext'
import Select from 'react-select';
import { languageMap } from '../../context/PlaygroundContext'
// import { languageMap } from '../../context/PlaygroundContext'

const StyledEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const UpperToolBar = styled.div`
  background: #fff;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
`

const SelectBars = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > div{
    width: 10rem;
  }
`
const Button = styled.button`
  padding: 0.6rem 1rem;
  background: #0097d7;
  border: none;
  border-radius: 32px;
  font-weight: 700;
  cursor: pointer;
`
const LowerToolBar = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  input{
    display: none;
  }
  label{
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
`

const EditorContainer = ({
  title,
  currentLanguage,
  setCurrentLanguage,
  currentCode,
  setCurrentCode,
  folderId,
  playgroundId,
  saveCode,
  runCode
}) => {

  const { openModal } = useContext(ModelContext)
  const themeOptions = [
    { value: 'githubDark', label: 'githubDark' },
    { value: 'githubLight', label: 'githubLight' },
    { value: 'bespin', label: 'bespin' },
    { value: 'duotoneDark', label: 'duotoneDark' },
    { value: 'duotoneLight', label: 'duotoneLight' },
    { value: 'dracula', label: 'dracula' },
    { value: 'xcodeDark', label: 'xcodeDark' },
    { value: 'xcodeLight', label: 'xcodeLight' },
    { value: 'vscodeDark', label: 'vscodeDark' },
    { value: 'vscodeLight', label: 'vscodeLight' },
    { value: 'okaidia', label: 'okaidia' },
  ]

  const languageOptions = [
    { value: 'cpp', label: 'cpp' },
    { value: 'javascript', label: 'javascript' },
    { value: 'java', label: 'java' },
    { value: 'python', label: 'python' },
  ]

  const handleThemeChange = (selectedOption) => {
    setCurrentTheme(selectedOption)
  }

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption)
    setCurrentLanguage(selectedOption.value)
    setCurrentCode(languageMap[selectedOption.value].defaultCode)
  }

  const [currentTheme, setCurrentTheme] = useState({ value: 'githubDark', label: 'githubDark' })
  const [language, setLanguage] = useState(() => {
    for (let i = 0; i < languageOptions.length; i++) {
      // if (languageOptions[i].value === currentLanguage) {
      //   return languageOptions[i]
      // }
    }
    return languageOptions[0];
  })
  return (
    <StyledEditorContainer>
      <UpperToolBar>
        <Title>
          <h3>{title}</h3>
          <BiEditAlt onClick={() => openModal({
            show: true,
            modalType: 5,
            identifiers: {
              folderId: folderId,
              cardId: playgroundId,
            }
          })} />
        </Title>
        <SelectBars>
          <Button onClick={saveCode}>Save code</Button>
          <Select
            options={languageOptions}
            value={language}
            onChange={handleLanguageChange}
          />
          <Select
            options={themeOptions}
            value={currentTheme}
            onChange={handleThemeChange}
          />
        </SelectBars>
      </UpperToolBar>
      <CodeEditor
        currentLanguage={currentLanguage}
        currentTheme={currentTheme.value}
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
      />
      <LowerToolBar>
        <label htmlFor="codefile">
          <input type="file" accept="." id="codefile" /> <BiImport /> Import Code
        </label>

        <Button onClick={runCode}>Run Code</Button>
      </LowerToolBar>
    </StyledEditorContainer >
  )
}

export default EditorContainer