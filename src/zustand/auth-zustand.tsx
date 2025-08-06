import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  token: string | null;
  setToken: (newToken: string | null) => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      token: null,
      setToken: (newToken: string | null) => set({ token: newToken }),
    }),
    {
      name: "token",
    }
  )
);

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }

export function useToken(token: string | null) {
  const { setToken } = useStore();

  setToken(token);
}
