import dayjs from "dayjs";
import type { Todo } from "../types.js";

export const isOverdue  = (dt: Todo,ndt: Date): boolean => {
  const isDone = dt.isDone;
  if(isDone){
    return false;
  }else{
    const deadline = dt.deadline;
    const dlt = dayjs(deadline)
    const nt = dayjs(ndt)
    if(nt.isAfter(dlt)){
        return true;
    }else{
        return false;
    }
}  
}