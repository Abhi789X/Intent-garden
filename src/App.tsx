import React, { useState } from 'react'
import IntentInput from './components/IntentInput'
import GardenView from './components/GardenView'
import ShareCard from './components/ShareCard'

const App = () => {
  const [intents, setIntents] = useState<string[]>([])

  const handleNewIntent = (intent: string) => {
    const updated = [...intents, intent]
    setIntents(updated)
    localStorage.setItem('intentGarden', JSON.stringify(updated))
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🌱 Intent Garden</h1>
      <IntentInput onSubmit={handleNewIntent} />
      <GardenView intents={intents} />
      {intents.length > 0 && <ShareCard intents={intents} />}
    </div>
  )
}

export default App
