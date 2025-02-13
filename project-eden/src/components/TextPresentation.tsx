import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, ProgressBar } from 'pixel-retroui'

const TextPresentation = ({ onComplete }: { onComplete: () => void }) => {
  const [showProgressBar, setShowProgressBar] = useState(false)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (showProgressBar) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setFadeOut(true)
            setTimeout(() => {
              onComplete()
            }, 2000)
            return prev
          }
          return prev + 1
        })
      }, 50)
    }
  }, [showProgressBar, onComplete])

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center"
        >
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-4">Welcome Diana :D</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8">To the person who lights up my days... this one's for you</h2>
          </div>
          {!showProgressBar && (
            <Button
              bg="#28a745"
              textColor="#ffffff"
              shadow="#6c757d"
              className="text-xl md:text-2xl lg:text-3xl px-6 py-1 mb-8"
              onClick={() => setShowProgressBar(true)}
            >
              ▶ Ready?
            </Button>
          )}
          {showProgressBar && (
            <>
              <ProgressBar
                size="md"
                color="#009EFF"
                borderColor="gray"
                className="w-full"
                progress={progress}
              />
              <p className="text-white mt-2">Compiling... &lt;3 {progress}%</p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TextPresentation