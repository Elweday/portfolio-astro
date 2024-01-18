

export function telegramHandler(token: string, chatId: string) {
    return async function (message: string) {
        const options = {
            method: 'POST', headers: {'Content-Type': 'application/json', },
        }
        const endPoint = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`
        return await fetch(endPoint, options)
    }
    
}


