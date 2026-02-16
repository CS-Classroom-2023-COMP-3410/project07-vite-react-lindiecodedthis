
// A small component for the header, receiving user data via props
export function ProfileHeader({ user }) {
  return (
    <div>
      <h2>Profile of {user.name}</h2>
    </div>
  );
}
