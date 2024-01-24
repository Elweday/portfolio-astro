export const prerender = false;
import type { APIRoute } from 'astro';



function telegramHandler(token: string, chatId: string) {
    return async function (message: string) {
        const options = {
            method: 'POST', headers: {'Content-Type': 'application/json', },
        }
        const endPoint = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`
        return await fetch(endPoint, options)
    }
    
}



export const POST: APIRoute = async (ctx) => {
    const formData = await ctx.request.formData()
    const formatMessage = (data: FormData) => {
        return `
        New ${data.get("message-type")} from ${data.get("email")} %0A %0A
        ${data.get("message")}
        `;
      };
    const sendTelegramMessage = telegramHandler(import.meta.env.TELEGRAM_BOT_TOKEN, import.meta.env.MY_CHAT_ID);
    const message = formatMessage(formData);
    const res = await sendTelegramMessage(message);
  
    
    return new Response(JSON.stringify({
        message: res.ok? "Message sent successfully, You will be contacted soon, Thank you!!" : "Something went Wrong!!",
        status: res.ok ? 200 : 501
      })
    )
  }
  