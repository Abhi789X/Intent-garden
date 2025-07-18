import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  intents: string[]
}

const getElement = (intent: string, index: number) => {
  const lower = intent.toLowerCase()
  if (lower.includes('swap')) {
    return <motion.div key={index} className="text-blue-300 text-4xl animate-bounce">💧</motion.div>
  } else if (lower.includes('donate') || lower.includes('shield')) {
    return <motion.div key={index} className="text-pink-400 text-4xl animate-pulse">🌸</motion.div>
  } else if (lower.includes('dao') || lower.includes('govern')) {
    return <motion.div key={index} className="text-orange-400 text-4xl animate-wiggle">🔥</motion.div>
  } else if (lower.includes('coordinate') || lower.includes('organize')) {
    return <motion.div key={index} className="text-green-400 text-4xl animate-grow">🌳</motion.div>
  } else {
    return <motion.div key={index} className="text-purple-300 text-4xl animate-spin-slow">🌀</motion.div>
  }
}

const GardenView: React.FC<Props> = ({ intents }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 mb-6">
      <h2 className="text-xl font-semibold mb-2">🌿 Your Garden</h2>
      <div className="grid grid-cols-5 gap-4 justify-center items-center">
        {intents.map((intent, i) => getElement(intent, i))}
      </div>
    </div>
  )
}

export default GardenView
