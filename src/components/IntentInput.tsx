import React, { useState } from 'react'

interface Props {
  onSubmit: (intent: string) => void
}

const IntentInput: React.FC<Props> = ({ onSubmit }) => {
  const [intent, setIntent] = useState('')

  const handleSubmit = () => {
    if (intent.trim() !== '') {
      onSubmit(intent.trim())
      setIntent('')
    }
  }

  return (
    <div className="flex flex-col gap-3 mb-6">
      <textarea
        value={intent}
        onChange={(e) => setIntent(e.target.value)}
        placeholder="What's your intent today? (e.g. Swap tokens privately)"
        className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        rows={3}
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition-all"
      >
        Plant Intent 🌱
      </button>
    </div>
  )
}

export default IntentInput
