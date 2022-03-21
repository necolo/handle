import { getHint } from '../logic'
import { answers } from './list'

export function getAnswerOfDay(day: number): { word: string; hint: string } {
  const random = Math.floor(Math.random() * answers.length);
  const [word = '', hint = ''] = answers[random] || []
  if (!word) {
    return getAnswerOfDay(0);
  }
  return {
    word,
    hint: hint || getHint(word),
  }
}
