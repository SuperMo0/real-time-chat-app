import { create } from "zustand"
import api from "../lib/axios.js";
import { toast } from "react-toastify";
import { getFriend } from "../utils/utils.js";
import { useAuthStore } from "./auth.store.jsx";


export const useChatStore = create((set, get) => ({

    isLoading: false,

    messages: null,

    friends: null,

    chats: null,

    users: null,

    onlineUsers: null,

    selectedFriend: null,

    selectedChat: null,

    requestsByUser: null,

    requestsToUser: null,

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

    getUsers: async () => {
        const result = await api('/app/users');
        const users = result.data.users
        set({ users: users });
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



    sendMessage: async (content) => {
        try {
            const { selectedChat } = get();

            const result = await api.post(`app/message/${selectedChat.id}`, { content })

            let newMessage = result.data.message;

            set({ messages: [...get().messages, newMessage] });

        } catch (error) {
            toast.error("couldn't send message please try again");
            throw error;
        }

    },

    getRequestsByUser: async () => {
        try {
            const result = await api.get('/app/requests/by');
            const requestsBy = result.data.requestsBy;
            set({ requestsByUser: requestsBy });
        } catch (error) {
            console.log(error);


        }

    },

    getRequestsToUser: async () => {
        const result = await api.get('/app/requests/to');
        const requestsTo = result.data.requestsTo;
        set({ requestsToUser: requestsTo });
    }
}))