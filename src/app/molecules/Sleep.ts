// Async function to implement a simple sleep. Used in async retrying http calls
export async function Sleep(millisec = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({}), millisec);
    });
}
