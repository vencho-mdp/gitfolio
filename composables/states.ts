export const useUser = () => useState<object>('user', () => ({}))
export const useRepos = () => useState<Array>('repos', () => ([]))