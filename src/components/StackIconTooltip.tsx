import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@components/ui/tooltip"

import { useState } from "react"



const StackLink = ({name, url}: { name: string, url: string } ) => (
  <a href={url} className="bg-skin-card rounded-xl flex items-center justify-center gap-1 p-2  transition-all ">
    <iconify-icon  class="text-[20px]" icon="ant-design:link-outlined" /> 
    <span>{name}</span>
  </a>
)




export default ({name, url, icon, delayDuration=400}: { name: string, url: string, icon: string, delayDuration?: number }) => {
    const [opened, setOpen] = useState(false)
    const close = async () =>  setOpen(false)
    const open = () => setOpen(true)

    return (
      <TooltipProvider delayDuration={delayDuration}>
        <Tooltip open={opened}>
          <li onClick={open} onMouseLeave={close} onMouseEnter={open} > 
            <TooltipTrigger>
              <iconify-icon class="grid text-[33px] cursor-pointer place-self-center transition-all hover:scale-[1.3] " icon={icon} />
            </TooltipTrigger>
            <TooltipContent>
              <StackLink name={name} url={url} />
            </TooltipContent>
          </li>
        </Tooltip>
        </TooltipProvider>
    )
}

