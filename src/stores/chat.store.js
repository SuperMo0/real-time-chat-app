import { create } from "zustand"
import { globalUsers, pendingFriends, CURRENT_USER, MESSAGES, FRIENDS, onlineUsers, message } from './../lib/fake.js'


export const useChatStore = create((set, get) => ({
    messages: [],
    friends: FRIENDS,
    allPeople: globalUsers,
    onlineUsers: [],
    selectedFriend: null,
    loading: false,
    pendingFriends: pendingFriends,

    getFriends: () => {
        set({ friends: FRIENDS });
    },

    getAllPeople: () => {
        set({ friends: FRIENDS });
    },

    setSelectedFriend: (selectedFriend) => {

        set({ selectedFriend: selectedFriend });
    },

    getMessages: () => {
        const { selectedFriend } = get();
        set({ messages: MESSAGES[selectedFriend.id] });
    },
    sendMessage: () => {
        let { messages } = get()
        set({ messages: [...messages, message] })
    }
}))