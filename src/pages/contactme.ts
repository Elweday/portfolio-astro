export const prerender = false;
import type { APIRoute } from 'astro';
import { MESSAGE_OPTIONS } from '@config'



function telegramHandler(token: string, chatId: string) {
    return async function (message: string) {
        const options = {
            method: 'POST', headers: {'Content-Type': 'application/json', },
        }
        const endPoint = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`
        return await fetch(endPoint, options)
    }
    
}



const formatMessage = (messageType: string, email: string, message: string) => {
  return `
  New ${messageType} from ${email} %0A %0A
  ${message}
  `;
};

const failureMessage = {
  title: "Something went Wrong!!",
  message: "Please Try again later, thanks for contacting me.",
  status: 501
} as const;

export const POST: APIRoute = async (ctx) => {
  try {
    const formData = await ctx.request.formData()
    const messageType = formData.get("message-type") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const sendTelegramMessage = telegramHandler(import.meta.env.TELEGRAM_BOT_TOKEN, import.meta.env.MY_CHAT_ID);
    const messageBody = formatMessage(messageType, email, message);
    const res = await sendTelegramMessage(messageBody);
    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    const resMessage = MESSAGE_OPTIONS.find((option) => option.name === messageType)!.result;

    return new Response(JSON.stringify({
        title: resMessage.title,
        message: resMessage.message ,
        status: 200
      })
    )

  } catch (error) {
    return new Response(JSON.stringify(failureMessage)
    )
  }

  }
  