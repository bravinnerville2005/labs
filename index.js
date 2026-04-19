function mergeUserArrays(...userArrays) {
    const mergedUsers = [...new Set(userArrays.flat())];
    const mergeDate = new Date().toISOString();
    
    return {
        users: mergedUsers,
        mergeDate: mergeDate,
        totalUsers: mergedUsers.length,
        sourceArrays: userArrays.length
    };
}