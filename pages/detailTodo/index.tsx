import { useLocation, useParams } from "react-router-dom"
import { DetailTodoContainer } from "./style"
import useQuery from "@/hooks/useQuery";
import { useEffect } from "react";
export default function DetailTodo() {

  const params = useParams();
  const location = useLocation();
  const query = useQuery();

  useEffect(() => {
    console.log(params);
    console.log(location);
    console.log(query);

  })
  return (
    <DetailTodoContainer>
      <p>
        Detail
      </p>
    </DetailTodoContainer>
  )
}
