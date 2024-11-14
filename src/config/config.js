export async function getConfig() {
    const response = await fetch('/config.php');
    if (!response.ok) {
    throw new Error('Failed to load config');
    }
    return await response.json();
    }