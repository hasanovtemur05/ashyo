"use client";

type LikeContextType = {
    likes: number[],
   setLikes: Dispatch<SetStateAction<number[]>>
   cart: number[],
   setCart: Dispatch<SetStateAction<number[]>>
}
import { createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
export const likeContext = createContext<LikeContextType>({
   likes: [],
   setLikes: ()=> {},
   cart: [],
   setCart: ()=> {}
})
export const Likeprovider = ({ children }:{children:ReactNode}) => {
    const [likes, setLikes] = useState<number[]>([]);
    const [cart, setCart] = useState<number[]>([])
    return <likeContext.Provider  value={{likes, setLikes, cart, setCart}}  >{children}</likeContext.Provider>;
}