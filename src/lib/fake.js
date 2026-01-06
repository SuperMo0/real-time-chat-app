// constants.js

// --- 1. THEME CONSTANTS ---
export const COLORS = {
    primaryGradient: 'linear-gradient(135deg, #0061ff 0%, #60efff 100%)',
    primaryShadow: '0 10px 20px rgba(0, 97, 255, 0.3)',
};

// --- 2. CURRENT USER PROFILE ---
export const CURRENT_USER = {
    id: 'me',
    name: 'Alex Design',
    email: 'alex@design.com',
    avatar: 'https://i.pravatar.cc/150?u=alex_design_2024', // Random avatar generator
    bio: 'UI/UX Designer | React Developer',
};

// --- 3. FRIENDS LIST (Sidebar Data) ---
export const FRIENDS = [
    {
        id: 1,
        name: 'Sarah Lee',
        avatar: 'https://i.pravatar.cc/150?u=sarah_lee',
        lastMessage: 'Can you send me the Figma file?',
        time: '2 mins ago',
        unreadCount: 2,
        isOnline: true,
    },
    {
        id: 2,
        name: 'Jason McAllister',
        avatar: 'https://i.pravatar.cc/150?u=jason_mc',
        lastMessage: 'Bro, that blue gradient is fire! 🔥',
        time: '10:42 AM',
        unreadCount: 0,
        isOnline: true,
    },
    {
        id: 3,
        name: 'Emily Chen',
        avatar: 'https://i.pravatar.cc/150?u=emily_chen',
        lastMessage: 'See you at the meeting tomorrow.',
        time: 'Yesterday',
        unreadCount: 0,
        isOnline: false,
    },
    {
        id: 4,
        name: 'David Smalls',
        avatar: 'https://i.pravatar.cc/150?u=david_s',
        lastMessage: 'Thanks for the help!',
        time: 'Mon',
        unreadCount: 0,
        isOnline: false,
    },
    {
        id: 5,
        name: 'Design Team',
        avatar: 'https://ui-avatars.com/api/?name=Design+Team&background=0D8ABC&color=fff', // Generated initials
        lastMessage: 'Alice: I pushed the new changes.',
        time: 'Mon',
        unreadCount: 5,
        isOnline: true, // Group active
        isGroup: true,
    }
];

// --- 4. CHAT HISTORY (Messages) ---
// Keys correspond to the Friend IDs above
export const MESSAGES = {
    1: [ // Chat with Sarah Lee
        {
            id: 1,
            senderId: 1, // Sarah
            text: 'Hey Alex! How is the new app design coming along?',
            timestamp: '10:00 AM',
            status: 'read',
        },
        {
            id: 2,
            senderId: 'me',
            text: 'It is going great! I just finished the dark mode.',
            timestamp: '10:02 AM',
            status: 'read',
        },
        {
            id: 3,
            senderId: 1,
            text: 'Awesome! I can\'t wait to see it.',
            timestamp: '10:03 AM',
            status: 'read',
        },
        {
            id: 4,
            senderId: 1,
            text: 'Can you send me the Figma file?',
            timestamp: '10:05 AM',
            status: 'delivered', // Not read yet
        },
    ],
    2: [ // Chat with Jason
        {
            id: 1,
            senderId: 'me',
            text: 'Check out this button style I made.',
            timestamp: '10:30 AM',
            status: 'read',
        },
        {
            id: 2,
            senderId: 2,
            text: 'Bro, that blue gradient is fire! 🔥',
            timestamp: '10:42 AM',
            status: 'read',
        }
    ]
};