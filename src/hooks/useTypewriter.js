import { useEffect, useRef, useState } from 'react';

export function useTypewriter(phrases, { typeSpeed = 55, deleteSpeed = 28, pause = 2200 } = {}) {
  const [text, setText] = useState('');
  const state = useRef({ phraseIdx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    let timer;

    function tick() {
      const { phraseIdx, charIdx, deleting } = state.current;
      const current = phrases[phraseIdx];

      if (!deleting && charIdx < current.length) {
        state.current.charIdx += 1;
        setText(current.slice(0, state.current.charIdx));
        timer = setTimeout(tick, typeSpeed);
        return;
      }

      if (!deleting && charIdx === current.length) {
        state.current.deleting = true;
        timer = setTimeout(tick, pause);
        return;
      }

      if (deleting && charIdx > 0) {
        state.current.charIdx -= 1;
        setText(current.slice(0, state.current.charIdx));
        timer = setTimeout(tick, deleteSpeed);
        return;
      }

      state.current.deleting = false;
      state.current.phraseIdx = (phraseIdx + 1) % phrases.length;
      timer = setTimeout(tick, typeSpeed);
    }

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [phrases, typeSpeed, deleteSpeed, pause]);

  return text;
}
