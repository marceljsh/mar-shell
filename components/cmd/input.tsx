import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import Header from '@/components/cmd/header'
import { command } from '@/lib/utils'

type OutputProps = {
  output: string[]
  history: string
  doneLoading: () => void
}

const Output = ({ output, history, doneLoading }: OutputProps) => {
  const [displayedLines, setDisplayedLines] = useState<
    { text: string; fullText: string }[]
  >([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedLines(output.map((line) => ({ text: '', fullText: line })))
    }, 0)

    return () => clearTimeout(timer)
  }, [output])

  useEffect(() => {
    let interval: NodeJS.Timeout
    const updateLines = () => {
      setDisplayedLines((prevLines) =>
        prevLines.map((line) =>
          line.text.length < line.fullText.length
            ? { ...line, text: line.fullText.slice(0, line.text.length + 1) }
            : line
        )
      )
    }

    if (displayedLines.some((line) => line.text !== line.fullText)) {
      interval = setInterval(updateLines, 100)
    } else if (displayedLines.every((line) => line.text === line.fullText)) {
      doneLoading()
    }

    return () => clearInterval(interval)
  }, [displayedLines, doneLoading])

  useEffect(() => {
    const textarea = document.getElementById('command')
    textarea?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [displayedLines])

  return (
    <div className='flex flex-col'>
      <div className='flex items-start py-2'>
        <Header />
        <span className='dark:text-[#32cd32] text-clamp'>{history}</span>
      </div>
      {displayedLines.map((line, index) => (
        <pre
          key={index}
          className='dark:text-[#32cd32] text-clamp md:pl-4 py-4'
          dangerouslySetInnerHTML={{ __html: line.text }}
        />
      ))}
    </div>
  )
}

const CommandPrompt = () => {
  const [cmd, setCmd] = useState<string>('')
  const [outputs, setOutputs] = useState<string[][]>([])
  const [history, setHistory] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCmd(event.target.value)
  }

  const handleClear = () => {
    document.body.style.opacity = '0'
    setTimeout(() => {
      setOutputs([])
      setCmd('')
      setHistory([])
      document.body.style.opacity = '1'
    }, 500)
  }

  const handleThemeChange = () => {
    document.body.style.opacity = '0'
    const output = command('theme')
    setTimeout(() => {
      setOutputs((prevOutputs) => [...prevOutputs, output])
      setHistory((prevHistory) => [...prevHistory, 'theme'])
      setCmd('')
      document.body.classList.toggle('dark')
      document.body.style.opacity = '1'
    }, 500)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    if (loading) return

    if (cmd === '') {
      return
    } else if (cmd === 'clear' || cmd === 'cls') {
      handleClear()
      return setLoading(false)
    } else if (cmd === 'exit') {
      window.close()
      return setLoading(false)
    } else if (cmd === 'theme') {
      handleThemeChange()
      return setLoading(false)
    } else {
      const output = command(cmd)
      setOutputs((prevOutputs) => [...prevOutputs, output])
      setHistory((prevHistory) => [...prevHistory, cmd])
      setCmd('')
    }
  }

  return (
    <div className='dark:text-[#32cd32] text-clamp w-full max-w-lg flex flex-col'>
      <div className='flex flex-col w-full pt-6'>
        {outputs.map((output, index) => (
          <Output
            key={index}
            output={output}
            history={history[index]}
            doneLoading={() => setLoading(false)}
          />
        ))}
      </div>
      <div className='w-0 h-0 opacity-0 block md:inline-block text-neon-purple text-neon-red text-neon-yellow text-neon-green text-neon-white text-neon-black' />
      <form className='flex py-2 items-start' onSubmit={handleSubmit}>
        <Header />
        <input
          className='bg-transparent border-0 outline-none cursor-text w-full dark:text-[#32cd32] resize-none'
          type='text'
          id='command'
          value={cmd}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </div>
  )
}

export default CommandPrompt
