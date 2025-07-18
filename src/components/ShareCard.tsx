import React, { useRef } from 'react'
import html2canvas from 'html2canvas'

interface Props {
  intents: string[]
}

const ShareCard: React.FC<Props> = ({ intents }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const downloadCard = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas) => {
        const link = document.createElement('a')
        link.download = 'intent-garden.png'
        link.href = canvas.toDataURL()
        link.click()
      })
    }
  }

  return (
    <div className="text-center">
      <div
        ref={cardRef}
        className="bg-gradient-to-br from-green-900 to-black rounded-xl p-6 inline-block border border-green-700 mb-4"
      >
        <h3 className="text-2xl font-bold mb-3">🌱 My Intent Garden</h3>
        <div className="grid grid-cols-5 gap-3">
          {intents.map((intent, i) => (
            <div key={i} className="text-3xl">
              {intent.toLowerCase().includes('swap') ? '💧' :
               intent.toLowerCase().includes('donate') || intent.toLowerCase().includes('shield') ? '🌸' :
               intent.toLowerCase().includes('dao') ? '🔥' :
               intent.toLowerCase().includes('coordinate') ? '🌳' : '🌀'}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-300">Planted {intents.length} intents so far 🌿</p>
      </div>
      <button
        onClick={downloadCard}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl"
      >
        Download My Garden 🖼️
      </button>
    </div>
  )
}

export default ShareCard
