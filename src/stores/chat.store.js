import { create } from "zustand"
import api from "../lib/axios.js";
import { toast } from "react-toastify";
import { getFriend } from "../utils/utils.js";
import { useAuthStore } from "./auth.store.jsx";


export const useChatStore = create((set, get) => ({

    messages: null,
    friends: null,
    chats: null,
    allPeople: null,
    onlineUsers: null,
    selectedFriend: null,
    selectedChat: null,
    loading: false,
    pendingFriends: [],

    getFriends: async () => {
        try {
            let result = await api.get('/app/friends');
            let friends = result.data.friends;
            set({ friends: friends })
        } catch (error) {
            toast.error("couldn't get your chats please try again later");
        }
    },

    getChats: async () => {
        try {
            let result = await api.get('/app/chats');
            let chats = result.data.chats;

            set({ chats: chats })
        } catch (error) {
            toast.error("couldn't get your chats please try again later");
        }
    },

    getAllPeople: () => {
        set({ friends: FRIENDS });
    },

    setSelectedFriend: (selectedFriend) => {
        set({ selectedFriend: selectedFriend });
    },

    setSelectedChat: (selectedChat) => {
        set({ selectedChat: selectedChat });

        let friend = getFriend(useAuthStore.getState().authUser.id, selectedChat);

        set({ selectedFriend: friend });
    },

    getMessages: async () => {
        const { selectedChat } = get();
        let result = await api.get(`/app/chat/${selectedChat.id}/messages`);
        let messages = result.data.messages;
        set({ messages: messages });
    },
    sendMessage: () => {
        /* let { messages } = get()
         set({ messages: [...messages, message] })*/
    }
}))