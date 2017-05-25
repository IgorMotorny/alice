import { Injectable } from '@angular/core';

@Injectable()
export class VoiceService {
  element: any;

  constructor() { }

  say({ text, ended, started }) {
    this.stop();

    this.element = document.createElement('audio');
    document.body.appendChild(this.element);
    this.element.src = this.getUrl(text);
    this.element.oncanplaythrough = () => {
      this.element.play();
      if (started) { started(); }
    };
    this.element.onended = () => {
      this.stop();
      if (ended) { ended(); }
    };
  }

  stop() {
    if (!this.element) { return; }

    this.element.pause();
    this.element.remove();
    this.element = null;
  }

  getUrl(text: string): string {
    return `https://tts.voicetech.yandex.net/generate?text=${encodeURIComponent(text)}&format=mp3&lang=ru-RU&speaker=ermil&speed=1.1&emotion=good&key=eb4e0c54-b98f-4130-bcde-02998d05de2c`;
  }

}
