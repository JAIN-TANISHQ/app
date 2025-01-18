export interface KPICard {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  timeframe: string;
}

export interface User {
  name: string;
  role: string;
  avatar: string;
}

export interface UserAccount {
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Workspace {
  id: string;
  name: string;
  icon: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface Timer {
  duration: number;
  type: 'focus' | 'break' | 'coding';
  isActive: boolean;
}