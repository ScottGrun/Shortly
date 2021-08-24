export const shortenUrl = async (submittedURL: string) => {
    const res = await fetch("/api/shortener", {
        body: JSON.stringify({
            longUrl: submittedURL,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });

    return await res.json();

};