
export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
  industry: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
