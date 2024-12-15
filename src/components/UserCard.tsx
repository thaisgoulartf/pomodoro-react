import { UserCardContainer, UserCardVariant } from "./UserCard.styles.ts";
interface UserCardProps {
  status: UserCardVariant;
  name: string;
}
export function UserCard({ status, name }: UserCardProps) {
  return <UserCardContainer variant={status}>
    <h3>{name}</h3>
    <p>Status: {status}</p>
  </UserCardContainer>
}