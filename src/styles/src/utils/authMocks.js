const FAKE_DB = {
    'farmer_user': { username: 'farmer_user', type: 'farmer', name: 'John Doe', token: 'fake-farmer-jwt' },
    'customer_user': { username: 'customer_user', type: 'customer', name: 'Jane Smith', token: 'fake-customer-jwt' },
};

export const registerUser = async (userData) => {
    // Simulate API call delay and success
    await new Promise(resolve => setTimeout(resolve, 500));
    const userType = userData.nationalId ? 'farmer' : 'customer';
    if (userData.username in FAKE_DB) {
        throw new Error('Username already taken.');
    }
    // Add to mock DB and return a mock token
    FAKE_DB[userData.username] = { username: userData.username, type: userType, name: userData.fullNames || 'New User', token: `fake-${userType}-jwt` };
    return { success: true, userType, token: `fake-${userType}-token` };
};

export const loginUser = async ({ username, password }) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const user = FAKE_DB[username];
    
    if (user && password === 'password') { // Simplified mock password check
        return { success: true, userType: user.type, token: user.token };
    }
    throw new Error('Invalid credentials.');
};
