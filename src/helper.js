export function parseJson(data) {
    try {
        return JSON.parse(data);
    } catch (error) {
        return data;
    }
}
