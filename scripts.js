  const buttons = document.querySelectorAll('.play-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const audioId = btn.getAttribute('data-audio');
      const noteId = btn.getAttribute('data-note');
      const audio = document.getElementById(audioId);
      const note = document.getElementById(noteId);

      // Pause and reset all others
      buttons.forEach(otherBtn => {
        const otherAudio = document.getElementById(otherBtn.getAttribute('data-audio'));
        const otherNote = document.getElementById(otherBtn.getAttribute('data-note'));

        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
          otherBtn.textContent = 'Play';
          otherNote.classList.remove('playing');
        }
      });

      if (audio.paused) {
        audio.play();
        btn.textContent = 'Pause';
        note.classList.add('playing');
      } else {
        audio.pause();
        btn.textContent = 'Play';
        note.classList.remove('playing');
      }

      audio.onended = () => {
        btn.textContent = 'Play';
        note.classList.remove('playing');
      };
    });
  });