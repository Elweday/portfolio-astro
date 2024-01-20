import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@components/ui/tooltip"

import { useState } from "react"





export default ({name, url, icon, delayDuration=400}: { name: string, url: string, icon: string, delayDuration?: number }) => {

    const [opened, setOpen] = useState(false)
    const close = async () =>  setOpen(false)
    const open = () => setOpen(true)

    return (
  <li
  onFocus={open}
  onMouseOver={open}
  onBlur={close}
  onMouseLeave={close}
  
  > 
      <TooltipProvider 
delayDuration={delayDuration}

>
<Tooltip
  open={opened}

>
  <TooltipTrigger
    >
    <iconify-icon
    class="grid text-[33px] cursor-pointer place-self-center transition-all hover:scale-[1.3] " icon={icon} 
></iconify-icon>

  </TooltipTrigger>
  <TooltipContent
        >
    <a href={url} className="bg-skin-card rounded-xl flex items-center justify-center gap-1 p-2  transition-all ">
  <iconify-icon class="text-[20px]" icon="ant-design:link-outlined" /> 
  <span>
    {name}

  </span>
</a>
  </TooltipContent>
</Tooltip>
</TooltipProvider>
</li>

)
}

