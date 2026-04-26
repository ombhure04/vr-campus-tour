import { Scene } from "../types/scene";

interface Props {
  goTo: (scene: Scene) => void;
}

export const useVoice = ({ goTo }: Props) => {

  const handleSearch = (query: string) => {
    const key = query.toLowerCase().trim();

    const map: Record<string, Scene> = {
      library: "library",
      auditorium: "auditorium",
      entrance: "entrance1",
      corridor: "corridor_main",
      straight: "straight",
      "class 1": "left_class1",
      "class 2": "left_class2",
    };

    const found = Object.keys(map).find(k => key.includes(k));

    if (found) {
      goTo(map[found]);
      return;
    }

    alert("Location not found");
  };

  const startVoice = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript.toLowerCase();
      handleSearch(text);
    };

    recognition.start();
  };

  return { startVoice, handleSearch };
};