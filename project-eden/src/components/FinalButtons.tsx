import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'pixel-retroui';

const FinalButtons = ({ onReplay }: { onReplay: () => void }) => {
  const [fadeOut, setFadeOut] = React.useState(false);

  const handleReplay = () => {
    setFadeOut(true);
    setTimeout(() => {
      onReplay();
    }, 500); // Duración del desvanecimiento
  };

  const handleConversationHighlights = () => {
    alert("Oops, you've caught me! This is still a work in progress D:. Stay tuned, it’ll be worth the wait! ;)");
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
        >
          <Button
            bg="#fefcd0"
            textColor="black"
            borderColor="#c381b5"
            className="px-6 py-2"
            onClick={handleReplay}
          >
           ↻ Replay
          </Button>
          <Button
            bg="#fefcd0"
            textColor="black"
            borderColor="#c381b5"
            className="px-6 py-2"
            onClick={() => window.open('https://open.spotify.com/playlist/0OU6L0ZUmOUaGpFym7UJ8j?si=aee282b01aaa46ca', '_blank')}
          >
            Feeling like hitting play? ▶
          </Button>
          <Button
            bg="#fefcd0"
            textColor="black"
            borderColor="#c381b5"
            className="px-6 py-2"
            onClick={() => window.open('https://github.com/onlymikey/ProjectEden', '_blank')}
          >
           &lt;/&gt; Want the source code? I got you girl ;)
          </Button>
          <Button
            bg="#fefcd0"
            textColor="black"
            borderColor="#c381b5"
            className="px-6 py-2"
            onClick={handleConversationHighlights}
          >
            Conversation Highlights
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FinalButtons;