import React from 'react';
import { Button } from 'pixel-retroui';

const FinalButtons = ({ onReplay }: { onReplay: () => void }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Button
        bg="#fefcd0"
        textColor="black"
        borderColor="#c381b5"
        className="px-6 py-2"
        onClick={onReplay}
      >
        Replay
      </Button>
      <Button
        bg="#fefcd0"
        textColor="black"
        borderColor="#c381b5"
        className="px-6 py-2"
        onClick={() => window.location.href = 'https://example.com/play'}
      >
        Feeling like hitting play?
      </Button>
      <Button
        bg="#fefcd0"
        textColor="black"
        borderColor="#c381b5"
        className="px-6 py-2"
        onClick={() => window.location.href = 'https://example.com/source-code'}
      >
        Want the source code? I got you girl ;)
      </Button>
      <Button
        bg="#fefcd0"
        textColor="black"
        borderColor="#c381b5"
        className="px-6 py-2"
      >
        Conversation Highlights
      </Button>
    </div>
  );
};

export default FinalButtons;