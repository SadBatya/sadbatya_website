import {useQuery} from '@tanstack/react-query'
import { getCurrentTestDescription } from '../get-current-test-description'
import { type Level } from '@/shared/lib'

export const useGetCurrentTestDescription = (title: string, level: Level) => useQuery({
  queryKey: ['current-test', title, level],
  queryFn: () => getCurrentTestDescription(title, level),
})