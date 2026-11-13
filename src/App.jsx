import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Celebration from './pages/Celebration'
import ChineseContents from './pages/ChineseContents'
import ChineseIdioms from './pages/ChineseIdioms'
import Contents from './pages/Contents'
import EnglishContents from './pages/EnglishContents'
import IdiomStory from './pages/IdiomStory'
import MathContents from './pages/MathContents'
import Onboarding from './pages/Onboarding'
import PracticePage from './pages/PracticePage'
import ScienceContents from './pages/ScienceContents'
import Subjects from './pages/Subjects'
import TopicDetail from './pages/TopicDetail'

function App() {
  const [screen, setScreen] = useState('grade')
  const [grade, setGrade] = useState('grade-1')
  const [subject, setSubject] = useState(null)
  const [idiom, setIdiom] = useState(null)
  const location = useLocation()

  // 直接打开 /topic/... 时，返回按钮可以恢复到对应科目的知识点列表
  useEffect(() => {
    const restore = location.state?.restoreSubject
    if (!restore) return

    setSubject(restore)
    setScreen('contents')
  }, [location.state])

  let page = null

  if (screen === 'grade') {
    page = (
      <Onboarding
        grade={grade}
        onGradeChange={setGrade}
        onContinue={() => setScreen('subjects')}
      />
    )
  } else if (screen === 'subjects') {
    page = (
      <Subjects
        grade={grade}
        onGradeChange={setGrade}
        onBack={() => setScreen('grade')}
        onSelect={(item) => {
          setSubject(item)
          setScreen('contents')
        }}
      />
    )
  } else if (screen === 'contents') {
    if (subject?.id === 'chinese') {
      page = (
        <ChineseContents
          grade={grade}
          onBack={() => setScreen('subjects')}
          onOpenIdioms={() => setScreen('idioms')}
        />
      )
    } else if (subject?.id === 'math') {
      page = <MathContents onBack={() => setScreen('subjects')} />
    } else if (subject?.id === 'english') {
      page = <EnglishContents onBack={() => setScreen('subjects')} />
    } else if (subject?.id === 'science') {
      page = <ScienceContents onBack={() => setScreen('subjects')} />
    } else {
      page = <Contents subject={subject} onBack={() => setScreen('subjects')} />
    }
  } else if (screen === 'idioms') {
    page = (
      <ChineseIdioms
        grade={grade}
        onBack={() => setScreen('contents')}
        onStart={(item) => {
          setIdiom(item)
          setScreen('story')
        }}
      />
    )
  } else if (screen === 'story') {
    page = (
      <IdiomStory
        idiom={idiom}
        onBack={() => setScreen('idioms')}
        onFinish={() => setScreen('done')}
      />
    )
  } else {
    page = (
      <Celebration
        idiom={idiom}
        onLearnMore={() => setScreen('idioms')}
        onSayGoodbye={() => {
          setIdiom(null)
          setSubject(null)
          setScreen('grade')
        }}
      />
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-100 via-violet-50 to-amber-50 p-5">
      <section className="w-full max-w-md rounded-[32px] bg-white px-6 py-9 shadow-[0_24px_60px_-24px_rgba(124,58,237,0.35)] ring-1 ring-slate-900/5 sm:px-9">
        <Routes>
          <Route path="/topic/:subject/:id" element={<TopicDetail />} />
          <Route path="/practice/:id" element={<PracticePage />} />
          <Route path="*" element={page} />
        </Routes>
      </section>
    </main>
  )
}

export default App
