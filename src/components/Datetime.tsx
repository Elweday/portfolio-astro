import { LOCALE } from "@config";

export interface Props {
  datetime: string | Date;
  endDate?: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className, endDate }: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1792 993q60 41 107 93t81 114t50 131t18 141q0 119-45 224t-124 183t-183 123t-224 46q-91 0-176-27t-156-78t-126-122t-85-157H128V128h256V0h128v128h896V0h128v128h256zM256 256v256h1408V256h-128v128h-128V256H512v128H384V256zm643 1280q-3-31-3-64q0-86 24-167t73-153h-97v-128h128v86q41-51 91-90t108-67t121-42t128-15q100 0 192 33V640H256v896zm573 384q93 0 174-35t142-96t96-142t36-175q0-93-35-174t-96-142t-142-96t-175-36q-93 0-174 35t-142 96t-96 142t-36 175q0 93 35 174t96 142t142 96t175 36m64-512h192v128h-320v-384h128zM384 1024h128v128H384zm256 0h128v128H640zm0-256h128v128H640zm-256 512h128v128H384zm256 0h128v128H640zm384-384H896V768h128zm256 0h-128V768h128zm256 0h-128V768h128z"/></svg>      <span className="sr-only">Posted on:</span>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime datetime={datetime} endDate={endDate} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime, endDate }: { datetime: string | Date, endDate?: string | Date }) => {
  const myDatetime = new Date(datetime);
  const dateFormat: Intl.DateTimeFormatOptions =  endDate? { year: "numeric", month: "short"} : { year: "numeric", month: "short", day: "numeric"}
  const timeFormat: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit"}
  const date = myDatetime.toLocaleDateString(LOCALE, dateFormat);
  const time = myDatetime.toLocaleTimeString(LOCALE, timeFormat);
  const end = endDate && new Date(endDate).toLocaleDateString(LOCALE, dateFormat);


  return (
    <>
      {date}
      <span className="sr-only">&nbsp;at&nbsp;</span>
      {end ? " - " + end : ""}
      {!endDate ? " " + time : ""}
    </>
  );
};
