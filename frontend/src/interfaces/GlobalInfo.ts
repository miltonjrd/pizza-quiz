import User from "./User";

interface GlobalInfo {
  user: User,
  time: number,
  answers: Array<number>,
  interval: ReturnType<typeof setInterval>
}

export default GlobalInfo;