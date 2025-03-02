import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./ui/avatar"
  
  export function ZaidAvatar() {
    return (
      <Avatar>
        <AvatarImage src="https://zaidejaz.com/assets/images/zaid.png" alt="@zaidejaz" />
        <AvatarFallback>ZE</AvatarFallback>
      </Avatar>
    )
  }
  